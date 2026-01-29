interface CategoryProps{
    params: Promise<{
        categories:string[],

    }>,
    searchParams:Promise<{
        socialmedia:string[]
    }>

}

export default async function Category(props:CategoryProps){
    const { categories } = await props.params;
    return (
        <h1>categoria: {categories}</h1>
    )
}