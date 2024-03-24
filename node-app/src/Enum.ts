enum Direction {
  Up,
  Down,
  Left,
  Right,
}
// bydefault value of enum like this - 0, 1, 2, 3....
function doSomething(keyPressed: Direction) {
  // do something.
  if (keyPressed == Direction.Up) {
    console.log("Pressed Up");
  }
}

// can give directly value also
enum Direction2 {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}
function doSomething2(keyPressed: Direction2) {
  // do something.
  if (keyPressed == Direction2.Down) {
    console.log("Pressed Up");
  }
}

doSomething(Direction.Up);
doSomething2(Direction2.Down);
console.log(Direction.Up);
