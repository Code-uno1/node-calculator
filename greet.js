function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("Kahugu", function () {
  console.log("Nice to meet you");
});
