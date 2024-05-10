import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import ReactDOM from 'react-dom'
import Pedido from './Pedido'
import Cartao from './Cartao'
import Feedback from './Feedback'
const App = () => {
  const feedback = <Feedback
    textoOK="Já chegou"
    textoNOK="Ainda não chegou"
    funcaoOK={() => alert('Obrigado pelo feedback!')}
    funcaoNOK={() => alert('Verificaremos o que houve')}
  />
  return <div className="container-fluid border mt-2">
    <div className="row">
      <div className="col-12">
        {/* h1.display-5.text-center{Seus pedidos} */}
        <h1 className="display-5 text-center">Seus pedidos</h1>
      </div>
    </div>
    {/* essa é a linha para os pedidos */}
    <div className="row">
      {/* primeiro pedido */}
      <div className="col-sm-12 col-lg-6 col-xxl-3">
        {/* .card>.card-header.text-muted{22/04/2021}+.card-body.d-flex */}
        <Cartao cabecalho="22/04/2023">
          <Pedido
            iconeNome="fa-hdd"
            iconeEfeito="fa-fade"
            titulo="HDD"
            descricao="1Tb" />
          {feedback}
        </Cartao>
      </div>
      <div className="col-sm-12 col-lg-6 col-xxl-3">
        {/* .card>.card-header.text-muted{22/04/2021}+.card-body.d-flex */}
        <Cartao
          cabecalho="22/04/2023">
        <Pedido 
          iconeNome="fa-hdd"
          iconeEfeito="fa-fade"
          titulo="HDD"
          descricao="1Tb" />
        {feedback}
        </Cartao>
      </div>
      <div className="col-sm-12 col-lg-6 col-xxl-3">
        {/* .card>.card-header.text-muted{22/04/2021}+.card-body.d-flex */}
        <Cartao
          cabecalho="21/01/2023">
          <Pedido 
            iconeNome="fa-book"
            iconeEfeito="fa-shake"
            titulo="Livro"
            descricao="Concrete Mathematics" />
          {feedback}
        
        </Cartao>
      </div>
      <div className="col-sm-12 col-lg-6 col-xxl-3">
      {/* .card>.card-header.text-muted{22/04/2021}+.card-body.d-flex */}
        <Cartao
          cabecalho="22/04/2022">
          <Pedido 
            iconeNome="fa-laptop"
            iconeEfeito="fa-flip"
            titulo="Notebook"
            descricao="i7 12th" />
          {feedback}
        </Cartao>
      </div>  
    </div>
    <div className="row">
      {/* exibir um nome de empresa que você vai inventar e pelo menos três icones de redes sociais */}
      {/* <Rodape conteudo="" icones=""/>  */}
    </div>
  </div>
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)