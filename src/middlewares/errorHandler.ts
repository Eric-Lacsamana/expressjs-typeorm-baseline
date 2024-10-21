import { Request, Response, NextFunction } from 'express';


class AppError extends Error {
    statusCode: number;
    isOperational: boolean;
  
    constructor(message: string, statusCode: number, isOperational = true) {
      super(message);
      this.statusCode = statusCode;
      this.isOperational = isOperational;
  
      // Capture stack trace for debugging
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
//   class NotFoundError extends AppError {
//     constructor(message: string = 'Resource not found') {
//       super(message, 404);
//     }
//   }
  
//   class ValidationError extends AppError {
//     constructor(message: string = 'Validation failed') {
//       super(message, 400);
//     }
//   }
  
//   class DatabaseError extends AppError {
//     constructor(message: string = 'Database operation failed') {
//       super(message, 500);
//     }
//   }

  
export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.isOperational ? err.statusCode : 500;
  const message = err.isOperational ? err.message : 'Something went wrong!';

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};
