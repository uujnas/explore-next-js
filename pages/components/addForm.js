import { useReducer } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value
  }
}

export default function AddForm() {
  const [formData, setFormData] = useReducer(formReducer, {})  //useReducer(reducer, initialObject)
  const handleSubmit = (e) =>{
    e.preventDefault()
     Object.keys(formData) === ""? console.log( "Empty data provided") : console.log(formData)
  }

  return (
    <form onSubmit =  {handleSubmit}>
      <div className="container pt-5">
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Title</label>
          <input type="text"  onChange={setFormData} name="title"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="title"
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="exampleFormControlTextarea1">Desctription</label>
          <textarea  onChange={setFormData} name="description"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-4">  Add </button>
      </div>
    </form>
  );
}
