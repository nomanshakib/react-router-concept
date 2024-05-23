import { useNavigate } from "react-router-dom";


const User = ({ user }) => {
    const { id, name, username, email, website } = user;
    
    const navigate = useNavigate();

    const showUserDetails = () => {
        navigate(`/user/${id}`);
    }

    return (
        <div className="border-2 border-cyan-500 rounded-md border-dashed p-3 m-4 flex flex-col">
            <h2>User ID : {id}</h2>
            <h3>Name : {name}</h3>
            <h3>user Name : {username}</h3>
            <h3>Email : {email}</h3>
            <h3>Web Site : {website}</h3>
            <button onClick={showUserDetails} className="border-2 rounded-md p-1 border-cyan-500">Go To User Details</button>
        </div>
    );
};

export default User;