import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomRes<T = unknown> extends HttpException {
  success: boolean;
  data: T | undefined;
  code?: string;

  constructor(
    status: HttpStatus = HttpStatus.OK,
    message = '',
    success = false,
    data?: T,
    code?: string
  ) {
    super({ success, message, data }, status);
    this.message = message;
    this.data = data;
    this.success = success;
    this.code = code;
  }

  static throw() {
    return CustomRes.serverError();
  }

  static success<T>(data?: T, message = 'successful'): CustomRes<T> {
    return new CustomRes<T>(HttpStatus.OK, message, true, data);
  }

  static failed<T>(message: string, code: string, data?: T): CustomRes<T> {
    return new CustomRes<T>(HttpStatus.OK, message, false, data, code);
  }

  static badRequest<T>(message: string): CustomRes<T> {
    return new CustomRes<T>(HttpStatus.BAD_REQUEST, message);
  }

  static unauthorized<T>(message = 'unauthorized'): CustomRes<T> {
    return new CustomRes<T>(HttpStatus.UNAUTHORIZED, message);
  }

  static forbidden<T>(message = 'noPermissionError'): CustomRes<T> {
    return new CustomRes<T>(HttpStatus.FORBIDDEN, message);
  }

  static serverError<T>(
    message = 'unknown server error occurred'
  ): CustomRes<T> {
    return new CustomRes<T>(HttpStatus.INTERNAL_SERVER_ERROR, message);
  }

  getData() {
    return {
      success: this.success,
      code: this.code,
      message: this.message,
      data: this.data,
    };
  }
}
