import React from "react"
import "./user.css";
import User from "../../assets/svg/user.png";



class Main extends React.Component {
render() {
    return (
        <div>
            <div><User/></div>
            <p>User not found </p>
        </div>
    );
}
}

export default Main;