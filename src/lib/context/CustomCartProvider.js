"use client";
import * as React from "react";

// LocalStorage hook integrated directly in this file
function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = React.useState(() => {
        try {
            const item =
                typeof window !== "undefined" && window.localStorage.getItem(key);
            return item ? item : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, valueToStore);
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue];
}

// CustomCartProvider context and logic
const CartContext = React.createContext();

const initialState = {
    items: [],
    isEmpty: true,
    totalItems: 0,
    totalUniqueItems: 0,
    cartTotal: 0,
    metadata: {},
};

export const CustomCartProvider = ({
    children,
    id: cartId,
    defaultItems = [],
    onSetItems,
    onItemAdd,
    onItemUpdate,
    onItemRemove,
    onEmptyCart,
    metadata,
}) => {
    const id = cartId ? cartId : createCartIdentifier();

    const [savedCart, saveCart] = useLocalStorage(
        cartId ? `use-cart-${id}` : `use-cart`,
        JSON.stringify({
            id,
            ...initialState,
            items: defaultItems,
            metadata,
        })
    );

    const [state, dispatch] = React.useReducer(reducer, JSON.parse(savedCart));

    React.useEffect(() => {
        saveCart(JSON.stringify(state));
    }, [state, saveCart]);

    const setItems = (items) => {
        dispatch({
            type: "SET_ITEMS",
            payload: items.map((item) => ({
                ...item,
                quantity: item.quantity || 1,
            })),
        });
        onSetItems && onSetItems(items);
    };

    const addItem = (item, quantity = 1) => {
        if (!item.id) throw new Error("You must provide an `id` for items");
        if (quantity <= 0) return;

        const currentItem = state.items.find((i) => i.id === item.id);

        if (!currentItem && !item.hasOwnProperty("price"))
            throw new Error("You must pass a `price` for new items");

        if (!currentItem) {
            const payload = { ...item, quantity };
            dispatch({ type: "ADD_ITEM", payload });
            onItemAdd && onItemAdd(payload);
            return;
        }

        const payload = { ...item, quantity: currentItem.quantity + quantity };
        dispatch({ type: "UPDATE_ITEM", id: item.id, payload });
        onItemUpdate && onItemUpdate(payload);
    };

    const updateItem = (id, payload) => {
        if (!id || !payload) return;
        dispatch({ type: "UPDATE_ITEM", id, payload });
        onItemUpdate && onItemUpdate(payload);
    };

    const updateItemQuantity = (id, quantity) => {
        if (quantity <= 0) {
            onItemRemove && onItemRemove(id);
            dispatch({ type: "REMOVE_ITEM", id });
            return;
        }

        const currentItem = state.items.find((item) => item.id === id);
        if (!currentItem) throw new Error("No such item to update");

        const payload = { ...currentItem, quantity };
        dispatch({ type: "UPDATE_ITEM", id, payload });
        onItemUpdate && onItemUpdate(payload);
    };

    const removeItem = (id) => {
        if (!id) return;
        dispatch({ type: "REMOVE_ITEM", id });
        onItemRemove && onItemRemove(id);
    };

    const emptyCart = () => {
        dispatch({ type: "EMPTY_CART" });
        onEmptyCart && onEmptyCart();
    };

    const getItem = (id) => state.items.find((i) => i.id === id);

    const inCart = (id) => state.items.some((i) => i.id === id);

    const clearCartMetadata = () => {
        dispatch({ type: "CLEAR_CART_META" });
    };

    const setCartMetadata = (metadata) => {
        if (!metadata) return;
        dispatch({ type: "SET_CART_META", payload: metadata });
    };

    const updateCartMetadata = (metadata) => {
        if (!metadata) return;
        dispatch({ type: "UPDATE_CART_META", payload: metadata });
    };

    return (
        <CartContext.Provider
            value={{
                ...state,
                getItem,
                inCart,
                setItems,
                addItem,
                updateItem,
                updateItemQuantity,
                removeItem,
                emptyCart,
                clearCartMetadata,
                setCartMetadata,
                updateCartMetadata,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Helper functions
function createCartIdentifier(len = 12) {
    return [...Array(len)]
        .map(() => (~~(Math.random() * 36)).toString(36))
        .join("");
}

function reducer(state, action) {
    switch (action.type) {
        case "SET_ITEMS":
            return generateCartState(state, action.payload);
        case "ADD_ITEM":
            const items = [...state.items, action.payload];
            return generateCartState(state, items);
        case "UPDATE_ITEM":
            const updatedItems = state.items.map((item) =>
                item.id !== action.id ? item : { ...item, ...action.payload }
            );
            return generateCartState(state, updatedItems);
        case "REMOVE_ITEM":
            const filteredItems = state.items.filter((i) => i.id !== action.id);
            return generateCartState(state, filteredItems);
        case "EMPTY_CART":
            return initialState;
        case "CLEAR_CART_META":
            return { ...state, metadata: {} };
        case "SET_CART_META":
            return { ...state, metadata: { ...action.payload } };
        case "UPDATE_CART_META":
            return { ...state, metadata: { ...state.metadata, ...action.payload } };
        default:
            throw new Error("No action specified");
    }
}

function generateCartState(state = initialState, items) {
    const totalUniqueItems = calculateUniqueItems(items);
    const isEmpty = totalUniqueItems === 0;

    return {
        ...initialState,
        ...state,
        items: calculateItemTotals(items),
        totalItems: calculateTotalItems(items),
        totalUniqueItems,
        cartTotal: calculateTotal(items),
        isEmpty,
    };
}

function calculateItemTotals(items) {
    return items.map((item) => ({
        ...item,
        itemTotal: item.price * item.quantity,
    }));
}

function calculateTotal(items) {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
}

function calculateTotalItems(items) {
    return items.reduce((sum, item) => sum + item.quantity, 0);
}

function calculateUniqueItems(items) {
    return items.length;
}

export const useCustomCart = () => {
    const context = React.useContext(CartContext);
    if (!context) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
};
