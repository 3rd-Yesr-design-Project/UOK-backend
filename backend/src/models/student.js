module.exports = function (sequelize, DataTypes) {
  const student = sequelize.define('students', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    student_no: {
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
  });

  student.associate = function (models) {
    student.belongsToMany(models.subjects, {
      through: 'student_subjects',
      as: 'students',
      foreignKey: 'student_id',
    });
    student.belongsTo(models.users, { foreignKey: 'user_id' });
  };

  return student;
};
