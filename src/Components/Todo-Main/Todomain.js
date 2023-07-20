import React, { useEffect } from "react";

function Todomain() {
  // Function to check if the user is logged in
  const isLoggedIn = () => {
    // Replace "admintoken" with your actual admin token name
    return localStorage.getItem("admintoken") || localStorage.getItem("token");
  };

  useEffect(() => {
    // Check if the user is not logged in, then redirect to login page
    if (!isLoggedIn()) {
      // Replace "/login" with your actual login page route
      window.location.href = "/";
    }
  }, []);

  return (
    <section className="todomain-container">
      {isLoggedIn() === localStorage.getItem("admintoken") ? (
        // Show admin items here
        <div>
          <h2>آیتم‌های ادمین</h2>
          {/* Add your admin items here */}
        </div>
      ) : (
        // Show regular user items here
        <div>
          <h2>آیتم‌های کاربر عادی</h2>
          {/* Add your regular user items here */}
        </div>
      )}
    </section>
  );
}

export default Todomain;
