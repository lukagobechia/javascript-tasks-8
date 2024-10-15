function handleClick(event) {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const tel = document.querySelector("#tel").value;

    const user = {
        name: name,
        email: email,
        tel: tel
    };

    localStorage.setItem('user', JSON.stringify(user));
}
