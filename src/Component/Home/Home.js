import React, { useEffect, useState } from 'react';
import data from '../Data/Data.json';
import Navbar from '../Navbar/Header';
import '../Style/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from '../Navbar/Header';
import SecondPage from '../SecondPage/SecondPage';
import ThirdPage from '../ThirdPage/ThirdPage';
import FourthPage from '../FourthPage/FourthPage';
import FifthPage from '../FifthPage/FifthPage';
import SixthPage from '../SixthPage/SixthPage';
import LastPage from '../LastPage/LastPage';
const Home = () => {
    
    return (
        <>

            {
                <Header/>
            }
            {
            <SecondPage/>
        }
        {
            <ThirdPage/>
        }
        {
            <FourthPage/>
        }
        {
            <FifthPage/>
        }
        {
            <SixthPage/>
        }
        {
            <LastPage/>
        }




        </>

    );
};

export default Home;
