function drawTable(data) {
  const keys = Object.keys(data[0]);
  const lengths = keys.map(
    key => Math.max(
      key.length,
      ...data.map(item => item[key].toString().length)
    )
  );
  
  const line = "+" + lengths.map(l => "-".repeat(l + 2)).join("+") + "+";

  const title = "| " +
    keys.map((key, i) => 
      key.charAt(0).toUpperCase() +
      key.slice(1).padEnd(lengths[i])
    ).join("| ") + "|";

  const body = data.map(item => "| " +
    keys.map(
      (key, i) => item[key]
        .toString()
        .padEnd(lengths[i]))
        .join(" | ") + " |"
  );

  return [line, title, line, ...body, line].join("\n");
}

module.exports = drawTable;