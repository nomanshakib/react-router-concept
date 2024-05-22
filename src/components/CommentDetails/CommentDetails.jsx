import { useLoaderData } from "react-router-dom";


const CommentDetails = () => {
    const comment = useLoaderData();
    const { id, name, email, body } = comment;
    return (
      <div>
        <p>Comment Details :</p>
        <h1>id of Comment : {id}</h1>
        <h2>Name : {name}</h2>
        <p>Email : {email}</p>
        <p>Body : {body}</p>
      </div>
    );
};

export default CommentDetails;