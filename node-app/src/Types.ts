type User2 = {
  name: string;
  age: number;
  married: boolean;
};

function printName({ name = "Ajay", age = 24, married = false }: User2) {
  console.log(`Name is ${name}`);
}
