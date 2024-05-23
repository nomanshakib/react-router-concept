import { useLoaderData, useNavigate } from "react-router-dom";


const PhotoDetails = () => {
    const photo = useLoaderData();
    const navigate = useNavigate();
    const { id, title, url, thumbnailUrl } = photo;

    const goBackHandle = () => {
      navigate(-1);
    };
    return (
        <div className="border-2 p-2 flex flex-col items-center">
            <h2>Id of Photos : </h2>
            <h2>ID : {id}</h2>
            <h3>Title : {title}</h3>
            <div className="flex gap-2 mt-2">
                <img className="w-48" src={url} alt="" /><br />
                <img className="w-48" src={thumbnailUrl} alt="" />
            </div>
            <button onClick={goBackHandle} className="mt-3 border-2 rounded-md p-1 border-cyan-500">Go Back to Previous Page</button>
        </div>
    );
};

export default PhotoDetails;