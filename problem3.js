function names(data) {
  return data.data.map(function (user) {
    return user.name.join(" ");
  });
}

module.exports = names;
