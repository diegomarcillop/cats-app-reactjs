import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Card from "../components/Card/card";
import Pagination from "../components/Pagination/pagination";
import { useParams } from "react-router-dom";

function CatData() {
  const [data, setData] = useState(null);
  let { page } = useParams();
  const apiKey = "e5d8b310-bdb0-42f3-81de-69b9a0cff12f";

  useEffect(() => {
    const apiData = async () => {
      await axios
        .get(
          `https://api.thecatapi.com/v1/images/search?limit=30&page=${page}&order=Desc`,
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
  }, [apiKey, page]);

  if (data != null) {
   page =  page === undefined ? 0: page;
    
    return (
      <Fragment>
        <div className="cat-list" id="cat-list">
          {data.map((cat, index) => {
            return <Card image={cat.url} key={index} />;
          })}
        </div>
        {<Pagination page={page} />}
      </Fragment>
    );
  } else {
    return <div>No se cargaron las imagenes</div>;
  }
}

export default CatData;
