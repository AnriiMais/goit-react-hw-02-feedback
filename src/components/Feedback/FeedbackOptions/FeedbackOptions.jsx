import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onOptinClick }) {
  return (
    <>
      {options.map(option => (
        <button
          key={option}
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
