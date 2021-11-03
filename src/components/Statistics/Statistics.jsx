import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className="listStat">
      <li className={s.listItem}>Good:{good}</li>
      <li className={s.listItem}>Neutral:{neutral}</li>
      <li className={s.listItem}>Bad:{bad}</li>
      <li className={s.listItem}>Total:{total}</li>
      <li className={s.listItem}>Positive feedback:{positivePercentage}%</li>
    </ul>
  );
}
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
