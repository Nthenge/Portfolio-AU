import React from "react";

function Preloader(){
    return(
        <div className="preloader" ref="preloader">
          <div className="preloader-content">
            <div className="logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 199">
                <path d="M0.720001 8.91999V0.855993H58.32L169.488 190.648V199H112.176L0.720001 8.91999ZM114.768 73.144V0.855993H169.488V166.744L114.768 73.144ZM0.720001 32.824L55.44 126.424V199H0.720001V32.824Z" />
              </svg>
            </div>
            <div className="loading-bar">
              <span className="loading-bar-progress"></span>
            </div>
          </div>
        </div>
    )
}

export default Preloader;