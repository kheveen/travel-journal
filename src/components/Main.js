import React from "react"
import pin from "../images/pin.png"


export default function Main(props) {
    return (
        <div>
            <div className="main">
                <div className="spot-img-box">
                    <img src={props.spot.imageUrl} alt="#" className="spot--img"/>
                </div>
                
                <div className="spot-details">
                    <img src={pin} alt="pin-logo" className="pin-logo"/>
                    <span className="spot-name">{props.spot.title}</span>
                    <a href={props.spot.googleMapsUrl} target="_blank" rel="noreferrer"><span>View on Google Maps</span></a>
                    <h2>{props.spot.location}</h2>
                    <p className="travel-date">{props.spot.startDate} - {props.spot.endDate}</p>
                    <p className="description">{props.spot.description}</p>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}