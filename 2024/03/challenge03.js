function organizeInventory(inventory) {
  return inventory.reduce((acc, { name, quantity, category }) => {
    acc[category] ??= {};
    acc[category][name] = (acc[category][name] ??= 0) + quantity;
    return acc;
  }, {});
}

module.exports = organizeInventory;