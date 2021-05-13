'use strict';

module.exports = function (sequelize, DataTypes) {
  var user = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    user_type: {
      type: DataTypes.ENUM('lecturer', 'demo', 'student'),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: true
  });

  user.associate = function (models) {
    user.hasMany(models.comments, { foreignKey: 'user_id' });
    user.hasMany(models.likes, { foreignKey: 'user_id' });
    user.hasMany(models.posts, { foreignKey: 'user_id' });
    user.hasOne(models.profiles, { foreignKey: 'user_id' });
    user.hasOne(models.students, { foreignKey: 'user_id' });
    user.hasOne(models.lecturers, { foreignKey: 'user_id' });
  };

  return user;
};