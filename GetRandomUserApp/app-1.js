// The task is to create a webpage that displays random user data, including
//! the user's title, first name, last name, email, phone, and thumbnail image, within a framed container.

const userContainer = document.querySelector(".container");

const getUser = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const { results } = await response.json();

  console.log(results);
  showUser(results);
};

getUser();

const showUser = (users) => {
  const card = document.createElement("div");

  users.forEach((user) => {
    console.log(user);
    card.classList.add("card");

    card.innerHTML = `
    <img src="${user.picture.large}" alt="User Image" class="user-image">
              
              <ul>
                  <li>User: ${user.name.title} ${user.name.first} ${user.name.last}</li>
                  <li>E-mail:${user.email} </li>
                  <li>Phone:${user.phone} </li>
              </ul>
              
              <img src="${user.picture.thumbnail}" alt="thumbnail image">
    `;
  });
  userContainer.appendChild(card);
};
