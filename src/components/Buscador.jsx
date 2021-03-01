import React, { useState } from 'react';
import { GrSearch } from 'react-icons/gr';
import { useHistory } from 'react-router-dom';
import { StyledBuscador, InputBuscador, ButtonBuscador } from '../styles/BuscadorStyledComp';

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
    }
  }
  
  return (
    <StyledBuscador onSubmit={handleSubmit}>
      <InputBuscador type="text" placeholder="Buscar..." onChange={handleChange} />
      <ButtonBuscador><GrSearch /></ButtonBuscador>
    </StyledBuscador>
  );
}
 
export default Buscador;