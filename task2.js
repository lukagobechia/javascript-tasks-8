function isvalidDate(date) {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    console.log(regex.test(date)) ;
}
isvalidDate("01/01/2000")