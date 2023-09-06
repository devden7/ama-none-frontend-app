const API_URL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_AMANONE_DEV
    : process.env.REACT_APP_API_AMANONE_PROD;
console.log(process.env);
console.log(process.env.API_AMANONE_DEV);
console.log(process.env.API_AMANONE_PROD);
export default { urlApi: API_URL };
