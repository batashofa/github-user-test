import React from "react"
import "./user.css";
import { ReactComponent as User } from '../../assets/svg/User.svg';


export default class UserNotFound extends React.Component {
    render() {
        return (
            <div className="user">
                <div className="user__search"> <User /></div>
                <p className="user__text">User not found </p>
            </div>
        );
    }
}
