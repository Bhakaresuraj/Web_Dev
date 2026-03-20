import "./App.css"
import Form from "./Form.jsx"

function clickEvent() {
  console.log("Button clicked");
}

function App() {
  return (<>
    <Form></Form>
  </>)
}
function hover(e) {
  let butt = document.querySelector(".second");
  console.log(e.target);
  butt.style.backgroundColor = "red";
}
function Nothover(e) {

  console.log(e.target);
  let butt = document.querySelector(".second");
  butt.style.backgroundColor = "white";
}

function para(e) {
  console.log(e.target);

  console.log("Paragraph is clicked");
}

export default App