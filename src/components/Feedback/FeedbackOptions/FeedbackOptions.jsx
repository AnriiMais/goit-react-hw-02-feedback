import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onOptinClick }) {
  return (
    <>
      <button
        type="button"
        name="good"
        className={s.button}
        onClick={onOptinClick}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        className={s.button}
        onClick={onOptinClick}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        className={s.button}
        onClick={onOptinClick}
      >
        Bad
      </button>
    </>
  );
}
