import { useState } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [isValid, setIsValid] = useState(true);



  const userNameHandler = (e) => {
    setUserName(e.target.value);
    checkIfValid()
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
    checkIfValid()
  };

const checkIfValid = () => {
    if(age.trim().length > 0 && userName.trim().length > 0) {setIsValid(true)}
}

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (userName.trim().length === 0 || age.trim().length === 0) {
      setIsValid(false);
      props.triggerModal()
      return;
    }
    if (userName.trim().length > 0 && age.trim().length > 0) {
      const newUser = {
        userName: userName,
        age: age,
        id: Math.random(),
      };
      console.log(newUser, props);
      props.onFormSubmit(newUser);
      setUserName("");
      setAge("");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={formSubmitHandler}>
          <div className={!isValid && styles.invalid}>
            <label>Username</label>
            <input value={userName} onChange={userNameHandler} />
            <label>{"Age (years)"}</label>
            <input value={age} onChange={ageHandler} />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default Form;
