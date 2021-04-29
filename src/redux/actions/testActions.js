export const TEST_REQUEST = "TEST_REQUEST";
export const TEST_SUCCESS = "TEST_SUCCESS";
export const TEST_ERROR = "TEST_ERROR";

export const testRequest = (data) => ({
  type: TEST_REQUEST,
  data,
});

export const testSuccess = (data) => ({
  type: TEST_SUCCESS,
  data,
});

export const testError = (error) => ({
  type: TEST_ERROR,
  error,
});
