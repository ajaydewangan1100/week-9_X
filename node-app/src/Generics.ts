// Problem -------
// function getFirstElement(arr: (string | number)[]) {
//     return arr[0];
// }

// const el = getFirstElement([1, 2, 3]);

// Solutions by generics -
function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase());
