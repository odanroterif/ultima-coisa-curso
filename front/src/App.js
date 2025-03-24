//import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Form from './Forms'
import Table from './Table'

export default function App() 
{

  const product = {
    code: 0,
    name: "",
    mark: ""
  }

  const [btsing, setSIG] = React.useState(true);
  const [products, setProducts] = React.useState([]);
  const [objproduct, setObjproduct] = React.useState(product);


  React.useEffect(() => {//recorda uma função, ou seja, após todo o app estar renderizado processa as informações que estão dentro dele
    fetch("http://localhost:8080/listar")
    .then(response => response.json())
    .then(response_convert => setProducts(response_convert));
  }, []);


  const ondigit = (e) => {
    setObjproduct({...objproduct, [e.target.name]: e.target.value });
  }

  const sign = () => {
    fetch("http://localhost:8080/cadastrar", {
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
          cleanform();
        }
      })
  };

  const cleanform = () => {
    setObjproduct(product);
    setSIG(true);
  }

  const selectP = (index) => {
    setObjproduct(products[index]);
    setSIG(false);
  }

  const remove = () => {
    fetch("http://localhost:8080/remover/" + objproduct.code, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(response_convert => {
      alert(response_convert.message);

      let vetorTemp = [...products]

      let index = vetorTemp.findIndex((item) => {return item.code === objproduct.code});

      vetorTemp.splice(index, 1);

      setProducts(vetorTemp);

      cleanform();
    })
  }

  const update = () => {
    fetch("http://localhost:8080/alterar",{
      method: "put",
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
        alert("Produto atualizado com sucesso!")

        let vetorTemp = [...products]

        let index = vetorTemp.findIndex((item) => {return item.code === objproduct.code});

        vetorTemp[index] = objproduct;

        setProducts(vetorTemp);

        cleanform();
      }      
    })
  }

  return (
    <div>            
      <Form button={btsing} alter={update} del={remove} cancel={cleanform} keyevent={ondigit} registrate={sign} obj={objproduct} />
      <Table vetor={products}  select={selectP} />
    </div>
  );
}
