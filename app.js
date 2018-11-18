function setDate() {
    const now = new Date();
    const second = now.getSeconds();
    console.log(second)
}

setInterval(setDate, 1000);