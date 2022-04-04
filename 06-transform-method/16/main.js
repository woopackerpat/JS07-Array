const persons = [
  { name: "John", sex: "M" },
  { name: "Jody", sex: "M" },
  { name: "Susan", sex: "F" },
  { name: "Kate", sex: "F" },
  { name: "Sid", sex: "M" },
];

// persons.reduce((result, item) => {
//   if (item.sex === "M" && result.M !== [] && result.M === undefined) {
//     result.M = [];
//     result.M.push(item.name);
//   } else if (item.sex === "F" && result.F !== [] && result.F === undefined) {
//     result.F = [];
//     result.F.push(item.name)

//   } else if (item.sex === "M") result.M.push(item.name);
//   else result.F.push(item.name);
//   return result;
// }, {});


persons.reduce((result,item) => {
  if (result[item.sex] !== undefined) {
    result[item.sex].push(item.name);
    return result;
  } else {
    result[item.sex] = [];
      result[item.sex].push(item.name);
    return result;
  }
}, {})