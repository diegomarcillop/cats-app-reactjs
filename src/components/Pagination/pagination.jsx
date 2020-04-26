import React, { useEffect } from "react";
import "./pagination.css";
import { Link } from "react-router-dom";

function Pagination({ page }) {
  
  const btn = React.useRef();

  useEffect(() => {
    if(page === 0){
      btn.current.disabled = true;
    }
  })

  const onClick = () => {
 
    document.getElementById("cat-list").scrollIntoView({behavior: 'smooth'});
  }

  return (
    <>
      <div className="pagination">
          <Link
           
            to={() => { 
              return `/${Math.abs(parseInt(page)-1) }`;
            }}
          >
            <button className="left" ref={btn} onClick={onClick} type="button"  >
              <i className="fas fa-angle-left"></i>
            </button>
          </Link>
            
        <Link
          to={() => {
            return `/${parseInt(page) + 1}`;
          }}
        >
          <button className="right"  onClick={onClick}>
            <i className="fas fa-angle-right"></i>
          </button>
        </Link>
      </div>
    </>
  );
}
export default Pagination;
