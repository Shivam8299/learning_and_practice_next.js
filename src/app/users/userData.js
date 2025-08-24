export default async function allUsers() {
  let res = await fetch("https://dummyjson.com/users");
  let data = await res.json();
  return data.users;
}
