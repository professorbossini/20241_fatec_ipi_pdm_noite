import React from 'react'
import Imagem from './Imagem'

const ListaImagens = ({photos}) => {
  return (
    photos.map((photo) => (
      <Imagem 
        src={photo.src.small}
        alt={photo}
        id={photo.id}
      />
    ))
  )
}

export default ListaImagens