import React from 'react';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      choices: [],
      correctAnswer: '',
      error: null,
    };
  }

  componentDidMount() {
    this.fetchQuestion();
  }

  fetchQuestion() {
    fetch('http://localhost:3001/api/questions')
      .then(response => response.json())
      .then(question => this.setState({ ...question }))
      .catch(error => {
        console.error('Error fetching question:', error);
        this.setState({ error: 'Error fetching question' });
      });
  }

  handleChoice(choice) {
    if (choice === this.state.correctAnswer) {
      this.props.onCorrectAnswer();
    } else {
      console.log('Incorrect...');
    }

    // 新しい問題を取得
    this.fetchQuestion();
  }

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error}</div>;
    }

    return (
      <div>
        <h2>{this.state.question}</h2>
        {this.state.choices.map((choice, index) => (
          <button onClick={() => this.handleChoice(choice)} key={index}>
            {choice}
          </button>
        ))}
      </div>
    );
  }
}

export default Quiz;
