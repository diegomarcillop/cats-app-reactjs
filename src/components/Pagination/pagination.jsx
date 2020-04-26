import React from "react";
import './pagination.css'

function Pagination({left, right}) {
  return (
    <>
      <div className="pagination">
        <button className="left" onClick={left}><i className="fas fa-angle-left"></i></button>
        <button className="right" onClick={right} ><i className="fas fa-angle-right"></i></button>
      </div>
    </>
  );
}
export default Pagination;
