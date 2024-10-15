const  validateEmail = () =>  {
    const regex = /^[a-zA-Z0-9._%+-]+@example\.com$/;
    console.log(regex.test("uka@e.com"));
}
validateEmail()