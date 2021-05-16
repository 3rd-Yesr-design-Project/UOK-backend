module.exports = function (sequelize, DataTypes) {
  const friend = sequelize.define(
    'friends',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      friend_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(50),
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
      updatedAT: 'updated_at',
    }
  );

  friend.associate = function (models) {
    friend.belongsTo(models.users, { foreignKey: 'user_id' });
    friend.belongsTo(models.users, { foreignKey: 'friend_id' });
  };

  return friend;
};
