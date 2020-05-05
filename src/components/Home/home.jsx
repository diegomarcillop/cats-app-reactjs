import React from "react";
import "./home.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  margin-top: 20px;
  width: 20vh;
  height: 6vh;
  font-weight: 700;
  font-size: 2.8vh;
  outline: none;
  font-family: "Lato", sans-serif;
  color: white;
  border-radius: 100px;
  cursor: pointer;
  border: none;
  background: ${(props) =>
    props.primary ? "linear-gradient(#5244AB, #2B3590)" : "black"};
  transition:  all .8s;
`;

function Home() {
  return (
    <>
    
      <div className="home">
        <div className="content">
          <h1>Find cool things from the best friend </h1>
          <hr />
          <p>
            Find pictures of cats that will brighten your day, you can know
            everything about them.
          </p>
         <Link to="/breeds">
         <Button primary> Start</Button>
         </Link>
        </div>

        <img
        className="img-home"
          src="/img/image2.svg"
          alt="img-home"
          style={{
            width: "70vh",
            paddingRight: "20vh",
            paddingBottom: '12vh'
          }}
        />
      </div>
      
    </>
  );
}
export default Home;
