import React from 'react';
import Star from "./Star/Star";
import Meteor from "../Meteor/Meteor";

function Space() {
        function random(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function randomSize() {
                let starSize = random(0.5,1.5)
                // console.log('starSize: ', starSize);
                return starSize
        }
        function randomDuration() {
            let animationDuration = random(1500, 3000);
            // console.log('animationDuration: ',animationDuration)
            return animationDuration
        }

return (
        <div className="Space">
            <Meteor/>
            <Meteor/>
            <Star size={randomSize()+1} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+1} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+2} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+2} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+3} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+3} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+4} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+4} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+5} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+5} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+6} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+6} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+7} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+7} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+8} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+8} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+9} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+9} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+10} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()+15} duration={randomDuration()+10000} name={'glowBig'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>
            <Star size={randomSize()} duration={randomDuration()} name={'glow'}/>







        </div>
    );
}

export default Space;