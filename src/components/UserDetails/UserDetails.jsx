import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    const { phone, company, address } = user;
    
    const goBackHandle = () => {
        navigate(-1);
    }
    return (
      <div>
        <h1 className="underline">User Details : </h1>
        <p>Phone : {phone}</p>
        <h3>Company : {company.name}</h3>
        <p>
          <h2 className="underline">Address :</h2>
          <ul>Street : {address.street}</ul>
          <ul>City : {address.city}</ul>
          <ul>Zip Code : {address.zipcode}</ul>
        </p>
        <button onClick={goBackHandle} className="mt-3 border-2 rounded-md p-1 border-cyan-500">Go Back to Previous Page</button>
      </div>
    );
};

export default UserDetails;