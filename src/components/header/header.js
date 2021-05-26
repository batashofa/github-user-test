import React from "react"
import { ReactComponent as Logo } from '../../assets/svg/Frame.svg';
import { ReactComponent as Icon } from '../../assets/svg/image.svg';
import './header.css';

class Header extends React.Component {

    render() {
        return (
            <header className="header">
                 <div className="header__logo">
                     <Logo/>
                 </div>
                 <div className="header__search">
                     <div className="header__search-icon">
                         <Icon/>
                     </div>
                     <input className="header__search-text" type = "text" placeholder = "Enter GitHub username" ></input>

                 </div>
            </header>
        );
    }
}

export default Header;