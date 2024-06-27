import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
// frist time mattum dhan iruku whenever ever refresh we will   get it from local storage
const getLocalStorage = () => {
  // let list = localStorage.getItem("list");
  let data = localStorage.getItem("data");

  // if (list) {
  if (data) {
    // string to object or array
    // return (list = JSON.parse(localStorage.getItem("list")));
    return (data = JSON.parse(localStorage.getItem("data")));
  } else {
    return [];
  }
};
function App() {
  const [name, setName] = useState("");
  // frist time list will be [] because  getLocalstoragre return []
  // const [list, setList] = useState(getLocalStorage());
  const [data, setData] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  // alert is inlalized to object show will be false ,msg will be empty string...
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    // in the case frist there will be no value once add it will go else part
    // empty name
    if (!name) {
      showAlert(true, "danger", "please enter value");
      // after adding name
    } else if (name && isEditing) {
      setData(
        data.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      // showAlert(true, "success", "item added to the list ");
      showAlert(true, "success", "successfully added the item to list ");
      // new Date().getTime().toString() getTime() millsecond  to generate unqie id
      const newItem = { id: new Date().getTime().toString(), title: name };

      setData([...data, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    // value get changed to true , success,item add
    setAlert({ show, type, msg });
  };
  // clearList
  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setData([]);
  };
  // list component
  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setData(data.filter((item) => item.id !== id));
  };
  // list component
  const editItem = (id) => {
    const specificItem = data.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  useEffect(() => {
    // object to string
    // localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} data={data} />}

        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            // it will be empty
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {data.length > 0 && (
        <div className="grocery-container">
          <List items={data} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
