import React from 'react'
import { GifItem } from '../components'
import { useFetchGifs } from '../hooks/useFetchGifs'

function GifGrid({ category }) {
  const { images, isLoading } = useFetchGifs(category)
  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h1>Cargando...</h1>}
      <div className='card-grid'>
        {images.map(image => {
          return (
            <GifItem
              key={image.id}
              {...image} />
          )
        })}
      </div>

    </>
  )
}

export default GifGrid