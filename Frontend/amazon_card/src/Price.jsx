
import "./Price.css"
export default function Price({oldprice, nprice}) {
    let styles = {
        textDecorationLine: "line-through"
    }
    let newstyles = {
        fontWeight: "bold"
    }
    console.log(oldprice);
    console.log(nprice) ;
    return <div className="Price">
        <span style={styles}>{oldprice}</span>
        <span style={newstyles}>{nprice}</span>
    </div>
}