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
  // Fake WorkSapce
  const [todolist, setTodoList] = useState([
    { id: 1, title: "البرز", description: "توضیحات البرز", tasks: ["کار شماره یک", "کار شماره دو", "کار شماره سه"] },
    { id: 2, title: "استادیو", description: "توضیحات کار دوم", tasks: ["کار شماره یک", "کار شماره دو"] },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  // Fake Task Data & Call
  const tasksDetails = [
    {
      task: "کار شماره یک",
      date: "2023-07-20",
      description: "توضیحات کار شماره یک",
    },
    {
      task: "کار شماره دو",
      date: "2023-07-21",
      description: "توضیحات کار شماره دو",
    },
  ];

  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleTaskBackButtonClick = () => {
    setSelectedTask(null);
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
              <div className="todo__lists__styles">
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.description}</p>
                <div className="todo__tasks__sty">
                  {selectedItem.tasks.map((task, index) => (
                    <label key={index} onClick={() => handleTaskClick(task)}>
                      {task}
                    </label>
                  ))}
                </div>
                {selectedTask ? (
                  <div className="todo__tasks__infos">
                    <div className="todo__tasks__name">
                      <p>
                        نام تسک :
                      </p>
                      <label>
                        {selectedTask}
                      </label>
                    </div>
                    {tasksDetails.map((taskDetail) => {
                      if (taskDetail.task === selectedTask) {
                        return (
                          <div className="todo__tasks__items__info" key={taskDetail.task}>
                            <div className="todo__tasks__date">
                              <p>تاریخ از: {taskDetail.date}</p>
                              <p>تاریخ تا: {taskDetail.date}</p>
                            </div>
                            <p>توضیحات: {taskDetail.description}</p>
                          </div>
                        );
                      }
                      return null;
                    })}
                    <button onClick={handleTaskBackButtonClick}>بازگشت</button>
                  </div>
                ) : (
                  <div>
                    <p>یک تسک انتخاب کنید</p>
                  </div>
                )}
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
                <ul>
                  {selectedItem.tasks.map((task, index) => (
                    <li key={index} onClick={() => handleTaskClick(task)}>
                      {task}
                    </li>
                  ))}
                </ul>
                {selectedTask ? (
                  <div>
                    <h3>{selectedTask}</h3>
                    {tasksDetails.map((taskDetail) => {
                      if (taskDetail.task === selectedTask) {
                        return (
                          <div key={taskDetail.task}>
                            <p>تاریخ: {taskDetail.date}</p>
                            <p>توضیحات: {taskDetail.description}</p>
                          </div>
                        );
                      }
                      return null;
                    })}
                    <button onClick={handleTaskBackButtonClick}>بازگشت به تسک‌ها</button>
                  </div>
                ) : (
                  <div>
                    <p>یک تسک انتخاب کنید</p>
                  </div>
                )}
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