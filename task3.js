function GeNumber(phone) {
    const regex = /^5\d{2}-\d{2}-\d{2}-\d{2}$/;
    console.log(regex.test(phone));
}

GeNumber('698-45-45-45');
