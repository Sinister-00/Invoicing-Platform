export type ResponseBody<TD> = {
  success: boolean;
  message: string | string[];
  data?: TD;
};

export type ResponseBodyWithoutData = {
  success: boolean;
  message: string | string[];
};

export type APIResponse<T> = {
  body: ResponseBody<T>;
  statusCode: number;
  headers?: Object;
}

export type APIResponseWithoutData = {
  body: ResponseBodyWithoutData;
  statusCode: number;
  headers?: Object;
}

