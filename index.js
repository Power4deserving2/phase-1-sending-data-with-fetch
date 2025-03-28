// Add your code here
function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configObj)
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        const body = document.querySelector("body");
        const p = document.createElement("p");
        p.textContent = `New User ID: ${object.id}`;
        body.appendChild(p);
      })
      .catch(function (error) {
        const body = document.querySelector("body");
        const p = document.createElement("p");
        p.textContent = `Error: ${error.message}`;
        body.appendChild(p);
      });
  }