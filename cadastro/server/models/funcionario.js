module.exports = (sequelize, Sequelize) => {
  const Funcionario = sequelize.define('Funcionario', {
    nome: Sequelize.STRING(200),
  }, { tableName: 'funcionario' });
  Funcionario.associate = (models) => {
    Funcionario.belongsToMany(models.Departamento, {
      through: 'DepartamentoFuncionario',
      as: 'departamentos',
      foreignKey: 'funcionarioId'
    });
  };
  return Funcionario;
}