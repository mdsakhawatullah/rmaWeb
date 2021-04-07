import React from 'react';
import Latest_news_bg1 from '../Images/Latest_news_bg1.png';
import Latest_news_bg2 from '../Images/Latest_news_bg2.png';
import Latest_news_bg3 from '../Images/Latest_news_bg3.png';
import News from '../News/News';
import 'bootstrap/dist/css/bootstrap.min.css';
const FifthPage = () => {
    return (
        <>
        <div className="fifth_page">
        <h5 className="get_update">Get Updated</h5>
                <h1 className="latest_news">LATEST News
                </h1>
          <News/>
       
       </div>

       


   
    </>
    );
};

export default FifthPage;