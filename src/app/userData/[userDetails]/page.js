import getData from "../../../../services/getData";

export default async function Page({ params }) {
  let data = await getData();
  let users = data.users;

  // params.userDetails comes from the route e.g. /users/1
  let id = params.userDetails;

  // Find the matching user
  let user = users.find((item) => item.id == id);

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <h1 className="text-xl font-semibold text-red-500">User not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md w-full rounded-lg bg-white shadow-md p-6">
        <h1 key={user.id} className="text-2xl font-bold text-gray-800 mb-4"><h1>{`${user.firstName}'s Details`}</h1></h1>
        <p className="text-lg font-medium text-gray-700">
          Name: <span className="font-normal">{user.firstName} {user.lastName}</span>
        </p>
        <p className="text-lg font-medium text-gray-700">
          Email: <span className="font-normal">{user.email}</span>
        </p>
        <p className="text-lg font-medium text-gray-700">
          Age: <span className="font-normal">{user.age} years</span>
        </p>
      </div>
    </div>
  );
}

export async function generateStaticParams (){
    let data = await getData();
    let users = data.users;
   return users.map((user) => ({
    userDetails: user.id.toString(),
  }));
}