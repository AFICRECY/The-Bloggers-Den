const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#project-name").value.trim();
  const content = document.querySelector("#project-desc").value.trim();

  if (title && content) {
    const response = await fetch(`/api/projects`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create project");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete project");
    }
  }
};

const updateButtonHandler = async (event) => {
  const title = document.querySelector("#project-title").value.trim();
  const content = document.querySelector("#project-content").value.trim();
  const comment = document.querySelector("#project-comment").value.trim();
  

  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    const response = await fetch(`/api/projects/${id}`, {
      method: "POST",
      body: JSON.stringify({ title, content ,comment}),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to update project");
    }
  }
};

const addCommentField = (event) => {
  const commentBox = document.querySelector(".comment-box");
  commentBox.classList.remove("comment-box");
};

document
  .querySelector(".new-project-form")
  .addEventListener("submit", newFormHandler);

// document
//   .querySelector("#delete-project")
//   .addEventListener("click", delButtonHandler);

// document
//   .querySelector("#update-project")
//   .addEventListener("click", updateButtonHandler);
