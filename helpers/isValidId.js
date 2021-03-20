const isValidId = (id) => {
  const hex24 = /^[0-9A-Fa-f]{24}$/g;

  return (hex24.test(id))
}

module.exports = isValidId