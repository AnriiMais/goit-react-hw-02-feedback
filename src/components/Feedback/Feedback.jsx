import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import s from './Feedback.module.css';

export default class Feedback extends Component {
  static defaultProps = {};
  static propTypes = {};
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };
  handleOnFeedback = e => {
    this.setState(preventState => ({
      [e.target.name]: preventState[e.target.name] + 1,
    }));
    this.countTotalFeedback(this.state);
    this.countPositiveFeedbackPercentage(this.state);
  };
  countTotalFeedback = ({ good, neutral, bad }) => {
    this.setState({ total: good + neutral + bad });
  };
  countPositiveFeedbackPercentage = ({ good, total }) => {
    this.setState({
      positivePercentage: total === 0 ? 0 : parseInt((100 * good) / total),
    });
  };
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <>
        <h1 className={s.titleFeedback}>Please leave feedback</h1>
        <FeedbackOptions
          // btnName={{ good, neutral, bad }}
          onOptinClick={this.handleOnFeedback}
        />
        <ul className="listStat">
          <h2 className="titleStat">Statistics</h2>
          <li className={s.listItem}>Good:{good}</li>
          <li className={s.listItem}>Neutral:{neutral}</li>
          <li className={s.listItem}>Bad:{bad}</li>
          <li className={s.listItem}>Total:{total}</li>
          <li className={s.listItem}>
            Positive feedback:{positivePercentage}%
          </li>
        </ul>
      </>
    );
  }
}
