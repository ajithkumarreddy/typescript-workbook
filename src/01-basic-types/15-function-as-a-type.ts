// function as a type
const logMsg = (msg: string): void => {
  console.log(msg);
};

function performJob(cb: (msg: string) => void) {
  cb("Job done!");
}

performJob(logMsg);

// function as a type in objects
type User = {
  name: string;
  age: number;
  greet: () => string;
};
