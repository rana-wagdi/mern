import React from "react";
import cardData from "./cardData";
import '../styles/card.css';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import data from "./data";

import {
    IconLookup,
    IconDefinition,
    findIconDefinition
} from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
function Card() {
    // const coffeeLookup = { prefix: 'fas', iconName: 'coffee' }
    // const coffeeIconDefinition = findIconDefinition(coffeeLookup)
    return (
        <>
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        <FontAwesomeIcon icon="fa-brands fa-react" />
        <FontAwesomeIcon icon={["far", "coffee"]} />
        <FontAwesomeIcon icon={["fas", "coffee"]} />
        <FontAwesomeIcon icon="fa-brands fa-twitter" />
         {/* <h1> <FontAwesomeIcon icon={coffeeIconDefinition} /></h1> */}
            <div className="card__items">
                {/* <FontAwesomeIcon icon="coffee" size="lg" /> */}
               
        
                {
                    cardData.map((user) => (
                        <div key={user.id} className="card__item">
                            <p>{user.title}</p>
                            <hr />
                            <FontAwesomeIcon icon="fa-brands fa-twitter" />
                        </div>

                    ))
                }
            </div>
            <div className="card__itemms">
                {
                    data.map((user) => (
                        <div key={user.id} className="card__itemm">
                            <p>{user.title}</p>
                            <span>DEVELOMENT</span>

                        </div>

                    ))
                }
            </div>


        </>
    )

}
export default Card