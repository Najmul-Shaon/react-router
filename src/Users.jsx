import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h3>Users {users.length}</h3>
      <div>
        {users.map((user, i) => (
          <User user={user} key={i}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
