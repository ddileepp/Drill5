function groupByRole(dataArray) {
  if (!Array.isArray(dataArray)) {
    throw new Error("Expected an array of employees");
  }

  var acc = {};

  for (var i = 0; i < dataArray.length; i++) {
    var emp = dataArray[i];
    var role = emp.hr[0];
    var name = emp.name.join(" ");

    if (!acc[role]) {
      acc[role] = [];
    }
    acc[role].push(name);
  }

  return acc;
}

module.exports = groupByRole;

