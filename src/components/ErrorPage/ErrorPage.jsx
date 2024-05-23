import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    
    return (
        <div className="text-center mt-32 text-4xl text-red-600">
            <h1 className="mb-4">-_-</h1>
            <h1>Oops! Sorry</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h2>Page Not found</h2>
                    <p className="mb-6">Go back Where you from</p>
                    <Link className="border-2 px-2 border-red-700 rounded-md" to="/">Home</Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;