import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {phone, company, address} = user;
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
      </div>
    );
};

export default UserDetails;