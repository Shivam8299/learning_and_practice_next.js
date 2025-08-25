export default async function getData () {
    const data  = await fetch("https://dummyjson.com/users");
    let users = await data.json()
    return users
}