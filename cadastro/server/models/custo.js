module.exports = (sequelize, Sequelize) => {
  const Custo = sequelize.define('Custo', {
    descricao: Sequelize.STRING(500),
    valor: Sequelize.FLOAT,
  }, {
    tableName: 'custo',
    classMethods: {
      associate: (models) => {
        Custo.belongsTo(models.Funcionario, { foreignKey: 'funcionario_id' });
      }
    }
  });
  return Custo;
}