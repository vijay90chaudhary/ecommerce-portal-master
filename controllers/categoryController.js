import CategoryModel from "../models/CategoryModel.js";
import slugify from "slugify";
export const CreateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
    const existingCatrgory = await CategoryModel.findOne({ name });
    if (existingCatrgory) {
      return res.status(200).send({
        success: true,
        message: "Category Already Exitis",
      });
    }
    const category = await CategoryModel({ name, slug: slugify(name) }).save();
    res.status(201).send({
      success: true,
      message: "new category created",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      Message: "Error in category",
    });
  }
};

// update category
export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await CategoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Category Update Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating category",
    });
  }
};

// get all cat
export const categoryController = async (req, res) => {
  try {
    const category = await CategoryModel.find({});
    res.status(200).send({
      success: true,
      message: "All Categories List",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while geeting all categories",
    });
  }
};

// single category
export const singleCategoryController = async (req, res) => {
  try {
    const category = await CategoryModel.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "Get Single successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while geeting single category",
    });
  }
};

// delete category
export const deleteCategoryController = async (req,res) =>{
  try{
    const {id} = req.params
    await CategoryModel.findByIdAndDelete(id)
    res.status(200).send({
      success:true,
      message:'Category Deleted sucessfully'
    })
    
  }catch(error){
    console.log(error)
    res.status(500).send({
      success:false,
      message:'Error while deletecting category',
      error
    })
  }
}