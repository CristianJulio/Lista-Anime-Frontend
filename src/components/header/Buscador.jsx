import React, { useState } from 'react';
import { GrSearch } from 'react-icons/gr';
import { useHistory } from 'react-router-dom';
import { StyledBuscador, InputBuscador, ButtonBuscador } from '../../styles/header/BuscadorStyledComp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Buscador = () => {
  const [busqueda, setBusqueda] = useState("");
  const history = useHistory();

  const handleChange = e => {
    setBusqueda(e.target.value);
  }

  const handleSubmit = e => {   
    e.preventDefault();
    
    if(busqueda.length >= 3) {
      history.push(`/search/${busqueda.split(' ').join('-')}/1`);
    } else {
      toast.warn("This field must have a minimum of 3 characters");
    }
  }
  
  return (
    <StyledBuscador onSubmit={handleSubmit}>
      <InputBuscador type="text" placeholder="Search..." onChange={handleChange} />
      <ButtonBuscador><GrSearch /></ButtonBuscador>
      <ToastContainer 
        position="top-center"
      />
    </StyledBuscador>
  );
}
 
export default Buscador;