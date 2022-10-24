import React, { useEffect, useState } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
// import notes from "../../../data/notes";
import MainScreen from "../../../components/MainScreen";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux'
import { listNotes } from "../../../actions/notesActions";
import Loading from "../../../components/Loading";
import ErrorMessage from "../../../components/ErrorMessage";

const MyNotes = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const noteList = useSelector(state => state.noteList);
  const {loading , notes, error}= noteList;

 const userLogin = useSelector(state => state.userLogin);
 const {userInfo} = userLogin;




  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  useEffect(() => {
  dispatch(listNotes())
   if(!userInfo){
     history.push('/')
   }
  }, [dispatch]);


  return (
    <MainScreen title={`Welcome Back ${userInfo.name}`}>
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {loading && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading/>}
      {notes?.map((note) => (
        <Accordion key={note._id}>
          <Accordion.Item>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
              
                <Accordion.Header as={Card.Text} variant="link" eventKey="0">
                  {note.title}
                </Accordion.Header>
              </span>

              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Body eventKey="0">
              <Card.Body>
                <h4>
                  <Badge bg="success">Category- {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created on{" "}
                    <cite title="Source Title">
                      {note.createdAt.substring(0, 10)}
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Body>
            
          </Card>
          </Accordion.Item>
          
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
