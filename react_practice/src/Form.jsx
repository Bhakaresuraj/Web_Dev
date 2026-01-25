export default function Form() {
    return (<form action="" onSubmit={handler}>
        <input type="text" placeholder="Enter your name" />
        <button >Submit</button>
    </form>)
}

function handler(event) {
    console.log(event.target);
    event.preventDefault();
    console.log("Form submitted .");
}