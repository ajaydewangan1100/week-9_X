interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
}

function isLegal2(user: User): boolean {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

isLegal2({ firstName: "AJay", lastName: "Dewangan", age: 24 });

function greet2(user: User) {
  console.log("Hellow, ", user.firstName);
}
