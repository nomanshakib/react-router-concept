import { Link } from "react-router-dom";


const Comment = ({ comment }) => {
    const { id, name, email,} = comment;
    return (
      <div className="border-2 border-cyan-500 rounded-md border-dashed p-3 m-4 flex flex-col">
        <h1>id of Comment : {id}</h1>
        <h2>Name : {name}</h2>
        <p>Email : {email}</p>
        <Link className="border-2 rounded-md p-1 border-cyan-500" to={`/comment/${id}`}>Details</Link>
      </div>
    );
};

export default Comment;