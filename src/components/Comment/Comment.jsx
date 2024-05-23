import { useNavigate } from "react-router-dom";


const Comment = ({ comment }) => {
  const { id, name, email, } = comment;
  const navigate = useNavigate();
    
  
  const handleCommentDetails = () => {
      navigate(`/comment/${id}`)
    }
    return (
      <div className="border-2 border-cyan-500 rounded-md border-dashed p-3 m-4 flex flex-col">
        <h1>id of Comment : {id}</h1>
        <h2>Name : {name}</h2>
        <p>Email : {email}</p>
        <button onClick={handleCommentDetails} className="border-2 rounded-md p-1 border-cyan-500">Details</button>
      </div>
    );
};

export default Comment;