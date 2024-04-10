const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const user = { email, password };
    console.log(user);
    form.reset();
  }
}
