import React from "react";
import Pagination from "../pagination/pagination";
import "./main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      userRepos: [],
      currentPage: 1,
    };
  }

  getUserData(response) {
    this.setState({ userData: response });
    fetch(`${this.state.userData.repos_url}?page=${this.state.currentPage}&per_page=4&sort=pushed`)
      .then((res) => res.json())
      .then((res) => this.setState({ userRepos: res }));
  }

  componentDidUpdate(prevProps,prevState) {
    if (this.props.search !== prevProps.search || prevState.currentPage !== this.state.currentPage) {
      fetch(`https://api.github.com/users/${this.props.search}`)
        .then((res) => res.json())
        .then((res) => this.getUserData(res))
        .catch((error) => console.log(error));
    }
  }

  numberConverter(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num;
  }

  render() {
    const data = this.state.userData;
    console.log(this.state.currentPage);
    return (
      <main className="main">
        <div className="main__container">
          <div className="main__container-profile">
            <img
              className="main__container-photo"
              src={data.avatar_url}
              alt="Photo"
            />
            <div className="main__container-info">
              <span className="name__container-name">{data.name}</span>
              <h2 className="name__container-username">
                  <a href={data.html_url} target="_blank" > {data.login}</a>
                  </h2>
              <div className="name__container-follow">
                <a className="name__container-followers">
                  {this.numberConverter(data.followers)} followers
                </a>
                <a className="name__container-following">
                  {data.following} following
                </a>
              </div>
            </div>
          </div>
          <div className="main__container-repositories">
            <div>Repositories ({data.public_repos})</div>
            <ul className="main__container-ul">
              {this.state.userRepos.map((repos, key) => (
                <li key={key} className="main__container-li">
                  <a href={repos.html_url} target="_blank">{repos.name}</a>
                  <div>{repos.description}</div>
                </li>
              ))}
            </ul>
            <Pagination currentPage={(page)=>this.setState({currentPage: page})} numOfElements={data.public_repos} elementsPerPage={4}/>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
