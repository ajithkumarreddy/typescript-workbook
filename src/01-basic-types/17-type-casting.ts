// type casting
const inputEle = document.getElementById(
  "user-name"
) as HTMLInputElement | null;

if (!inputEle) {
  throw new Error("Element not found!");
}

console.log(inputEle?.value);
