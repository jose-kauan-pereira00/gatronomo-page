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
    body: body,
  };
};

export const serverError = (body) => {};
