import React from "react"
import "./rep.css";
import Rep from "../../assets/svg/rep.png";



class Main extends React.Component {
render() {
    return (
        <div>
            <div><Rep/></div>
            <p>Repository list is empty</p>
        </div>
    );
}
}

export default Main;