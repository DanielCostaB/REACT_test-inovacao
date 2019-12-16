module.exports = (sequelize, Sequelize) => {
  const Departamento = sequelize.define('Departamento', {
    nome: Sequelize.STRING(100),
  }, { tableName: 'departamento' });
  return Departamento;
}