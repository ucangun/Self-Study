"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

module.exports = {
  list: async (req, res) => {
    // const result = await Todo.findAll();
    const result = await Todo.findAndCountAll();

    res.status(200).send({
      error: false,
      data: result,
    });
  },
  create: async (req, res) => {
    const result = await Todo.create(req.body);

    res.status(201).send({
      error: false,
      data: result,
    });
  },
  read: async (req, res) => {
    const id = req.params.id;
    const result = await Todo.findByPk(id);

    if (result) {
      res.status(200).send({
        error: false,
        message: "Todo found successfully",
        data: result,
      });
    } else {
      res.errorStatusCode = 404;
      throw new Error("Todo not found");
    }
  },
  update: async (req, res) => {
    const id = req.params.id;

    const [updated] = await Todo.update(req.body, { where: { id } });

    if (updated) {
      const updatedTodo = await Todo.findOne({ where: { id } });
      res.status(202).send({
        error: false,
        message: "Todo updated successfully",
        data: updatedTodo,
      });
    } else {
      res.errorStatusCode = 404;
      throw new Error("Todo not found");
    }
  },
  delete: async (req, res) => {
    const id = req.params.id;
    const deleted = await Todo.destroy({ where: { id } });

    if (deleted) {
      return res.status(204).send();
    } else {
      res.errorStatusCode = 404;
      throw new Error("Todo not found");
    }
  },
};
