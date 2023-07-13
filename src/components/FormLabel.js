import './FormLabel.css';

export default function FormLabel ({
  title,
  type,
  placeholder,
  value,
  onChange
}) {
  return (
    <>
      <label className="form-label">{title}</label>
        <input 
          className="form-input"
          type={type} 
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
    </>
    )
}