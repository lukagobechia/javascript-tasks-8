function GeNumber(phone) {
    const regex = /^598-\d{2}-\d{2}-\d{2}$/;
    console.log(regex.test(phone))
}
GeNumber('598-45-45-45')