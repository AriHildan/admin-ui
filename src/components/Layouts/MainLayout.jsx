/* eslint-disable react/prop-types */
import Navbar from "../Fragments/Navbar";
import Header from "../Fragments/Header";
<<<<<<< HEAD
import { useContext } from "react";
=======
import { useContext} from "react";
>>>>>>> 32d77f7c823ec37ea4b7b234360e60b68bdccf83
import { ThemeContext } from "../../context/themeContext";

const MainLayout = (props) => {
    const { children } = props;
    const { theme } = useContext(ThemeContext);
<<<<<<< HEAD

    return (
      <div className={`flex bg-special-mainBg w-screen min-h-screen max-w-full ${theme.name}`}>
=======
return (
  <div className={`flex bg-special-mainBg w-screen min-h-screen max-w-full ${theme.name}`}>
>>>>>>> 32d77f7c823ec37ea4b7b234360e60b68bdccf83
        {/* navbar start*/}
        <Navbar/>
        {/* navbar end*/}
        <div className="w-screen">
        {/* header start*/} 
        <Header/>
        {/* header end*/}
        {/* content start*/}
        <main className="px-6 py-4">{ children }</main>
        {/* content end*/}
        </div>
      </div>
    );
  };
  
  export default MainLayout;