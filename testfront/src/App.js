import logo from './logo.svg';
import './App.css';
import Form from './Forms'
import Table from './Table'


export default function App() {
  return (
    <div className="App">
      <div className="formulary">
        <div className="img-box">
          <img src={logo} alt="logo" />
        </div>
        <Form />
      </div>      
      <div className="tab">
        <Table />
      </div>
    </div>
  );
}