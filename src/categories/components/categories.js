import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../../widgets/containers/search';
import Media from '../../playlist/components/media.js';

function Categories(props) {
  return (
    <div className="Categories">
      <Search />
      {
        props.search.map(item =>{
          {/* con el toJS devuelvo un objeto, tanto el metodo get como el toJS con metodos internos de immutable {...item.toJS()} */}
          {/* no se recomienda mucho ya que en cada vuelta del arreglo este creara uno y otro objeto por cada vuelta */}
            return <Media 
                        title={item.get('title')}
                        author={item.get('author')}
                        type={item.get('type')}
                        cover={item.get('cover')}
                        src={item.get('src')}
                        id={item.get('id')}
                        key={item.get('id')}
                        />
        })
      }
      {
        props.categories.map((item) =>{
          return (
            <Category
              key={item.get('id')}
              description={item.get('description')}
              title={item.get('title')}
              playlist={item.get('playlist')}
              // {...item.toJS()} //esto no es recomendable ya que en cada vuelta creara un objeto
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories
