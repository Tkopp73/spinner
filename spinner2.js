let spinning = (amount) => {
  let arr = ['\r|', '\r/', '\r-', '\r\\' ];
  let delay = 200;
  let amt = amount;
  for (let x = 0; x < amt; x++) {
    for (let y = 0; y < 4; y++) {
      setTimeout(() => {
          process.stdout.write(arr[y] + "  ");
      }, delay);
      delay += 200;
    }
  }
  setTimeout(() => {
    console.log('\n')
  }, (delay += 50));
};

spinning(5);
