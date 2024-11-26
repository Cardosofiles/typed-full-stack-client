import { CreateUser } from "./CreateUser";
import { useGetUser } from "./http/generated/users/users";

export function App() {
  const { data: users } = useGetUser();

  return (
    <div className="bg-zinc-900 h-screen flex flex-col space-y-3 text-white p-5">
      {users?.data.map((user) => {
        return (
          <ul className="flex items-center gap-4" key={user.id}>
            <li>{user.id}</li>
            <li>{user.name}</li>
          </ul>
        );
      })}

      <CreateUser />
    </div>
  );
}
