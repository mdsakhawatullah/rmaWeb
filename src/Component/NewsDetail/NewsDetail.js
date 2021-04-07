import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const NewsDetail = (props) => {
    const {name,flag,region} = props.newses;
    return (
        <>
      <div className="card mb-3 ml-8" style={{maxWidth:'540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img className="img-fluid" src={flag} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">More Details</small></p>
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default NewsDetail;