import React from "react"
import "./inicial.css";
import { ReactComponent as SearchIcon } from "../../assets/svg/SearchIcon.svg";



class SearchPage extends React.Component {
    render() {
        return (
            <div className="search">
                <div className="search__icon"><SearchIcon /></div>
                <p className="search__text">Start with searching a GitHub user </p>
            </div>
        );
    }
}

export default SearchPage;