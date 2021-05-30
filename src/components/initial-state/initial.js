import React from "react"
import "./inicial.css";
import Inicial from "../../assets/svg/inicial.png";



class Main extends React.Component {
render() {
    return (
        <div>
            <div><Inicial/></div>
            <p>Start with searching a GitHub user </p>
        </div>
    );
}
}

export default Main;