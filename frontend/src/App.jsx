import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import  { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyNotes from "./screens/LandingPage/MyNotes/MyNotes";

export default function App() {
  return (
    <Router>
      
      <Header />
        <main >
          <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/mynotes' component={MyNotes}  />
          
          </Switch>
        </main>
      <Footer/>
      
    </Router>
  );
}
