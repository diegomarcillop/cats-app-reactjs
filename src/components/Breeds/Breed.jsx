import React, { useState, useEffect, Suspense } from "react";
import styled from "styled-components";
import Axios from "axios";
import { Link } from "react-router-dom";

function Breed({ name, id }) {
  const apiKey = "e5d8b310-bdb0-42f3-81de-69b9a0cff12f";
  const [breed, setBreed] = useState({});

  useEffect(() => {
    const RespAPI = async () => {
      await Axios.get(
        `https://api.thecatapi.com/v1/images/search?breed_id=${id}`,
        {
          headers: {
            "x-api-key": apiKey,
          },
        }
      ).then(({ data }) => {
        setBreed(data[0]);
      });
    };
    RespAPI();
  }, [id, apiKey]);

  return (
    <>
      <Link to={ 
        () => {
           return `/info/${id}` 
        }
       }>
        <BreedDiv>
         <Suspense fallback={<h1>Loading profile...</h1>}>
         {breed.url !== undefined ? (
            <img
              className="img-cat"
              src={breed.url}
              alt="img-cat"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                cursor: "pointer",
                boxShadow: "1px 0px 9px 6px rgba(163,163,163,0.37)",
                borderRadius: "10px 10px 10px 10px",
              }}
            />
          ) : (
            <img
              className="img-cat"
              src="/img/nuevo.png"
              alt="img-cat"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                cursor: "pointer",
                boxShadow: "1px 0px 9px 6px rgba(163,163,163,0.37)",
                borderRadius: "10px 10px 10px 10px",
              }}
            />
          )}
         </Suspense>

          <div className="overlay">
            <Title>{name}</Title>
          </div>
        </BreedDiv>
      </Link>
    </>
  );
}

const BreedDiv = styled.div`
  position: relative;
  width: 28vh;
  height: 30vh;
  margin: 10px 0px 10px 20px;
`;

const Title = styled.h2`
  font-family: "Lato", sans-serif;
  color: white;
  font-size: 2.6vh;
  padding: 4px;
  white-space: nowrap;
`;

export default Breed;
