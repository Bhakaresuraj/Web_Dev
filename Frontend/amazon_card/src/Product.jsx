import Card from "./card.jsx"
import "./Product.css"
export default function Product() {

    return (
        <div className="Product">
            <Card idx={0}></Card>
            <Card idx={1}></Card>
            <Card idx={2}></Card>
            <Card idx={3}></Card>
            
        </div>);
}