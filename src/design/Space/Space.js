import React from 'react';
import Star from "./Star/Star";
import Meteor from "../Meteor/Meteor";

function Space() {
        function random(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function randomSize() {
                let starSize = random(0.5,1.5)
                return starSize
        }
        function randomDuration() {
            let animationDuration = random(1500, 3000);
            return animationDuration
        }
        function starLoop(quantety) {
            let starStorage = [];

            for(let i=0; i< quantety; i++){
                starStorage.push(<Star size={randomSize()} duration={randomDuration()} name={'glow'}/>)
            }
            return starStorage
        }

return (
        <div className="Space">
            <Meteor/>
            <Star size={randomSize()+1} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+1} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+1} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+2} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+2} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+2} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+3} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+3} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+3} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+4} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+4} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+4} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+5} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+5} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+5} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+6} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+6} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+6} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+10} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+15} duration={randomDuration()+10000} name={'glowBig'}/>
            {(window.innerWidth >= 600) ?
                starLoop(280).map((star)=> {
                return star
            })
                :
                starLoop(180).map((star)=> {
                    return star
            })
            }
        </div>
    );
}

export default Space;