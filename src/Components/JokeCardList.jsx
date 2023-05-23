import React, { Component } from "react";

export default class JokeCardList extends Component {
  render() {
    const { jokes } = this.props;
    return (
      <div className="card">
        <div className="card-header">Jokes</div>
        <div className="card-body">
          <div>
            {jokes.length > 0 ? (
              jokes.map((joke) => {
                return <li key={joke}>{joke}</li>;
              })
            ) : (
              <p>No Jokes in this category</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}
