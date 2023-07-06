import React from 'react';

class Dictionary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/dictionary')
      .then(response => response.json())
      .then(entries => this.setState({ entries }));
  }

  render() {
    return (
      <div>
        <h2>Dictionary</h2>
        {this.state.entries.map((entry, index) => (
          <div key={index}>
            <strong>{entry.slang}</strong>: {entry.meaning}
          </div>
        ))}
      </div>
    );
  }
}

export default Dictionary;
