import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
//connect de react-redux nos ayuda a conectar datos de nuestra aplicacion
import {connect} from 'react-redux'

class Home extends Component {
  state = {
    modalVisible: false,
  }
  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media
    })
  }
  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false,
    })
  }
  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
            search={this.props.search}
          />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                  autoplay
                  src={this.state.media.src}
                  title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

const mapStateToProps = (state, props) => { 
  //los datos que me llegaran de state seran los datos que tengo en mi estado de redux que es el initialState que esta en 
  //el entrie de home que esos datos los jala de nuestra api json
  //el props seran las propiedades que le puedan llegar a mi Home
      return{
            //aqui le estoy retornando nuevas propiedades a mi Home, por eso en categories utilizo pros en vez de data
            // porque los datos ya me estan llegando de mis pros this.props.categories 
             categories: state.data.categories,
             search: state.search 
      }
}

              // esto es programacion funcional y gracias a connect de react-redux puedo
              // conectar datos de mi store (datos que tengo en mi initialState que son los datos que le paso de api.json)
              //a un componente en espesifico
export default connect(mapStateToProps)(Home)
