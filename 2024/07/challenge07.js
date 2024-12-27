function fixPackages(packages) {
  let idxStart = packages.lastIndexOf("(");
  let idxEnd = packages.indexOf(")", idxStart);

  while(idxStart !== -1 && idxEnd !== -1) {
    const part = packages.substring(idxStart + 1, idxEnd).split("").reverse().join("");

    packages = packages.replace(packages.substring(idxStart, idxEnd + 1), part);
    
    idxStart = packages.lastIndexOf("(");
    idxEnd = packages.indexOf(")", idxStart);
  }

  return packages;
}

module.exports = fixPackages;