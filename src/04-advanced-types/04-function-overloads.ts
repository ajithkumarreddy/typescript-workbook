// function overloads

function getLength(val: string): string;
function getLength(val: any[]): number;
function getLength(val: string | any[]) {
  if (typeof val === "string") {
    const numberOfWords = val.split(" ").length;
    return `${numberOfWords} words`;
  }

  return val.length;
}

const numberOfWords = getLength("Hello world!");
numberOfWords.length; // No error since a return type string is properly known
const numberOfItems = getLength(["abc", "def"]);
