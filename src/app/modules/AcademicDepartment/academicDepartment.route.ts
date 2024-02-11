import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentController } from './academicDepartment.controller';
import { AcademicDepartmentValidation } from './academicDepartment.validation';

const router = express.Router();

router.get('/', AcademicDepartmentController.getAllAcademicDepartment);

router.get('/:id', AcademicDepartmentController.getSingleDepartment);
router.post(
  '/',
  validateRequest(AcademicDepartmentValidation.createAcademicDepartment),
  AcademicDepartmentController.createAcademicDepartment
);

export const AcademicDepartmentRoutes = router;
