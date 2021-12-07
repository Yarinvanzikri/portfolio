import React, {useEffect, useState} from 'react';
import './Starz.scss'

function Starz(props) {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(()=>{
        function positioning(){
            let randomHeight = Math.floor(Math.random()*101);
            let randomWidth = Math.floor(Math.random()*101);
            setHeight(randomHeight);
            setWidth(randomWidth);
            return console.log("width: ",width," height: ", height);
        }
        return positioning()
    },[])

    return (
        <div className="Starz">
            <div className="star aura" style={{top: `${height}px`, left: `${width}px`}}> </div>

        </div>
    );
}

export default Starz;