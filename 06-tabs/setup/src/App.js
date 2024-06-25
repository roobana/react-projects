import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "react-tabs-project";
function App() {
  const [role, setRole] = useState([]);
  const [company, setCompany] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setRole(data);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())

      .then((data) => {
        setRole(data);
      });
  }, []);
  const handleClick = (companyName) => {
    setCompany(companyName);
  };
  return (
    <div className="jobs-center">
      <div className="btn-container">
        {role.map((com) => {
          return (
            <button
              className="job-btn   "
              key={com.id}
              onClick={() => handleClick(com.company)}
            >
              {com.company}
            </button>
          );
        })}{" "}
      </div>

      {company && (
        <div>
          <h3>{company}</h3>
          {role.map((comp) =>
            comp.company === company ? (
              <div className="job-info">
                <h4>{comp.title}</h4>
                <p className="job-date">{comp.dates}</p>

                {comp.duties.map((val, index) => {
                  return (
                    <div className="job-desc">
                      <FaAngleDoubleRight />
                      <p>{val}</p>
                    </div>
                  );
                })}
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
}

export default App;
