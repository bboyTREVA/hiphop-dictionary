import React from 'react';
import Quiz from './Quiz';
import Dictionary from './Dictionary';
import Badge from './Badge';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      badges: [],
      points: 0,
    };
  }

  handleCorrectAnswer = () => {
    this.setState(state => ({ points: state.points + 1 }));
  
    // 一定のポイントに達したら新しいバッジを獲得
    if (this.state.points >= 10) {
      fetch('http://localhost:3001/api/badges')
        .then(response => response.json())
        .then(badges => {
          const badge = badges[Math.floor(Math.random() * badges.length)];
          this.setState(state => ({ badges: [...state.badges, badge] }));
        });
    }
  };
  

  render() {
    return (
      <div>
        <h1>Hip Hop Slang Quiz</h1>
        <Quiz onCorrectAnswer={this.handleCorrectAnswer} />
        <Dictionary />
        <Badge badges={this.state.badges} />
      </div>
    );
  }
}




export default App;

