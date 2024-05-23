import { Link } from "react-router-dom";


const User = ({ user }) => {
    const { id, name, username, email, website } = user;
    return (
        <div className="border-2 border-cyan-500 rounded-md border-dashed p-3 m-4 flex flex-col">
            <h2>User ID : {id}</h2>
            <h3>Name : {name}</h3>
            <h3>user Name : {username}</h3>
            <h3>Email : {email}</h3>
            <h3>Web Site : {website}</h3>
            <Link className="border-2 rounded-md p-1 border-cyan-500" to={`/user/${id}`}>Details</Link>
        </div>
    );
};

export default User;