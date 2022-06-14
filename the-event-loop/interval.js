let count = 3;
const countDownID = setInterval(() => {
  if (count === 0) {
    console.log("Blast off!");
    clearInterval(countDownID);
  } else {
    console.log(count);
    count--;
  }
}, 1000);
