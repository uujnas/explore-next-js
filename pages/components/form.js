import UpdateForm from "./updateForm";
import AddForm from "./addForm";

export default function Form() {
  const flag = true;
  return (
    <>
    {flag ? <AddForm/> : <UpdateForm/>}
      {/* <AddForm /> */}
      {/* <UpdateForm /> */}
    </>
  );
}
