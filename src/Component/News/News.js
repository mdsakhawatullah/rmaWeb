import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import NewsDetail from '../NewsDetail/NewsDetail';
import { data } from 'jquery';
const News = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setNews(data.slice(0,3)))
        console.log(news)
    }, []
    )


    return (
        <>
        
            {
                news.map(newses => <NewsDetail newses={newses} />)
            }     
               
           
        </>
    );
};

export default News;