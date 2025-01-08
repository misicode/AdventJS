function findInAgenda(agenda, phone) {
  const lines = agenda.split("\n");
  const list = lines.filter(line => line.includes(phone));

  if(list.length === 1) {
    const kid = list[0];
    const name = kid
      .slice(kid.indexOf("<") + 1, kid.indexOf(">"));
    const address = kid
      .replace(`<${name}>`, " ")
      .split(" ")
      .filter(e => !e.includes("+"))
      .join(" ")
      .trim();

    return { name, address };
  }

  return null;
}

module.exports = findInAgenda;