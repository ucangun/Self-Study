"use strict";

/******************************************************

    EXPRESS.JS - BLOG Project with Mongoose 

/*************************************************** */

module.exports = async (req, res, next) => {
  //  FILTERING & SEARCHING & SORTING & PAGINATION

  // console.log("line 79 => ", req.query);

  //* FILTERING
  // URL?filter[fieldName1]=value1&filter[fieladName2]=value2
  const filter = req.query?.filter || {};

  //* SEARCHING
  // URL?search[fieldName1]=value1&search[fieldName2]=value2
  // { "<field>": { "$regex": "pattern", "$options": "<options>" } }

  const search = req.query?.search || {};

  for (let key in search) {
    search[key] = { $regex: search[key] };
    // console.log(search[key]);
  }

  //* SORTING
  // URL?sort[fieldName]=asc&sort[fieldName2]=desc

  const sort = req.query?.sort || {};

  //* LIMIT

  let limit = Number(req.query?.limit);
  limit = limit > 0 ? limit : Number(process.env.PAGE_SIZE || 20);

  //* PAGINATION
  // URL?page=2&limit=10

  let page = Number(req.query?.page);
  page = page > 0 ? page : 1;

  let skip = Number(req.query?.skip);
  skip = skip > 0 ? skip : (page - 1) * limit;

  res.getModelList = async function (Model, populate = null) {
    return await Model.find({ ...filter, ...search })
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .populate(populate);
  };

  next();
};
