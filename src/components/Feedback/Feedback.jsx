import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Notification from '../Notification';
import Statistics from '../Statistics';
import Section from '../Section';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleOnFeedback = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return console.log('Oops something wrong...');
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = (good, total) => {
    const positivePercentage = total === 0 ? 0 : parseInt((100 * good) / total);
    return positivePercentage;
  };
  const options = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback() ?? 0;
  const positivePercentage = countPositiveFeedbackPercentage(good, total) ?? 0;
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onOptinClick={handleOnFeedback} />
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
