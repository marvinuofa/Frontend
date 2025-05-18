function validatePassword() {
    const password = document.getElementById("password").value;
    let regex = /^[a-zA-Z]{8,20}$/;

    if (regex.test(password)) {
        alert("Logging in...");
    } else {
        alert(`${password} is invalid`);
    }
}
