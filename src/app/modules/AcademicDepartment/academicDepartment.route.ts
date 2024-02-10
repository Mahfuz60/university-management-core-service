import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentController } from './academicDepartment.controller';
import { AcademicDepartmentValidation } from './academicDepartment.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(AcademicDepartmentValidation.createAcademicDepartment),
  AcademicDepartmentController.createAcademicDepartment
);

export const AcademicDepartmentRoutes = router;
