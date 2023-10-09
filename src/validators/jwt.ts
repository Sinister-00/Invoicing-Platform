import * as yup from "yup";

export const jwtHeader = yup.object({
  authorization: yup
    .string()
    .trim()
    .min(1, "JWT cannot be null")
    .matches(/^Bearer .+$/, "JWT should be Bearer Token")
    .required("No JWT authorization Token available"),
});

export type TJwtHeader = yup.InferType<typeof jwtHeader>;
