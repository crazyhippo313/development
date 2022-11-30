import React, {useState} from 'react';
import './box.css';
function Box(props) {
    //sneaker
    //fav
    //setFav
    //totPrice
    //setTotPrice

    function addFav() {
        props.sneaker.selected = true;
        props.setTotPrice(props.totPrice + props.sneaker.price);
        props.setFav(props.fav + 1);
    }

    function removeFav() {
        props.sneaker.selected = false;
        props.setTotPrice(props.totPrice - props.sneaker.price);
        props.setFav(props.fav - 1);
    }

    const showButton = () => {
        if (props.sneaker.selected) {
            return <button onClick={_ => removeFav()}>Liked</button>
        } else {
            return <button onClick={_ => addFav()}>Like This</button>
        }
    }


    return <div className={"box"}>


        <div className={"center"}>
            <img className={"box-img"} src={require("./../data/img"+ props.sneaker.id + ".jpg")}/>
        </div>

        <header className={"box-header"}>{props.sneaker.name}</header>
        <p> price: {props.sneaker.price}$ </p>
        <p> color: {props.sneaker.color}</p>

        {showButton()}
    </div>
}

export default Box;