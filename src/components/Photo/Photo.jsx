

const Photo = ({ photo }) => {
    const { id, title, url, thumbnailUrl } = photo;
    return (
        <div className="border-2 border-cyan-500 rounded-md border-dashed p-3 m-4 flex flex-col">
            <h2>Id of Photos : </h2>
            <h2>ID : {id}</h2>
            <h3>Title : {title}</h3>
            <div className="flex gap-2 mt-2">
                <img className="w-48" src={url} alt="" /><br />
                <img className="w-48" src={thumbnailUrl} alt="" />
            </div>
        </div>
    );
};

export default Photo;