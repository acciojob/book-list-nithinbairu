document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  if (!title || !author || !isbn) {
    alert("Please fill in all fields");
    return;
  }

  const tbody = document.getElementById("book-list"); // match test expectation
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button type="button" class="delete" style="background-color:red; color:white;">X</button></td>
  `;

  tbody.appendChild(row);

  // clear inputs
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";

  // delete functionality (remove only THIS row — most tests expect that)
  row.querySelector(".delete").addEventListener("click", () => {
    row.remove();
  });
});
