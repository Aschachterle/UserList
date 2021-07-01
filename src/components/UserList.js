import User from "./User";

const UserList = (props) => {

  return (
    <>
      {props.userData.map((e) => (
        <User onDelete={props.deleteUser} key={e.id} details={e} />
      ))}
    </>
  );
};

export default UserList;
