import React from "react"
import Photo from '../../assets/svg/Photo.png';
import { ReactComponent as Followers } from '../../assets/svg/followers.svg';
import { ReactComponent as Following } from '../../assets/svg/following.svg';
import './main.css';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: {}
        }
    }

    componentDidMount() {
        fetch("https://api.github.com/users/batashofa")
        .then((res) => res.json())
        .then((res)=> this.setState({userData: res}))
        .catch((error)=> console.log(error))
        
    }

    render() {
        const data = this.state.userData;
        return (
            <main className="main"> 
           <div className="main__container">
               <div className="main__container-profile">
               <img className="main__container-photo" src={Photo} alt="Photo" />
               <div className="main__container-info">
                   <span className="name__container-name">
                       {data.login}
                    </span>
                    <h2 className="name__container-username">
                     gaearon
                    </h2>
                    <div className="name__container-followers">
                    <Followers/>
                    <a className="name__container-followers">followers</a>
                    </div>
                    <div className="name__container-following">
                    <Following/>
                    <a className="name__container-following">following</a>
                    </div>
               </div>
               </div>
               <div className="main__container-repositories">
                   <div>Repositories (249)</div>
                   <ul className="main__container-ul">  
                       <li className="main__container-li">
                           <a>react-hot-loader</a>
                            <div>Tweak React components in real time. Deprecated: use Fast Refresh instead.</div>
                       </li>
                       <li className="main__container-li">
                           <a>overreacted.io</a>
                           <div>Personal blog by Dan Abramov</div>
                       </li>
                       <li className="main__container-li">
                           <a>whatthefuck.is</a>
                           <div>An opinionated glossary of computer science terms for front-end developers. Written by Dan Abramov.</div>
                       </li>
                       <li className="main__container-li">
                           <a>react-deep-force-update</a>
                           <div>react-deep-force-update</div>
                       </li>

                   </ul>
                   
                </div>
               </div>
               </main>
        );
        
    }
}

export default Main;