
function loginUser(event) {
  event.preventDefault(); 

  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  if (email && password) {
    
    window.location.href = "dashboard.html"; 
  } else {
    alert("Please fill all fields");
  }
}
