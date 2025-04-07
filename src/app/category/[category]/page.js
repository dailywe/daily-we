export default async function Page({ params }) {
    const { category } = await params
    
    return <div>Category: {category}</div>
}