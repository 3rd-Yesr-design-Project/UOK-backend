'use strict';

module.exports = function (sequelize, DataTypes) {
  var profile = sequelize.define('profiles', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    profile_url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    gender: {
      type: DataTypes.ENUM('male', 'female'),
      allowNull: false
    },
    language: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    religioun: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    working_place: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    school: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    university: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    home_town: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    current_city: {
      type: DataTypes.STRING(200),
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

  profile.associate = function (models) {
    profile.belongsTo(models.users, { foreignKey: 'user_id' });
  };

  return profile;
};