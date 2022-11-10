import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import BuscadorPokemon from './components/buscador/BuscadorPokemon';
import ResultadoPokemon from './components/buscador/ResultadoPokemon';
import { Provider } from 'react-redux';
import store from './redux/store/Store';

function App() {
  return (
    <Provider store={store}>
      <div className='App container'>
        <div className='row justify-content-center'>
          <div className='col-6'>
            <div className='card mt-3' style={{maxWidth: '500px'}}>
              <img src={require("./img/logo.png")} alt=''/>
            </div>
          </div>
        </div> 
        <ResultadoPokemon/>
        <BuscadorPokemon/>
      </div>
    </Provider>
  );
}

export default App;
