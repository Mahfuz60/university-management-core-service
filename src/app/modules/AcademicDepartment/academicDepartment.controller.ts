import { AcademicDepartment } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import {
  AcademicDepartmentFilterAbleField,
  AcademicDepartmentOptionFiled,
} from './academicDepartment.constant';
import { AcademicDepartmentService } from './academicDepartment.service';

const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicDepartmentService.createAcademicDepartment(
      req.body
    );

    sendResponse<AcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department created successfully!',
      data: result,
    });
  }
);

const getAllAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, AcademicDepartmentFilterAbleField);
    const options = pick(req.query, AcademicDepartmentOptionFiled);

    const result = await AcademicDepartmentService.getAllAcademicDepartment(
      filters,
      options
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department Fetch Successfully!',
      meta: result.meta,
      data: result.data,
    });
  }
);

const getSingleDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.getSingleDepartment(
    req.params.id
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic single Department Data Fetched!',
    data: result,
  });
});

export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleDepartment,
};
