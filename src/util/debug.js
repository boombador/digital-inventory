export const logAndReturn = x => {
  console.log(x);
  return x;
};

export const logWithLabelAndReturn = label => x => {
  console.log(`${label}: ${x}`);
  return x;
};
