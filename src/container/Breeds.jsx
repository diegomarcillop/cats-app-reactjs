import React from "react";
import styled from "styled-components";
import Breed from "../components/Breeds/Breed";
import { breeds } from "./breedsData";

function Breeds() {
  return (
    <>
      <BreedsDiv>
        {breeds.map((breed) => { 
          return <Breed key={breed.id} name={breed.name} id={breed.id} />;
        })}
      </BreedsDiv>
    </>
  );
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
