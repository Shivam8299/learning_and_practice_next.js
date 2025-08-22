import Link from "next/link"

function layout({children}) {
  return (
    <div className="">
        <ul className="flex gap-8 justify-center my-5 text-xl text-gray-600">
            <li>
                <Link href="/login/teacher">Login Teacher</Link>
            </li>
            <li>
                <Link href='/login/student' >Login Student</Link>
            </li>
        </ul>
        {children}
    </div>
  )
}

export default layout