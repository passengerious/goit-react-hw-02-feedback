import React, { Component } from 'react';

import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    const percentageOfGood = total ? Math.round((good / total) * 100) : 0;
    return percentageOfGood;
  };

  sendFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback();
    const percentageOfGood = this.countPositiveFeedbackPercentage();
    
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.sendFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentageOfGood={percentageOfGood}
            />
          )}
          {total === 0 && <Notification infoMessage="There is no one feedback yet" />}
        </Section>
      </>
    );
  }
}

export default App;
