'use strict';

module.exports = function (sequelize, DataTypes) {
  var subject = sequelize.define('subjects', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    subject_code: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    semester: {
      type: DataTypes.INTEGER,
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

  subject.associate = function (models) {
    // subject.belongsToMany(models.students, {
    //   through: 'results',
    //   // as: 'students',
    //   // foreignKey: 'subject_id',
    // });
    subject.hasMany(models.results, { foreignKey: 'subject_id' });
  };

  return subject;
};