import { AcademicDepartment } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createAcademicDepartment = async (
  academicDepartmentData: AcademicDepartment
): Promise<AcademicDepartment> => {
  const result = await prisma.academicDepartment.create({
    data: academicDepartmentData,
  });
  return result;
};






export const AcademicDepartmentService = {
  createAcademicDepartment,
};
