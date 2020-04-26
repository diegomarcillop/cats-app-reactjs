import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Card from "../components/Card/card";
import Pagination from "../components/Pagination/pagination";

function CatData() {
  const [data, setData] = useState(null);
  const [pagina, setPagina] = useState(1);

  const apiKey = "e5d8b310-bdb0-42f3-81de-69b9a0cff12f";

  useEffect(() => {
    const apiData = async () => {
      await axios
        .get(
          `https://api.thecatapi.com/v1/images/search?limit=30&page=${pagina}&order=Desc`,
          {
            headers: {
              "x-api-key": apiKey,
            },
          }
        )
        .then(({ data }) => {
          setData(data);
        });
    };
    apiData();
  }, [apiKey, pagina]);

  const left = () => {
    if (pagina > 0) {
      setPagina(pagina - 1);
      
    }
  };

  const right = () => {
    setPagina(pagina + 1);
  };

  if (data != null) {
    return (
      <Fragment>
        <div className="cat-list">
          {data.map((cat, index) => {
            return <Card image={cat.url} key={index} />;
          })}
        </div>
        <Pagination left={left} right={right} />
      </Fragment>
    );
  } else {
    return <div>No se cargaron las imagenes</div>;
  }
}

export default CatData;
