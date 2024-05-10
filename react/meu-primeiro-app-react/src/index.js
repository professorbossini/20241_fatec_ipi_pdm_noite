import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
//function f(){}
//const f = () => {}

//escrever uma função que define um componente React que devolve o nome da disciplina
//escrever uma função que define um componente React que devolve o seu nome completo
//Ajustar a função APp para que 
  //ela devolva uma div
  //A div tem um p
  //O p mostra: Me chamo tal e estou cursando tal


const App = () => {
  const textoDoRotulo = 'Nome:'
  const estilosDoBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8}
  const obterTextoDoBotao = () => {
    return 'Enviar'
  }
  const fuiClicado = () => {
    alert ('vc me clicou')
  }
  return(
    <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8 }}>
      <label className='rotulo' htmlFor='nome' style={{display: 'block', marginBottom: 4}}>
        {textoDoRotulo}
      </label>
      <input type='text' id='nome' style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'}}/>
      <button 
        style={estilosDoBotao}
        onClick={fuiClicado}>
        {obterTextoDoBotao()}
      </button>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')  
);
