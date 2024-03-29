import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacltiesValidation } from './academicFaculty.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(AcademicFacltiesValidation.createAcademicFaculty),
  AcademicFacultyController.createAcademicFaculty
);
router.get('/', AcademicFacultyController.getAllAcademicFaculties);
router.get('/:id', AcademicFacultyController.getSingleFaculty);

export const AcademicFacultyRoutes = router;
