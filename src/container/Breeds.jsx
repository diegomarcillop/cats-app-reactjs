import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Breed from "../components/Breeds/Breed";
import Axios from "axios";

function Breeds() {
  const [Data, SetData] = useState(null);
  const apiKey = "e5d8b310-bdb0-42f3-81de-69b9a0cff12f";

  useEffect(() => {
    const respAPI = async () => {
      await Axios.get(`https://api.thecatapi.com/v1/breeds`, {
        headers: {
          "x-api-key": apiKey,
        },
      }).then(({ data }) => {
        SetData(data);
      });
    };
    respAPI();
  }, []);

  if (Data !== null) {
    return (
      <>
        <BreedsDiv>
          {Data.map((breed) => { 
              console.log(JSON.stringify(breed));
            return  <Breed  key={breed.id} name={breed.name} id={breed.id} /> 
          })}
        </BreedsDiv>
      </>
    );
  } else {
    return (
      <>
        <h2>No se cargaron los datos</h2>
      </>
    );
  }
}

const BreedsDiv = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 8vh;
  flex-direction: row;
  margin-right: 10%;
  margin-left: 10%;
  justify-content: flex-start;
`;

export default Breeds;
