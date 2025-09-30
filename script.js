document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  if (!title || !author || !isbn) {
    alert("Please fill in all fields");
    return;
  }

  const tbody = document.querySelector("table tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td class="book-list">${title}</td>
    <td class="book-list">${author}</td>
    <td class="book-list">${isbn}</td>
    <td class="book-list">
      <button type="button" class="delete" style="background-color:red; color:white;">X</button>
    </td>
  `;

  tbody.appendChild(row);

  // Clear input fields
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";

  // Attach delete event to THIS row's button
  row.querySelector(".delete").addEventListener("click", () => {
    tbody.innerHTML="";
  });
});
