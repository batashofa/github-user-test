import React from "react"
import { ReactComponent as Logo } from '../../assets/svg/Frame.svg';
import { ReactComponent as Icon } from '../../assets/svg/image.svg';
import './header.css';

class Header extends React.Component {

    
    handleSubmit(e) {
        const formData = new FormData(e.target);
        this.props.value(formData.get("search").toString());
       
        e.preventDefault()
    }

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
                     <form onSubmit={(e)=>this.handleSubmit(e)}>
                     <input name="search" className="header__search-text" type="text" placeholder="Enter GitHub username" ></input>

                     </form>

                 </div>
            </header>
        );
    }
}

export default Header;