import React from 'react'
import './directions.scss'
import LocationOnIcon from '@material-ui/icons/LocationOn';
export default function Directions() {
    return (
        <>
            <div className="directions-container">
                <h2>How to get there?</h2>
                <div className="locations">
                    <div className="church">  
                    <h4 className="location"><LocationOnIcon/>Pohkseh Prebyterian Church</h4>
                    <iframe title="church" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1391.38954954375!2d91.9098175546171!3d25.568137908690122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375079094cde53c3%3A0x4261109391c70e0e!2sPohkseh%20Prebyterian%20Church!5e0!3m2!1sen!2sin!4v1610548646235!5m2!1sen!2sin" width="320" height="320"  style={{border:0}}  aria-hidden="false" ></iframe>               
                    </div>
                    <div className="windermere">
                        <h4 className="location"><LocationOnIcon/>Windermere Resorts</h4>
                        <iframe title="windermere" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14395.10921359416!2d91.92667972751568!3d25.579074802744234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37507905bb07f951%3A0x1877bc59fda08cb1!2sWindermere%20Resort!5e0!3m2!1sen!2sin!4v1610549592368!5m2!1sen!2sin" width="320" height="320"  style={{border:0}}  aria-hidden="false" ></iframe>
                    </div>
                </div>
                </div>
        </>
    )
}
