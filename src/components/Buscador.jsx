import React, { useState } from 'react';
import { GrSearch } from 'react-icons/gr';
import Styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';

const BuscadorStyled = Styled.form`
  div.buscador {
    background: #ECECEC;
    width: 200px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    transition: all .3s;

    input {
      background: none;
      width: 90%;
      border: none;
      outline: none;
      padding: 10px 0;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
    }
  }
`;

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
    <BuscadorStyled onSubmit={handleSubmit}>
      <div className="buscador">
        <input type="text" placeholder="Buscar..." onChange={handleChange} />
        <button><GrSearch /></button>
      </div>
    </BuscadorStyled>
  );
}
 
export default Buscador;