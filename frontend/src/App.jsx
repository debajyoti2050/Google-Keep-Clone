import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyNotes from "./screens/LandingPage/MyNotes/MyNotes";
import LoginPage from "./screens/LoginPage/LoginPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";
import { useState } from "react";



export default function App() {
  const [search, setSearch]= useState('')
  // console.log(search);


  return (
    <Router>
      <Header setSearch={setSearch}/>
      <main>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/mynotes" component={()=> <MyNotes search={search}/>}/>
          <Route path="/createnote" component={CreateNote} />
          <Route path="/note/:id" component={SingleNote} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}
