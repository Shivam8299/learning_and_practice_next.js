import Link from "next/link"
import getData from "../../../services/getData"
async function page() {
    let allUsers = await getData()
    let users = allUsers.users
    // console.log(users.users)
  return (
    <div>
        <h1 className="text-center text-3xl text-green-600">All Users Data</h1>
        {users.map(user =>(
            <h2 key={user.id}>Name: <Link  href={`/userData/${user.id}`}>{user.firstName}</Link></h2>
        )) }
    </div>
  )
}

export default page