import s from './FeedbackOptions.module.css';
import shortid from 'shortid';
export default function FeedbackOptions({ options, onOptinClick }) {
  return (
    <>
      {options.map(option => (
        <button
          key={shortid.generate()}
          type="button"
          name={option}
          className={s.button}
          onClick={onOptinClick}
        >
          {option}
        </button>
      ))}
    </>
  );
}
