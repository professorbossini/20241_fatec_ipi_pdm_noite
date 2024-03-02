import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import ReactDOM from 'react-dom'
const App = () => {
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
        <div className="card">
          <div className="card-header text-muted">22/04/2021</div>
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i className="fa-regular fa-hard-drive fa-2x fa-beat-fade"></i>
              </div>
              <div className="flex-grow-1 ms-3 border">
                <h4 className="text-center">HD</h4>
                <p className="text-center">HD 1Tb</p>
              </div>
            </div>
        </div>

      </div>
      <div className="col-sm-12 col-lg-6 col-xxl-3">
        {/* .card>.card-header.text-muted{22/04/2021}+.card-body.d-flex */}
        <div className="card">
            <div className="card-header text-muted">22/04/2022</div>
              <div className="card-body d-flex">
                <div className="d-flex align-items-center">
                <i className="fa-solid fa-memory fa-2x fa-bounce"></i>
              </div>
              <div className="flex-grow-1 ms-3 border">
                <h4 className="text-center">RAM</h4>
                <p className="text-center">Memória 16Gb</p>
              </div>
            </div>
        </div>
      </div>
      <div className="col-sm-12 col-lg-6 col-xxl-3">
        {/* .card>.card-header.text-muted{22/04/2021}+.card-body.d-flex */}
        <div className="card">
          <div className="card-header text-muted">22/04/2022</div>
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
              <i className="fa-brands fa-java fa-2x fa-flip"></i>
            </div>
            <div className="flex-grow-1 ms-3 border">
              <h4 className="text-center">Java</h4>
              <p className="text-center">Projeto simples</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-lg-6 col-xxl-3">
      {/* .card>.card-header.text-muted{22/04/2021}+.card-body.d-flex */}
      <div className="card">
        <div className="card-header text-muted">22/04/2022</div>
          <div className="card-body d-flex">
            <div className="d-flex align-items-center">
            <i className="fa-solid fa-gamepad fa-2x fa-shake"></i>
          </div>
          <div className="flex-grow-1 ms-3 border">
            <h4 className="text-center">Java</h4>
            <p className="text-center">Projeto simples</p>
          </div>
        </div>
      </div>

      </div>  
    </div>
    <div className="row">
      
    </div>
  </div>
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)