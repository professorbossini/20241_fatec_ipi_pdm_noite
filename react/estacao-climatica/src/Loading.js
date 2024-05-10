import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
      <div 
        className='d-flex flex-column justify-content-center align-items-center border rounded p-3'>
          <div 
            className="spinner-border text-primary"
            style={{height: '3rem', width: '3rem'}}
            role='status'>
              <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-primary">{this.props.mensagem}</p>
      </div>
    )
  }
}

Loading.defaultProps = {
  mensagem: 'Aguardando'
}
