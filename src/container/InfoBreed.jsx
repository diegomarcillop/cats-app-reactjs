import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Axios from "axios";

const Col = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f3ecff;
  border-radius: 20px;
  margin-top: 20px;
  padding: 4px 2px 4px 2px;
  width: 14vh;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: Row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  height: 96vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  background-color: rgb(255, 255, 255);

  background-image: url("/img/vector1.png");
  background-position: center bottom;
  background-size: contain;
  background-repeat: no-repeat;
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
        setBreed({
          image: data[0].url,
          breed: data[0].breeds[0],
        });
      });
    };
    RespAPI();
  }, [id, apiKey]);

  if (breed !== null && breed.breed !== undefined) {
    return (
      <>
        <Container>
          <Card>
            <Content>
              <h1>{breed.breed.name}</h1>
              <br />
              <hr />
              <p className="text-breed">{breed.breed.description}</p>

              <Row>
                <Col>
                  <h2>Origin</h2>
                  <p className="text-breed2">{breed.breed.origin}</p>
                </Col>

                <Col>
                  <h2>Life Span</h2>
                  <p className="text-breed2">{breed.breed.life_span}</p>
                </Col>

                <Col>
                  <h2>Adaptability</h2>
                  <p className="text-breed2">{breed.breed.adaptability}/5</p>
                </Col>
                <Col>
                  <h2>Energy</h2>
                  <p className="text-breed2">{breed.breed.energy_level}/5</p>
                </Col>

                <Col>
                  <h2>Intelligence</h2>
                  <p className="text-breed2">{breed.breed.intelligence}/5</p>
                </Col>
              </Row>
            </Content>
            <img
              src={breed.image}
              style={{
                width: "70vh",
                whiteSpace: "nowrap",
              }}
              alt="img-info"
            />
          </Card>
        </Container>
      </>
    );
  } else {
    return (
      <div>
        <p>No se cargaron los datos</p>
      </div>
    );
  }
}

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  height: 60vh;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f6f3ff;
  margin: 4vh 20vh 20vh 30vh;
  box-shadow: 2px 9px 32px 5px rgba(0, 0, 0, 0.24);
`;

const Content = styled.div`
  flex-direction: row;
  width: 60vh;
  flex-wrap: wrap;
  padding-left: 40px;
  padding-top: 40px;
`;

export default InfoBreed;
