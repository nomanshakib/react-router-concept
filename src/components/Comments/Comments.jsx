import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";


const Comments = () => {
    const comments = useLoaderData();
    return (
        <div>
            <h2 className="text-2xl">Comments : {comments.length}</h2>
            <div className="grid grid-cols-3 gap-3">
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;