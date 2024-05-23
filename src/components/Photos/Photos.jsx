import { useLoaderData } from "react-router-dom";
import Photo from "../Photo/Photo";


const Photos = () => {
    const photos = useLoaderData();
    return (
        <div>
            <h2>Photos : {photos.length} </h2>
            <div className="grid grid-cols-3 gap-3">
                {
                    photos.map(photo => <Photo key={photo.id} photo={photo}></Photo>)
                }
            </div>
        </div>
    );
};

export default Photos;