import api from '../api.json'
import { normalize, schema } from 'normalizr'

// const media = new schema.Entity(key, definicion de mi schema, opciones)
// primer parametro es el key y segundo es la definicion de mi schema, si quiero heredar schemas dentro de otros schemas
const media = new schema.Entity('media', {}, {
    //en caso de que en nuestra Api no tengamos un elemento Id podemos personalizarlo con idAttribute
    // de esta manera podemos personalizar nuestro nombre de id ponemos idAttribute: 'mediaId' y el nombre
    idAttribute: 'id',
    processStrategy: (value, parent, key) => ({...value, category:parent.id, })

})

const category = new schema.Entity('categories',{
    // el key de playlist lo extraemos de mi api, es el mismo pero lo traemos aca
    // mi playlis tiene un elemento media que es el que le estoy pasando en el Array,
    //y como mi playlist es un array por eso el elemento media lo pongo en un array
    playlist: new schema.Array(media)

})

// para finalizar es como quiere retornar mis elementos al final, que es lo que quiero?, en este caso yo quiero un objeto ya que es mas sencillo
const categories = {categories: new schema.Array(category)}

const normalizedData = normalize(api, categories)

export default normalizedData