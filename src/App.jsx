import * as  petService from "./services/petServices.js"
import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import PetList from "./components/PetList.jsx";
import PetDetails from "./components/PetDetails.jsx";
import CreatePetForm from "./components/CreatePetForm.jsx";
import EditPet from "./components/EditPet.jsx";
import NavBar from "./components/Navbar.jsx";

const App = () => {
  return (
    <>
    <NavBar />
    <Routes>
    <Route path="/" element={<PetList />} />
    <Route path="/:id" element={<PetDetails />} />
    <Route path="/new" element={<CreatePetForm />} /> 
    <Route path="/edit/:id" element={<EditPet />} />
    </Routes>
    </>
  )
};

export default App;
