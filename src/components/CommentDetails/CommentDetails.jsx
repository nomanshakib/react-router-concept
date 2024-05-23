import { useLoaderData, useNavigate } from "react-router-dom";


const CommentDetails = () => {
  const comment = useLoaderData();
  const { id, name, email, body } = comment;
  const navigate = useNavigate();
  
  const goBackHandle = () => {
    navigate(-1);
    }
    return (
      <div>
        <p>Comment Details :</p>
        <h1>id of Comment : {id}</h1>
        <h2>Name : {name}</h2>
        <p>Email : {email}</p>
        <p>Body : {body}</p>
        <button onClick={goBackHandle} className="mt-3 border-2 rounded-md p-1 border-cyan-500">Go Back to Previous Page</button>
      </div>
    );
};

export default CommentDetails;