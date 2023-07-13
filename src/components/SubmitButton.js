import './SubmitButton.css';

export default function SubmitButton ({ handleSubmit }) {
  return (
    <button className="form-button" onClick={handleSubmit}>
      Submit
    </button>
  )
}