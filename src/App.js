import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import Routes from "./routes";
import {store, persistor} from "./store";
import { PersistGate } from 'redux-persist/integration/react';

// 1- Configurar o componente de Provider no App.js
// 2- Configurar a store da aplicação (uma série de passos)
// importar legacy_createStore o "as" é como está sendo chamado no código
// criar a const store e chamar o método createStore
// nesse método passar como parâmetro todas as funções com função de reduxes na aplicação
//criar uma estrutura de pastas para fazer isto, para não ficar um código confuso


function App() {
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Menu/>
          <Routes/>
        </BrowserRouter>
      </PersistGate>
  </Provider>
  );
}

export default App;
