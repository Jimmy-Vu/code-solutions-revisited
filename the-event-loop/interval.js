let count = 3;
const intervalID = setInterval(() => {
  if (count === 0) {
    console.log("Blast off!");
    clearInterval(intervalID);
  } else {
    console.log(count);
    count--;
  }
}, 1000);
