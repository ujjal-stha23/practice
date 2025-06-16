function sayHello() {
  let firstName = prompt("enter your first name");
  let lastName = prompt("enter your last name");
  let age = prompt("enter your age");
  let eligibility = (age) =>
    age > 18 ? "Your are eligible" : "You are not eligible";

  console.log(`Hello ${firstName} ${lastName}, ${eligibility(age)}
    `);
}
