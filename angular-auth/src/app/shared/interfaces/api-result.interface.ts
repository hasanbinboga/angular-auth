import { ApiStatusEnum } from "../enums/api-status.enum";

export interface ApiResult<T> {
    data: T;
    status: ApiStatusEnum;
    error: string;
  }