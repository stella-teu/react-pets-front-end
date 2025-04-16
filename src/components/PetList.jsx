import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { index } from "../services/petServices";

const PetList = () => {
  const navigator = useNavigate();
  const [petList,setPetList] = useState([]);

  useEffect(() => {
    const getPets = async () => {
      try{
        const pets = await index();

        if (pets.err){
          throw new Error (pets.error);
        }

        setPetList(pets);
      } catch (error){
        console.log(error);
      }
    };
    getPets();
  }, []);

  const addPet= (event) => {
    navigator("/new");
  };

  return (
    <div>
      <h1>Pet List</h1>
      <div>
        <ul>
          {petList.length === 0 ? (
            <h4>There are no pets.</h4>
          ) : (
            petList.map((pet, index) => {
              return <li key={index}> 
              <Link to={"/" + pet._id }>
              {pet.name}
              </Link>
              </li>;
            })
          )}
        </ul>
        <button onClick={addPet}>Add Pet</button>
      </div>
    </div>
  );
};

export default PetList;
