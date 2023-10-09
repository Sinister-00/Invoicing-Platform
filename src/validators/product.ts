import * as yup from "yup";

export const addProductSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(3, "Minimum required characters required is 3")
    .max(200, "Max allowed characters is 200")
    .required("Please specify a name for Product"),

  price: yup.number().required("Please specify a price for Product"),
});

export type TAddProductSchema = yup.InferType<typeof addProductSchema>;

export const getProduct = yup.object({
  id: yup
    .string()
    .required("Please provide a number")
    .matches(/^[0-9]+$/g, "Please prove a number"),
});
export type TGetProductSchema = yup.InferType<typeof getProduct>;

export const modifyProduct = yup
  .object({
    name: yup
      .string()
      .trim()
      .min(3, "Minimum required characters required is 3")
      .max(200, "Max allowed characters is 200"),

    price: yup.number(),
  })
  .noUnknown(true)
  .strict();

export type TModifyProductSchema = yup.InferType<typeof modifyProduct>;
