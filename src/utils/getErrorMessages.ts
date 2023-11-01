export const getErrorMessages = (formik) => {
  const errorMessages = [];

  if (formik.touched.title && formik.errors.title) {
    errorMessages.push(formik.errors.title);
  }

  if (formik.touched.price && formik.errors.price) {
    errorMessages.push(formik.errors.price);
  }

  if (formik.touched.description && formik.errors.description) {
    errorMessages.push(formik.errors.description);
  }

  return errorMessages;
};
