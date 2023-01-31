import React from "react";
import PropTypes from 'prop-types'
import Button from "./Button";
const Card=(props)=>{
    return(
        <>
        <div className="col">
        <div className="card shadow-sm">
          <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
          <div className="card-body">
            <p className="card-text">{props.name}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                  <Button name={'View'} color={'#e7bde9'}/>
                  <Button name={'Delete'} color={'#e97bc3'}/>
                  <Button name={'Edit'} color={'#c97fc3'}/>
              </div>
              <small className="text-muted">{props.id}</small>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}
Card.defaultProps={
    name:"Name",
    id:"ID"
}

Card.propTypes={
    name:PropTypes.string,
    id:PropTypes.number
}

export default Card;