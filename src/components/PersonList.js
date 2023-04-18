// PersonList.js
import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    axios.get(`http://127.0.0.1:5000/api/characters/`).then((res) => {
      const characters = res.data;
      this.setState({ characters });
    });
  }

  render() {
    return (
        <div className="container">
            {this.state.characters.map((character) => (
                <div className="card">
                    <h1>
                        {character.name}
                    </h1>
                    <p>Full Name: {character.full_name}</p>
                    <p>Date of Birth: {character.DoB}</p>
                    <p>Home Town: {character.home_town}</p>
                    <p>Occupation: {character.occupation}</p>
                    <p>Portrayed By: {character.portrayed_by}</p>
                </div>
            ))}
        </div>
    );
  }
}
