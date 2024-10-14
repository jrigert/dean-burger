export const UnknownErrorCode = "UNKNOWN";

export const RegisterErrorCodes = {
  MissingField: "R001",
} as const;

export const PrismaErrorCodes = {
  UniqueConstraintViolation: "P2002",
} as const;

export const GenericErrorMessage =
  "Sorry, something went wrong. Please try again.";
