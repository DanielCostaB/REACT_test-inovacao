'use strict';

module.exports = {
  up: (qi, Sequelize) => qi.sequelize.transaction(t => Promise.all([
    qi.createTable('funcionario', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING(200),
      },
    }, { transaction: t }),
    qi.createTable('departamento', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
    }, { transaction: t }),
    qi.createTable('custo', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING(500),
      },
      valor: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      funcionario_id: {
        type: Sequelize.UUID,
        references: {
          model: 'funcionario',
          key: 'id',
        },
      },
    }, { transaction: t }),
  ])),

  down: (qi, Sequelize) => qi.sequelize.transaction(t => Promise.all([
    qi.dropTable('funcionario', { transaction: t }),
    qi.dropTable('departamentos', { transaction: t }),
    qi.dropTable('custos', { transaction: t })
  ])),
};
