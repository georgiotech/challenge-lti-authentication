module.exports = function(sequelize, DataTypes, metamodels) {
  const Book = sequelize.define("Book", {
    isbn: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  });

  return Book;
};
