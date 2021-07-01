import React from "react";
import Form from "./components/Form";
import UserList from "./components/UserList"
import styles from './App.module.css'
import { useState } from "react";

const userData = [
  { userName: "Adam", age: 33, id: 23402384 },
  { userName: "Annmarie", age: 30, id: 3023084 },
];


function App() {
  const [userList, setUserList] = useState(userData)
  const [modal, setModal] = useState(false)
  const addUser = (user) => {
    setUserList([...userList, user])
  }

  const deleteUserHandler = (recievedid) => {
    console.log(recievedid, 'appjs')
    setUserList(prevList => {
      const updatedList = prevList.filter(details => details.id !== recievedid);
      return updatedList;
    })
  }

  const modalHandler = () => {
    setModal(true)
  }
  const cancelModal = () => {
    setModal(false)
  }

  return (
    <div>
      {modal && <div className={styles.modal} onClick={cancelModal}>yo enter some text in both fields</div>}
      <Form triggerModal={modalHandler}  onFormSubmit={addUser} userData={userData}></Form>
      <UserList deleteUser={deleteUserHandler} userData={userList}></UserList>
    </div>
  );
}

export default App;
