module.exports = function (sequelize, DataTypes) {
  const lecturer = sequelize.define(
    'lecturers',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      lecturer_no: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );

  lecturer.associate = function (models) {
    lecturer.belongsTo(models.users, { foreignKey: 'user_id' });
  };

  return lecturer;
};
