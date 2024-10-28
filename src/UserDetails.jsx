import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const details = useLoaderData();
  const { name } = details;
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h3>Details</h3>
      <p>Name: {name}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default UserDetails;
