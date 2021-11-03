import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Notification from '../Notification';
import Statistics from '../Statistics';
import Section from '../Section';

export default class Feedback extends Component {
  static defaultProps = {};
  static propTypes = {};
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleOnFeedback = e => {
    this.setState(preventState => ({
      [e.target.name]: preventState[e.target.name] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage(this.state);
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = ({ good, total }) => {
    const positivePercentage = total === 0 ? 0 : parseInt((100 * good) / total);
    return positivePercentage;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage({
      good,
      total,
    });
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onOptinClick={this.handleOnFeedback} />
        </Section>
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </>
    );
  }
}
//
