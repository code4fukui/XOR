const convertXOR = (data, pass) => {
  for (let i = 0; i < data.length; i++) {
    data[i] ^= pass[i % pass.length];
  }
  return data;
};

export const XOR = {
  convert: convertXOR,
};
