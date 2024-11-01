/******************************************************

    EXPRESS.JS - BLOG Project with Mongoose 

/*************************************************** */

const mongoose = require("mongoose");

// const schemaName = new mongoose.Schema({ ...fields }, { settings });

/*************************************************** /

const schemaName = new mongoose.Schema(
  {
    // _id: ObjectId,
    fieldName: {
      type: Number,
      default: null, // if value not send
      trim: true,
      unique: true,
      // required: true,
      required: [true, "This is required fieldname"],
      index: true, // to access data faster
      // enum: ["1", "2", "3"],
      enum: [["1", "2", "3"], "This is enum error msg"],
      // validate: (data) => true or false
      validate: [
        (data) => {
          return true;
        },
        "This is validate error msg",
      ],
      get: (data) => data, // auto runs - to get data from db
      set: (data) => data, // auto runs - to save the data to db
    },
    fieldName: String, // shorthand
  },
  {
    collection: "tableName",
    timestamps: true, // createdAt, updatedAt
  }
);

/*************************************************** */

// Blog Category Schema

const BlogCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "blogCategories",
    timestamps: true,
  }
);

const BlogCategory = mongoose.model("BlogCategory", BlogCategorySchema);

module.exports = BlogCategory;
