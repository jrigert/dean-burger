export type ApiError<ValidationErrors = undefined> =
  | {
      errorMessage: string;
      errorCode: string;
    }
  | ApiValidationError<ValidationErrors>;

export type ApiValidationError<ValidationErrors> = {
  validationErrors: ValidationErrors;
};

export const isApiError = (e: unknown): e is ApiError => {
  return Boolean(
    e && typeof e === "object" && "errorMessage" in e && "errorCode" in e,
  );
};

export const isApiValidationError = <ValidationErrors>(
  error: ApiError<ValidationErrors>,
): error is ApiValidationError<ValidationErrors> => {
  return "validationErrors" in error;
};

const isObjectWithMessage = (value: unknown): value is { message: string } => {
  return Boolean(
    value && typeof value === "object" && "message" in value && value.message,
  );
};

const UNKNOWN_ERROR_MESSAGE = "Unknown error";

export const extractErrorMessage = (error: unknown): string => {
  if (!error) {
    return UNKNOWN_ERROR_MESSAGE;
  }

  if (typeof error === "string") {
    return error;
  }

  if (isObjectWithMessage(error)) {
    return error.message;
  }

  return UNKNOWN_ERROR_MESSAGE;
};
