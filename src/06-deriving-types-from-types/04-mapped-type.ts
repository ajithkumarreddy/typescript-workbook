// mapped type

type Operations = {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
};

type Results<T> = {
  readonly [Key in keyof T]?: number
}

let mathOperations: Operations = {
  add(a: number, b: number) {
    return a + b;
  },
  subtract(a: number, b: number) {
    return a - b;
  },
};

let mathResults: Results<Operations> = {
    add: mathOperations.add(2, 4),
    subtract: mathOperations.subtract(3, 1),
}