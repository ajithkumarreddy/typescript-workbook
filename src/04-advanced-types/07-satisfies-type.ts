// satisfies type

const dataEntries = {
  entry1: 0.51,
  entry2: -1.23,
} satisfies Record<string, number>;

// ...

dataEntries.entry1;
//dataEntries.entry3 // can't be accessed strict check
