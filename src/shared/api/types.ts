import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { SerializedError } from "@reduxjs/toolkit";

export function isFetchBaseQueryError(
  error: unknown,
): error is FetchBaseQueryError {
  return typeof error === "object" && error !== null && "status" in error;
}

export function isSerializedError(error: unknown): error is SerializedError {
  return typeof error === "object" && error !== null && "message" in error;
}

export type ApiListResponse<T> = {
  data: T[];
};

export type ApiQueryResult<T> = {
  data?: ApiListResponse<T>;
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean;
  refetch: () => void;
  isSuccess: boolean;
  error?: any;
};

export type ApiQueryHook<T> = () => ApiQueryResult<T>;
