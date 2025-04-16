import { useState } from "react";
import { useNavigate } from "react-router";
import { create } from "../services/petServices.js";

const CreatePetForm = (props) => {
  const navigator = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        breed: '',
      });

      const handleSubmit = async (event) => {
        event.preventDefault();
        await create(formData);
        navigator('/');
      }

      const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
      }

    return (
        <>
        <h1>Add a Pet</h1>
        <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="age"> Age </label>
        <input
          id="age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <label htmlFor="breed"> Breed </label>
        <input
          id="breed"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
        />
        <button type="submit">Add New Pet</button>
      </form>
    </div>
    </>
    )
}

export default CreatePetForm;