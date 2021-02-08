// Usefuly Module
import React from "react"
import {Switch,Route ,BrowserRouter} from "react-router-dom"

// Components
import Header from "./components/Header"
import ErrorPage from './components/ErrorPage'

// Pages
import HomePage from './homePage/HomePage'
import MessagePage from './messagePage/MessagePage'
import ExplorePage from './explorePage/ExplorePage'


const App = () => {
  return(
    <BrowserRouter>
      <div className="continer-fluid">
        <Header/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/msg" component={MessagePage}/>
            <Route exact path="/explore" component={ExplorePage}/>
            <Route component={ErrorPage}/>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
