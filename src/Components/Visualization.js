import React, {useState} from 'react';
import Header from "./Header";
import Box from "./Box";

function Visualization() {
    const allSneakers = [
        {id:0, name: "Adidas Yeezy", brand: "Adidas", color: "Grey", price: 200, selected: false},
        {id:1, name: "Nike Dunk Low", brand: "Nike", color: "Black", price: 150, selected: false},
        {id:2, name: "Nike Air Max 90", brand: "Nike", color: "White", price: 150, selected: false},
        {id:3, name: "Nike Air Max 90", brand: "Nike", color: "Black", price: 150, selected: false},
        {id:4, name: "Nike Air Force 1", brand: "Nike", color: "White", price: 120, selected: false},
        {id:5, name: "Vans Old Skool", brand: "Vans", color: "White", price: 70, selected: false},
        {id:6, name: "Adidas Superstar", brand: "Adidas", color: "White", price: 95, selected: false},
        {id:7, name: "Nike Jordan Chicago", brand: "Nike", color: "Red", price: 200, selected: false},
        {id:8, name: "Nike Jordan Dior", brand: "Nike", color: "White", price: 5000, selected: false},
        {id:9, name: "Nike Jordan Teal", brand: "Nike", color: "Teal", price: 150, selected: false},
        {id:10, name: "New Balance 550", brand: "New Balance", color: "White", price: 150, selected: false},
        {id:11, name: "Vans Old Skool", brand: "Vans", color: "Black", price: 95, selected: false}
    ]
    const [brand, setBrand] = useState([true, true, true])
    const [color, setColor] = useState([true, true, true])
    const [sort, setSort] = useState([false])
    const [sneakers, setSneakers] = useState(allSneakers)
    const [fav, setFav] = useState(0)
    const [totPrice, setTotPrice] = useState(0)


    function changeColor(r) {
        let out = color
        out[r] = !color[r]
        setColor(out)
        filterAll()
        console.log(color)
    }

    function changeBrand(r) {
        let out = brand
        out[r] = !brand[r]
        setBrand(out)
        filterAll()
    }
    function changeSort() {
        let out = sort
        out[0] = !sort[0]
        setSort(out)
        filterAll()
        // filterAll()
    }


    function filterAll() {
        let out = allSneakers
        if (!color[0]) {
            out = out.filter((item) => item.color !== "White");
        }
        if (!color[1]) {
            out = out.filter((item) => item.color !== "Black");
        }
        if (!color[2]) {
            out = out.filter((item) => item.color === "White" || item.color === "Black");
        }

        if (!brand[0]) {
            out = out.filter((item) => item.brand !== "Nike");
        }
        if (!brand[1]) {
            out = out.filter((item) => item.brand !== "Adidas");
        }
        if (!brand[2]) {
            out = out.filter((item) => item.brand === "Nike" || item.brand === "Adidas");
        }

        if (sort[0]) {
            out = out.sort((a, b) => a.price - b.price);
        } else {
            out = out.sort((a, b) => a.id - b.id);
        }

        console.log(sort);
        console.log(out);
        setSneakers(out);
    }


  return (<div>
          <Header brand={brand} color={color} sort={sort} changeColor={changeColor} changeBrand={changeBrand} changeSort={changeSort} filterAll={filterAll} fav={fav} totPrice={totPrice}/>
          {/*<div id={"body"}>*/}

          <div id="body-wrap">
              <article>
                  {sneakers.map((item) => <Box sneaker={item} fav={fav} setFav={setFav} totPrice={totPrice} setTotPrice={setTotPrice}/>)}
              </article>
          </div>
          {/*</div>*/}

  </div>
  )
}

export default Visualization;