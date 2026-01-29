interface CategoryProps{
    params:
        {
            category:string
        }
}

export default async function Category(props:CategoryProps){
const { category } = await props.params;
    return (
        <h1>categoria: {category}</h1>
    )
}