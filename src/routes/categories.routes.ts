import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.exeute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  return response.json(categoriesRepository.list());
});

export { categoriesRoutes };
