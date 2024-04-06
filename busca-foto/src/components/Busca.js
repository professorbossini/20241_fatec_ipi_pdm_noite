import React, { Component } from 'react'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
export default class Busca extends Component {
  render() {
    return (
      <div className='grid'>
        <div
          className={`${this.props.classNameInputText}`}>
          <IconField 
            iconPosition='left'>
            <InputIcon 
              className="pi pi-search"/>
            <InputText
              className='w-full h-100' 
              placeholder={this.props.dica}
              />
          </IconField>
        </div>
        <Button 
          label="Buscar"
          className={`${this.props.classNameButton}`}/>
      </div>
    )
  }
}

Busca.defaultProps = {
  dica: 'O que deseja buscar?'
}
