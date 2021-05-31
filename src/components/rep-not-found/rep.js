import React from "react"
import "./rep.css";
import { ReactComponent as Rep } from '../../assets/svg/Rep.svg';

export default class RepNotFound extends React.Component {
    render() {
        return (
            <div className="rep">
                <div className="rep__icon"><Rep /></div>
                <p className="rep__text">Repository list is empty</p>
            </div>
        );
    }
}