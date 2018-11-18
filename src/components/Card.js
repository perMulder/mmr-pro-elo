import React from 'react'

const Card = ({link, alt}) =>
    <div className="Card">
        <img src={link} alt={alt}/>
    </div>

export default Card