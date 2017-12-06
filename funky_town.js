function fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function gcd(a, b) {//Dijkstra's Algorithm
  if (a == b) {
    return a;
  }
  if (a > b) {
    return gcd(a-b, b);
  }
  return gcd(a, b-a);
}

var students = ["Jeff", "Jerry", "John", "Jason", "Jackie", "Jasmine", "Jeorge"]

function randomStudent() {
  return students[Math.floor(Math.random() * students.length)]
}
