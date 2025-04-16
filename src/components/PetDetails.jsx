import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { show, deletePet } from "../services/petServices";
import { useNavigate } from "react-router";

const PetDetails = (props) => {
    const { id }= useParams();
    const [pet, setPet] = useState({});
    const navigator = useNavigate();

    useEffect( ()=> {
        const getPet = async () => {
             const petData = await show(id);
             setPet(petData);
        }

        getPet();
    }, []);

    const handleEdit = (event) => {
        navigator("/edit/"+id)
    };

    const handleDelete = async (event) => {
        navigator("/");
        await deletePet(id);
    };

    return (
        <>
        <h3>Name: {pet.name}</h3>
        <h4>Age: {pet.age}</h4>
        <h4>Breed: {pet.breed}</h4>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default PetDetails;