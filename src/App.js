import React from 'react';
import Board from './components/Board';
import GameProvider from './GameProvider';
import OptionProvider from './OptionProvider';
import {Link, Switch, Route} from 'react-router-dom'
import ExampleForm from './components/ExampleForm';
import ProtectedPage from './components/ProtectedPage';
import {useAuth} from './AuthProvider';


function App() {
  const { isAuth } = useAuth();
  return (
    <>
      {/* НАВИГАЦИЯ */}
      <Link to="/">Главная</Link>
      <br/>
      <Link to="/form">Страница с формой</Link>
      <br />
      {isAuth && <Link to="/protectedPage">Защищенная страница</Link> }
      <br />

      {/* ПРИЛОЖЕНИЕ */}
      <Switch>
        <Route path="/" exact>
            {/* // Оборачиваем приложение в провайдер контекста */}
            <GameProvider>
              <OptionProvider>
                <div className="App">
                  <Board />
                </div>
              </OptionProvider>
            </GameProvider>
        </Route>
        <Route path="/form">

            <ExampleForm/>
          
        </Route>
        <Route path="/protectedPage">
            <ProtectedPage/>
        </Route>
      </Switch>
      
    </>
  );
}

export default App;
