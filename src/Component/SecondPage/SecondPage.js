import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Style.css';
import '../Style/ResponsiveTab.css';
import '../Style/ResponsiveSemiTab.css';
import '../Style/ResponsiveNotebook.css';
import '../Style/ResponsiveMobileSm.css';
import '../Style/ResponsiveMobile.css';
import secondPageData from '../Data/Data.json'

const SecondPage = () => {
    const[image,setimage] = useState([]);
   useEffect( () => {
        setimage(secondPageData)
    },[])
    return (
<>
        <div className="second img-fluid">
        <div className="second_page fix container">
            <div className="row">
                <div className="col-md-7 col-sm-12" id="parent">
                    <img src="https://i.imgur.com/m5cRCaE.png" className="first_pic img-fluid" alt=""/>
                   <img src="https://i.imgur.com/cpcWcct.png" className="second_pic img-fluid" alt=""/>
                    <img src="https://i.imgur.com/6l229dF.png" className="third_pic img-fluid" alt=""/>
                </div>
                <div className="col-md-5 col-sm-12 parent">
                    <article>
                        <p className="what_we">
                            WHAT WE DO
                        </p>
                        <p className="best_place">
                            Best place to show One’s Creativity
                        </p>
                        <p className="the_value">
                            The value of an idea lies in the using of it. Ideas are worthless until we take them out
                            of our head and see what they can do. Sp we help anyone to bring out their idea out of
                            their head and make them to realize the power of their own ideas.
                        </p>
                    </article>
                </div>
            </div>
        </div>
    </div>


    <hr/>


    <div style={{height:'100px'}}></div>











   {/* second page second  part */ }


    <div className="second_second">
        <div className="fix container second_second_part">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div>
                        <img src="https://i.imgur.com/EYJ3KET.png" className="icon1" alt=""/>
                        <h2 className=" icon1_h">RoboRace</h2>
                        <p className="icon1_p">We Present the biggest Robotic Competetion ‘RMA Roborace’ in Bangladesh. </p>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/QhRH8bZ.png" className="icon1 mt-5" alt=""/>
                        <h2 className="icon1_h">Training Programs</h2>
                        <p className="icon1_p">We give both basic and advanced training program to freshers.</p>
                    </div>
                </div>
                <div className="col-md-1 col-sm-12">
                    <img src="https://i.imgur.com/VTyFg5W.png" className="btn__icon img-fluid" alt=""/> <br/>
                    <img src="https://i.imgur.com/6wbcBii.png" className="btn__icon2 img-fluid ml-1" alt=""/>
                </div>
                <div className="col-md-5 col-sm-12">
                    <div>
                        <img src="https://i.imgur.com/ZJPox5a.png"  className="icon3" alt=""/>
                        <h2 className=" icon1_h">Success</h2>
                        <p className="icon1_p">We have plenty of success on renowned competetions and project shows both in
                            national and
                            international platform.</p>
                    </div>
                    <div>
                        <img src= "https://i.imgur.com/SkGf0wS.png" className="icon3 mt-4" alt=""/>
                        <h2 className="icon1_h">Project Show</h2>
                        <p className="icon1_p">We Present Out Projects in various renowned Competetions, Universities,
                            Government
                            Programs, Digital Fair,etc.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div style={{height:'100px'}}></div>








    {/* Second Page Footer */}

    <div className="second_footer">
        <div className="fix container">
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <div className="fi-rst">
                        <h2 className="eleven float-left">11</h2>
                        <p className="competition comp_one float-left">Competitions <br/>
                            Arranged</p>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <div className="se-cond">
                        <h2 className="eleven one float-left">200+</h2>
                        <p className="competition comp_two float-left">Regular <br/>
                            Members</p>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <div className="th-ird">
                        <h2 className="eleven float-left">30+</h2>
                        <p className="competition comp_three float-left">Prizes <br/> Achieved</p>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <div className="fou-rth">
                        <h2 className="eleven float-left">55+</h2>
                        <p className="competition comp_four float-left">Completed <br/> Projects</p>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
 
    );
};

export default SecondPage;