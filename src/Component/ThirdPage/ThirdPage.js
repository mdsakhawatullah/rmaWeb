import React, { useEffect, useState } from 'react';
import '../Style/Style.css';
import '../Style/ResponsiveTab.css';
import '../Style/ResponsiveSemiTab.css';
import '../Style/ResponsiveNotebook.css';
import '../Style/ResponsiveMobileSm.css';
import '../Style/ResponsiveMobile.css';
import thirdPageData from '../Data/Data.json'

const ThirdPage = () => {
   
    return (
        <>
<div className="third_page" id="third_page_connector">
  <div className="fix container">
            <div>
                <h2 className="wwa text-center">WHO WE ARE</h2>

                <h3 className="aboutus text-center">ABOUT US</h3>
                <div className="we_are_para">
                    <p className="we_are">We are a group of visionaries, united by dreams… dreams of being the revolution
                        that
                        would change the world…. dreams that would one day transform this tiny little country of ours
                        into
                        one that will be the forefront of cutting edge technology and research… dreams that would one
                        day
                        become powerful enough to emerge from our minds and become a part of reality…</p>

                    <p className="we_are">We have successfully built a number of projects those are most notable and
                        arranged
                        some science talk, Robotic Show.</p>

                    <p className="we_are">If you think that you too have the flame burning inside you, please feel free to
                        join
                        with us. For those of you who feel like they can contribute to articles and stuff, please feel
                        free
                        to Contact us. All that said and done… its time to get to the real stuff.</p>

                    <p className="we_are">LETS GET INVENTING!!!</p>
                </div>
            </div>
        </div>
    </div>
</>
    );
};

export default ThirdPage;