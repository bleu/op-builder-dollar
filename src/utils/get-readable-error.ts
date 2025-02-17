export const getReadableError = (error: Error) => {
  if (error.message.includes("User rejected")) {
    return "User rejected request.";
  }
  console.error(error);
  return "Transaction error.";
};
