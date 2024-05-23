import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ThreeDots } from "react-loader-spinner";


const Home = () => {
    const navigation = useNavigation();
    return (
        <div className="text-center">
            <Header></Header>
            {
                navigation.state === 'loading' ? <p className="flex flex-col items-center">Loading...
                    <ThreeDots
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                /></p> : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;