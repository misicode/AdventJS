function createFrame(names) {
  const namesLength = names.map(name => name.length);
  const maxLength = Math.max(...namesLength);
  const chain = "*".repeat(maxLength + 4);
  
  const framedNames = names.map(name => "* " + name.padEnd(maxLength) + " *");
  return [chain, ...framedNames, chain].join("\n");
}

module.exports = createFrame;