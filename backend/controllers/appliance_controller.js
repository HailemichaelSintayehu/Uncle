const { sequelize } = require("../models");
const { DataTypes } = require("sequelize");
const { Op } = require("sequelize");

const Appliance = require("../models/appliance")(sequelize, DataTypes);

// function to fetch appliance by id
exports.get_appliance_ById = async (req, res, next) => {
  const appliance_id = req.params.id;

  try {
    await Appliance.findByPk(appliance_id).then((appliance) => {
      if (!appliance) {
        return res
          .status(404)
          .send(`Appliance with the specified ID #${appliance_id} not found`);
      }
      return res.status(200).json(appliance);
    });
  } catch (error) {
    return res.status(500).send("could not fetch the product");
  }
};

//function to fetch all the appliances
exports.get_all_appliances = async (req, res, next) => {
  try {
    await Appliance.findAll().then((appliances) => {
      return res.status(200).json({ appliances: appliances });
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

// function to search for an appliance
exports.search_for_appliance = async (req, res, next) => {
  try {
    const { name, category, min_price, max_price, brand, page, size } =
      req.query;
    const search_criteria = {};
    if (name) {
      search_criteria.name = { [Op.iLike]: `% ${name} %` };
    }
    if (category) {
      search_criteria.category = { [Op.iLike]: `%${category}%` };
    }
    if (min_price) {
      search_criteria.price = { ...search_criteria.price, [Op.gte]: min_price };
    }
    if (max_price) {
      search_criteria.price = { ...search_criteria.price, [Op.lte]: max_price };
    }
    if (brand) {
      search_criteria.brand = { [Op.iLike]: `%${brand}%` };
    }

    const options = {};

    if (page) {
      options.offset = (page - 1) * size;
    }
    if (size) {
      options.limit = size || 10;
    }
    await Appliance.findAll({
      where: {
        search_criteria,
        offset: 1,
        limit: 10,
      },
      attributes: ["id", "name", "image", "price"],
    }).then(async (appliances) => {
      if (appliances.length == 0) {
        return res.status(404).send("No appliances found.");
      }
      return res.status(200).json({ total: appliances.length, appliances });
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
