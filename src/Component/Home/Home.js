import React, { useEffect, useState } from 'react';
import '../Style/Style.css';
import '../Style/ResponsiveTab.css';
import '../Style/ResponsiveSemiTab.css';
import '../Style/ResponsiveNotebook.css';
import '../Style/ResponsiveMobileSm.css';
import '../Style/ResponsiveMobile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                <Header />
            }
            {
                <SecondPage />
            }
            {
                <ThirdPage />
            }
            {
                <FourthPage />
            }
            {
                <FifthPage />
            }
            {
                <SixthPage />
            }
            {
                <LastPage />
            }




        </>

    );
};

export default Home;
