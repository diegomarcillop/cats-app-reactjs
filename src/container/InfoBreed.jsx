import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Axios from "axios";

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  height: 80vh;
  flex-direction: row;
  margin: 30px 0px 0px 0px;
  justify-content: center;
  background-color: #f6f3ff;
`;

const Container = styled.div`
  width: 100%;
  height: 98vh;
  display: flex;
  flex-direction: row;
  justify-content: center; 
  background-color: rgb(255, 255, 255);

  background-image: url("/img/vector1.png");
  background-position: center bottom;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  width: 50%;
`;

function InfoBreed() {
  const { id } = useParams();

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
        console.log(data[0].breeds[0].name);
        setBreed(data[0]);
      });
    };
    RespAPI();
  }, [id, apiKey]);

  if (breed !== null) {
    return (
      <>
        <Container>
          <Card>
            <Content></Content>
            <img
              src={breed.url}
              style={{
                width: "50%",
              }}
              alt="img-info"
            />
          </Card>
        </Container>
      </>
    );
  }
}

export default InfoBreed;
