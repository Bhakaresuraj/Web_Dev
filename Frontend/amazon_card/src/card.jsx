
import "./card.css"
import Price from "./Price.jsx"
function Card({ idx }) {
    let oldprice = ["12,999", "16,786", "89,930", "90,768"];
    let nprice = ["10,999", "13,987", "70,000", "85,000"];
    let Description1 = {
        0: "first object first Description",
        1: "second object first Description",
        2: "thirdobject first Description",
        3: "fourth object first Description",

    }
    let Description2 = {
        0: "first object second Description",
        1: "second object second Description",
        2: "thirdobject second Description",
        3: "fourth object second Description",

    }
    // console.log(oldprice[idx]);
    // console.log(idx);
    return (
        <div className="Card">
            <h1>Heading</h1>
            <p>{Description1[idx]}</p>
            <p>{Description2[idx]}</p>
            <Price oldprice={oldprice[idx]} nprice={nprice[idx]} ></Price>
        </div >
    );
}


export default Card;