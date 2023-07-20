import React, { useEffect, useState } from "react";

// Styles Import
import './Assets/Styles/Todomain.css';
// Import Images & Videos 
import Emptyimage from './Assets/Images/emptyimage.jpg';
function Todomain() {
  // Function to check if the user is logged in
  const isLoggedIn = () => {
    return localStorage.getItem("admintoken") || localStorage.getItem("token");
  };

  // useEffect(() => {
  //   // Check if the user is not logged in, then redirect to login page
  //   if (!isLoggedIn()) {
  //     // Replace "/login" with your actual login page route
  //     window.location.href = "/";
  //   }
  // }, []);
  // ToDo Api Call Function
  const [todolist, setTodoList] = useState([
    { id: 1, title: "کار اول", description: "توضیحات کار اول" },
    { id: 2, title: "کار دوم", description: "توضیحات کار دوم" },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <section className="todomain-container">
      {isLoggedIn() === localStorage.getItem("admintoken") ? (
        <section className="todo__lists__info">
          {todolist.length === 0 ? (
            <div className="empty__style">
              <img src={Emptyimage} alt="Empty List" className="empty__image" />
            </div>
          ) : (
            <div className="todo__lists">
              {todolist.map((item) => (
                <div
                  key={item.id}
                  className={`todo__list__item ${selectedItem === item ? "active" : ""}`}
                  onClick={() => handleItemClick(item)}
                >
                  {item.title}
                </div>
              ))}
            </div>
          )}
          <div className="todo__list__items">
            {selectedItem ? (
              <div>
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.description}</p>
              </div>
            ) : (
              <div>
                <p>یک آیتم انتخاب کنید</p>
              </div>
            )}
          </div>
          <div className="todo__add__btn">+</div>
        </section>
      ) : (
        <section className="todo__lists__info">
          {todolist.length === 0 ? (
            <div className="empty__style">
              <img src={Emptyimage} alt="Empty List" className="empty__image" />
            </div>
          ) : (
            <div className="todo__lists">
              {todolist.map((item) => (
                <div
                  key={item.id}
                  className={`todo__list__item ${selectedItem === item ? "active" : ""}`}
                  onClick={() => handleItemClick(item)}
                >
                  {item.title}
                </div>
              ))}
            </div>
          )}
          <div className="todo__list__items">
            {selectedItem ? (
              <div>
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.description}</p>
              </div>
            ) : (
              <div>
                <p>یک آیتم انتخاب کنید</p>
              </div>
            )}
          </div>
        </section>
      )}
    </section>
  );
}

export default Todomain;