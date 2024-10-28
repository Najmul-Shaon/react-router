import { Link } from "react-router-dom";

const User = ({ user }) => {
  console.log(user);
  const { id, name, phone } = user;
  console.log(name, phone);
  return (
    <div>
      <h3>Name {name}</h3>
      <Link to={`/user/${id}`}>Details</Link>
    </div>
  );
};

export default User;
