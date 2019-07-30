const spin = function() {
  let spinString = "|/-\\|/-\\|";

  for (let char in spinString) {
    setTimeout(() => {
      process.stdout.write(`\r${spinString[char]}   `);
    }, 100 + char * 200);
  }
};

spin();
