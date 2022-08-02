import React from "react";

export default function Info() {
  return (
    <>
      <img src="images/profile.jpg" alt="Profile" />
      <h1>Angela Young</h1>
      <h2>Software Engineer</h2>
      <h3>angelamyoung.com</h3>
      <div id="social-btns">
        <button type="button">
          <a href="mailto: youngang@umich.edu">Email</a>
        </button>
        <button type="button">
          <a href="https://www.linkedin.com/in/angela-young-588b39180/">
            LinkedIn
          </a>
        </button>
      </div>
    </>
  );
}
