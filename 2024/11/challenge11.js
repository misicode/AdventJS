function decodeFilename(filename) {
  const firstIdx = filename.indexOf("_");
  const lastIdx = filename.lastIndexOf(".");

  return filename.slice(firstIdx + 1, lastIdx);
}

module.exports = decodeFilename;