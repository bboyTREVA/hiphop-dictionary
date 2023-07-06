import React from 'react';

class Badge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      badges: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/badges')
      .then(response => response.json())
      .then(badges => this.setState({ badges }));
  }
  

  render() {
    return (
      <div>
        <h2>Badges</h2>
        {this.state.badges.map((badge, index) => (
          <div key={index}>
            <img src={badge.image} alt={badge.name} />
            <p>{badge.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Badge;
