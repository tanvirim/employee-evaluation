import useProgressList from "./useProgresslist"



const AddProgressButton = () => {
    const { id } = JSON.parse(localStorage.getItem("data"));
    const {openModalForAdd} = useProgressList(id)
  return (
    <button onClick={openModalForAdd}>Add Progress</button>
  )
}

export default AddProgressButton
