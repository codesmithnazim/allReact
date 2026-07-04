import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from "./components/header"
import Footer from "./components/footer"

function App() {
  let [value, setvalue] = useState(420)
  const incrementor = (cValue) => {
    setvalue(prev => { return (prev + 5) })
    setvalue(prev => (prev + 1))
    setvalue(prev => (prev + 1))
    // setvalue(cValue+1)
    // setvalue(cValue+1)
    // setvalue(cValue+1)


  }
  return (

    <div className="app">
      <Header logoname="CodeSmithNazim" />
      <div>

        <img src={logo} alt="Logo" className='App-logo' />
      </div>
      <div className="box">
        <div className="counter">{value}</div>
        <button className="clickMe" onClick={() => { incrementor(value) }}>click Me</button>

      </div>
      <Footer />
    </div>
  )
}

export default App;



