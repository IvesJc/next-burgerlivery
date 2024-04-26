export default async function Beverages () {

    const response = await fetch(`${process.env.API_URL}/beverages`)

    return <h1>Beverages</h1>
}