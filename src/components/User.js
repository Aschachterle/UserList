const User = (props) => {
    const deleteHandler = () => {
      props.onDelete(props.details.id)
    }
  return (
      <div onClick={deleteHandler}>
          <p>{props.details.userName}</p>
          <p>{props.details.age}</p>
      </div>
  )
}

export default User