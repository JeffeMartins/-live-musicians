module.exports = parseStringArray = (arrayAsString) =>{
    return arrayAsString.split(",").map(tech => tech.trim());
}
