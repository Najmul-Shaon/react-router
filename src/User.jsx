import { Link, useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const navigate = useNavigate();

  console.log(user);
  const { id, name, phone } = user;
  console.log(name, phone);

  const handleShowDetail = () => {
    navigate(`/user/${id}`);
  };

  return (
    <div>
      <h3>Name {name}</h3>
      <Link to={`/user/${id}`}>Details</Link>
      <button onClick={handleShowDetail}> See Details</button>
    </div>
  );
};

export default User;
