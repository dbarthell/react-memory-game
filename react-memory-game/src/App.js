import React, { Component } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import golfers from "./golfers.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    golfers,
    score: 0,
  };

  gameOver = () => {
    this.state.golfers.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over! \nScore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.golfers.find((item, i) => {
      if (item.id === id) {
        if(golfers[i].count === 0){
          golfers[i].count = golfers[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.golfers.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Map over this.state.golfers and render a Card component for each golfer object
  render() {
    return (
      <Container>
        <Navbar score={this.state.score}>Clicky Golf!</Navbar>
        {this.state.golfers.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Container>
    );
  }
}

export default App;