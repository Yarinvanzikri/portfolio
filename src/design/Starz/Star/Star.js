import React, {useEffect, useState} from 'react';
import './Star.scss'

function Star({size, duration, name}) {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(()=>{
        function positioning(){
            let randomHeight = Math.floor(Math.random()*99);
            let randomWidth = Math.floor(Math.random()*99);
            setHeight(randomHeight);
            setWidth(randomWidth);
            return console.log('Stars are Born');
        }
        return positioning()
    },[])

    return (
        <div className="Star">
            <div className="star"
                 style={
                     {
                         top: `${height}%`,
                         left: `${width}%` ,
                         width: `${size}px`,
                         height: `${size}px` ,
                         boxShadow: `0px 0px ${size}px ${size}px  rgba(255, 255, 255, 0.2)`,
                         animationName: `${name}`,
                         animationDuration: `${duration}ms`
                     }
                 }
            > </div>
        </div>
    );
}

export default Star;