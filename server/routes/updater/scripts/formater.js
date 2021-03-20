const format = (str) => {
  let temp = "";
  temp += str;
  temp = temp

    .replace(/’/g, "")
    .replace(/'/g, "")
    //.replace(/TM/g, "") HITMAN
    .replace(/\s&\s/g, "-")
    .replace(/\s-\s/g, "-")
    .replace(/\s/g, "-")
    .replace(/:/g, "")
    .replace(/!/g, "")
    .replace("()", "")
    .replace(/\(/g, "")
    .replace(/\)/g, "")
    .replace(/®/g, "")
    .replace(/™/g, "")
    .replace(/™$/g, "-")
    .replace("_", "-")
    .replace(/---/g, "-")
    .replace(/--/g, "-");

  return temp.toLowerCase();
};

module.exports.format = format;
