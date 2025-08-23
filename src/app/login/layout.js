import Link from "next/link"

function layout({children}) {
  return (
    <div className=" h-screen mt-0 bg-gradient-to-l from-teal-100 to-emerald-100">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-amber-300 pt-5">Login for teacher or student </h1>
        <ul className="flex gap-8 justify-center my-5 text-xl text-gray-600">
            <li>
                <Link className="text-base font-serif hover:text-blue-400" href="/login/teacher">Login Teacher</Link>
            </li>
            <li>
                <Link className="text-base font-serif hover:text-blue-400"  href='/login/student' >Login Student</Link>
            </li>
            <li>
                <Link className="text-base font-serif hover:text-blue-400"  href='/' >Back To Home Page</Link>
            </li>
        </ul>
        {children}
    </div>
  )
}

export default layout