import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [allData, setAllData] = useState([]);
  const [showActive, setShowActive] = useState([]);
  const [showCompleted, setShowCompleted] = useState([]);
  const statusOrder = ["active", "completed", "all"];

  const handleClick = (val) => {
    setShow(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const status = e.target.status.value;
    const inputInfo = { name: name, status: status };
    const newData = [...allData, inputInfo];
    setAllData(newData);
  };
  // console.log(allData);
  const active = allData.filter((data) => data.status === "active");
  const completed = allData.filter((data) => data.status === "completed");
  //   console.log(completed);

  const sortedData = [...allData].sort(
    (a, b) => statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status)
  );

  //   console.log(sortedData);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                name="status"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* All data */}
              {show === "all" &&
                sortedData.map((data, i) => (
                  <tr key={i}>
                    <td>{data.name}</td>
                    <td>{data.status}</td>
                  </tr>
                ))}
              {/* Active Data */}
              {show === "active" &&
                active.map((data, i) => (
                  <tr key={i}>
                    <td>{data.name}</td>
                    <td>{data.status}</td>
                  </tr>
                ))}
              {/* Completed Data */}
              {show === "completed" &&
                completed.map((data, i) => (
                  <tr key={i}>
                    <td>{data.name}</td>
                    <td>{data.status}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
