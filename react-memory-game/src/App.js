import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import golfers from "./golfers.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    golfers,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.golfers.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.golfers.find((o, i) => {
      if (o.id === id) {
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
      <Wrapper>
        <Navbar score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        {this.state.golfers.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;