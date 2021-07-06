function optionsGenerator(max) {
  const options = [];
  for (let i = 0; i < max; i++) {
    options[i] = { value: i + 1, label: i + 1 };
  }

  return options;
}

export default optionsGenerator;
