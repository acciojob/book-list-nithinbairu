//your JS code here. If required.

document.getElementById("submit").addEventListener("click", (e) => {
	e.preventDefault();
	const title=document.getElementById("title").value;
	const author=document.getElementById("author").value;
	const isbn=document.getElementById("isbn").value;

	if (!title || !author || !isbn) {
	    alert("Please fill in all fields");
	    return;
  }

	const tbody=document.querySelector("table tbody");
	const row=document.createElement("tr");

	row.innerHTML=`
	<td id="book-list">${title}</td>
	<td id="book-list">${author}</td>
	<td id="book-list">${isbn}</td>
	<td id="book-list"><button type="button" style="background-color:red" class="delete" >X</button></td>
	`;
	tbody.appendChild(row);
	document.getElementById("title").value = "";
document.getElementById("author").value = "";
document.getElementById("isbn").value = "";

	document.querySelector(".delete").addEventListener("click",()=>{
		row.remove();
	})	
});
