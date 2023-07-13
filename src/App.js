import {useState}  from 'react';
import './App.css';
import SubmitButton from './components/SubmitButton.js';
import FormLabel from './components/FormLabel.js';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState({name:"", email:""})


  const handleName = (e) => {setName(e.target.value)}
  const handleEmail = (e) => {setEmail(e.target.value)}
  const handleSubmit = (e) => {
    e.preventDefault()
    setInfo({name, email})
  }


  return (
    <div className="App">
      <h1>My First React Form</h1>
      <form id="form" className="form">
        <div className="form-field">

          <FormLabel
            title="Name:"
            type="text"
            placeholder="name"
            value={name}
            onChange={handleName}
          />
          
          <FormLabel
            title="Email:"
            type="email"
            placeholder="email"
            value={email}
            onChange={handleEmail}
          />

        </div>
        
        <div>
          <SubmitButton handleSubmit={handleSubmit}/>
        </div>

        <div className="form-output">
          <p>{info.name}</p>
          <p>{info.email}</p>
        </div>
      </form>
    </div>
  );
}

export default App