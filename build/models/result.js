'use strict';

module.exports = function (sequelize, DataTypes) {
  var result = sequelize.define('results', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    academic_year: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    result: {
      type: DataTypes.STRING(2),
      allowNull: true
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

  result.associate = function (models) {
    result.belongsTo(models.students, { foreignKey: 'student_id' });
    result.belongsTo(models.subjects, { foreignKey: 'subject_id' });
  };

  return result;
};