import { useNavigate } from "react-router-dom";


const Photo = ({ photo }) => {
    const { id, title, url, thumbnailUrl } = photo;
    const navigate = useNavigate();

    const handlePhotoDetails = () => {
        navigate(`/photo/${id}`)
    }
    return (
        <div className="border-2 border-cyan-500 rounded-md border-dashed p-3 m-4 flex flex-col">
            <h2>Id of Photos : </h2>
            <h2>ID : {id}</h2>
            <h3>Title : {title}</h3>
            <div className="flex gap-2 mt-2">
                <img className="w-48" src={url} alt="" /><br />
                <img className="w-48" src={thumbnailUrl} alt="" />
            </div>
            <button onClick={handlePhotoDetails} className="border-2 rounded-md p-1 border-cyan-500">Details</button>
        </div>
    );
};

export default Photo;