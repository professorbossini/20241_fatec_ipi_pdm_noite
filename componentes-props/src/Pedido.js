// rafce: react arrow function component export
import React from 'react'

const Pedido = ({ iconeNome, iconeEfeito, titulo, descricao }) => {
  // const iconeNome = props.iconeNome
  // const iconeEfeito = props.iconeEfeito
  // const { iconeNome, iconeEfeito, titulo, descricao } = props
  return (
    <div className="d-flex">
      <div className="d-flex align-items-center">
        <i className={`fa-solid fa-2x ${iconeNome} ${iconeEfeito}`}></i>
      </div>
      <div className="flex-grow-1 ms-3 border">
        <h4 className="text-center">{titulo}</h4>
        <p className="text-center">{descricao}</p>
      </div>
    </div>
  )
}

// int soma (int a, int b){
//   return a + b;
// }

export default Pedido

// const Pedido = () => {
  
// }

// export default Pedido;