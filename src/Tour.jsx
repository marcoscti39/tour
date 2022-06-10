import React, {useState} from 'react'

import './Tour.css'
function Tour({dataTour, removeTour}) {
    const [showtext, setshowtext] = useState(false)

    return (
        <>
            {dataTour.map(tour =>{
                const {id, image, name, price, info} = tour;
                return (
                    <article key={id} className="tour">
                        <img className="tour-photo" src={image}/> 
                        <div className="price-name-wrapper">
                            <h2 className="tour-name">
                                {name}
                            </h2>
                            <span className="tour-price">
                                {price}
                            </span>
                        </div>
                        <p className="tour-description">
                            {showtext ? info: `${info.substring(0,200)}...`}
                            <button onClick={() => setshowtext(!showtext)}
                            className="show-text">{showtext ? 'Show Less': 'Show More'}</button>
                        </p> 
                        <button onClick={() => removeTour(id)} className="tour-feedback-btn"> not interested </button>
                    </article>
                )

            })}
        </>
    )
}

export default Tour
