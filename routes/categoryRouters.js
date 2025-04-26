import express from "express";

import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import { CreateCategoryController, categoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "./../controllers/categoryController.js";

const router = express.Router();

router.post(
  "/create-category", // Corrected the route path
  requireSignIn,
  isAdmin,
  CreateCategoryController
);

// update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// getall category
router.get('/get-category', categoryController)

// single category
router.get('/single-category/:slug',singleCategoryController)

// delete category
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController)
export default router;
