let allUsers = [];
  const userList = document.getElementById("user-list")

const renderUsers = (users) => {
  userList.innerHTML = "";
  users.forEach((i) => {
    const { name } = i;
    userList.innerHTML += `
    <li>
    <h2>${name}</h2>
    </li>
    `;
  });
};
const searchField = document.getElementById("search-inp");
searchField.addEventListener("input", (e) => {
  const val = e.target.value;
  const filteredUsers = allUsers.filter((i) => {
    return i.name.toLowerCase().includes(val.toLowerCase());
  });
  if (filteredUsers.length === 0) {
    userList.innerHTML = `<h1>no results bro</h1>`
  } else {
    renderUsers(filteredUsers);
  }
});
const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    allUsers = data;
    renderUsers(allUsers);
    console.log("data:", data);
  } catch (error) {
    console.log(error);
  }
};
fetchUsers();
