import React, { Component } from 'react'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
export default class Busca extends Component {

  state = {
    termoDeBusca: ''
  }

  onTermoAlterado = (event) => {
    // console.log(event.target.value)
    this.setState({termoDeBusca: event.target.value})
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onBuscaRealizada(this.state.termoDeBusca)
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className='grid'>
          <div
            className={`${this.props.classNameInputText}`}>
            <IconField 
              iconPosition='left'>
              <InputIcon 
                className="pi pi-search"/>
              <InputText
                value={this.state.termoDeBusca}
                className='w-full h-100' 
                placeholder={this.props.dica}
                onChange={this.onTermoAlterado}
                />
            </IconField>
          </div>
          <Button
            label="Buscar"
            className={`${this.props.classNameButton}`}/>
        </div>
      </form>
    )
  }
}

Busca.defaultProps = {
  dica: 'O que deseja buscar?'
}
