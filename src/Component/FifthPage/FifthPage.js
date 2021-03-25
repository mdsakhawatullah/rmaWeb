import React from 'react';
import '../Style/Style.css';
import Latest_news_bg1 from '../Images/Latest_news_bg1.png';
import Latest_news_bg2 from '../Images/Latest_news_bg2.png';
import Latest_news_bg3 from '../Images/Latest_news_bg3.png';
const FifthPage = () => {
    return (
        <>
        <div className="fifth_page">
        <div className="fix container">
            <div className="row">
                <div className="col-md-3 left_content">
                    <h5 className="get_update">Get Updated</h5>
                    <h1 className="latest_news">LATEST
                        NEWS&#10078;</h1>
                </div>
                <div className="col-md-3 middle_pics">

                    <div className="ach_new">
                        <img src={Latest_news_bg1} className="img-fluid middle_pictures p1 mb-5" alt=""/>
                    </div>

                    <div className="ach_new">
                        <img src={Latest_news_bg2} className="img-fluid middle_pictures p2 mb-5" alt=""/>
                    </div>

                    <div className="ach_new">
                        <img src={Latest_news_bg3} className="img-fluid middle_pictures p3 mb-5" alt=""/>
                    </div>

                </div>
                <div className="col-md-5 right_lekha">
                    <div className="rigth_lekha_margin mb-4">
                        <p className="achie">ACHIEVEMENT/NEWS</p>
                        <p className="arduino1">Arduino Day Celebrated at CUET</p>
                        <p className="arduino">Arduino Day is a worldwide birthday celebration of Arduino. It’s a 24
                            hour-long event –
                            organized directly by the community, or by the Arduino founders – that brings people
                            together …
                        </p>
                    </div>
                    <div className="rigth_lekha_margin mb-4">
                        <p className="achie">ARTICLE / PROGRAMMING / SCIENCE / UNCATEGORIZED</p>
                        <p className="arduino">আর্ট,প্রোগ্রামিং আর আরো কিছু</p>
                        <p className="arduino">প্রোগ্রমার মানেই কি রসকসহীন কয়েকটা আতেল পাবলিক হবে?আর কোড লিখা শুরু তো করলাম
                            ,কাল
                            স্ক্রিনে ২
                            টা কথা আসল “Hello World” এরপর হাবিজাবি আরো কিছু অঙ্ক কষলাম।আর একটু ভুল করলেই …</p>
                    </div>
                    <div className="rigth_lekha_margin mb-4">
                        <p className="achie">IMAGE PROCESSING</p>
                        <p className="arduino1">Image Processing এর হাতেখড়ি</p>
                        <p className="arduino">Image Processing এর হাতেখড়ি আজ আমরা আলোচনা করব image processing নিয়ে। আমরা আজ
                            কিছু basic
                            topic নিয়ে আলোচনা করব। চলুন শুরু করা যাক। আমরা সবাই আশাকরি কমবেশি image processing বা …
                        </p>
                    </div>
                    <div>
                        <p className="achie">NEWS</p>
                        <p className="arduino1">Annual General Meeting 2016</p>
                        <p className="arduino">The Annual General Meeting of Robo Mechatronics Association Bangladesh was
                            held on 11th
                            December, 2016 at West Gallery, CUET. Honorable Vice Chancellor of the University, Prof.
                            Dr.
                            Mohammad Rafiqul Alam …</p>
                    </div>
                </div>
            </div>
            <div className="row button_div">
                <button type="button" className="button_read_blog btn btn-primary m-auto">READ our BLOG</button>
            </div>
        </div>
    </div>




    <div style={{height:'50px'}}></div>
    </>
    );
};

export default FifthPage;