export const ok = (body) => {
  return {
    success: true,
    statusCode: 200,
    body: 'Welcome to my Gatronomy Site',
  };
};

export const notFound = () => {
  return {
    success: false,
    statusCode: 400,
    body: 'Not Found',
  };
};

export const serverError = (body) => {
  return {
    success: false,
    statusCode: 501,
    body: 'Sever Error',
  };
};
