import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { show, edit } from "../services/petServices.js";

const EditPet = () =>{
    const { id } = useParams();
    const navigator = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        breed: '',
      });

      useEffect( () => {
        const getPet = async () => {
            const petData = await show(id);
            setFormData({
                name: petData.name,
                age: petData.age,
                breed: petData.breed,
            });
       }

       getPet();
    }, [])

      const handleSubmit = async (event) => {
        event.preventDefault();
        await edit(formData, id);
        navigator('/'+id);
      }

      const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
      }

    return(
        <>
        <h1>Edit Pet</h1>
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
        <button type="submit">Edit Pet</button>
      </form>
    </div>
        </>
    )
}

export default EditPet;