import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Form from './Forms'
import Table from './Table'

export default function App() 
{

  const product = {
    code: 0,
    nome: "",
    mark: ""
  }

  const [btsing, setSIG] = React.useState(true);
  const [products, setProducts] = React.useState([]);
  const [objproduct, setObjproduct] = React.useState(product);


  React.useEffect(() => {
    fetch('https://localhost:8080/listar')
      .then(response => response.json())
      .then(response_convert => setProducts(response_convert));
  }, []);


  const ondigit = (e) => {
    setObjproduct({objproduct, [e.target.name]: e.target.value });
  }

  const sign = () => {
    fetch("https://localhost:8080/cadastrar", {
      method: "post",
      body: JSON.stringify(objproduct),
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(response => response.json())
      .then(response_convert => {
        if (response_convert.message !== undefined) {
          alert(response_convert.message)
        }
        else {
          setProducts([...products, response_convert]);
          alert("Produto cadastrado com sucesso!")
        }
      })
  };


  return (
    <div>
      <p>{JSON.stringify(objproduct)}</p>
      <Form button={btsing} keyevent={ondigit} registrate={sign} />
      <Table vetor={products} />
    </div>
  );
}