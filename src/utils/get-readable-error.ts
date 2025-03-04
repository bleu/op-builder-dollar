export const getReadableError = (error: Error) => {
  if (error.message.includes("User rejected")) {
    return "User rejected request.";
  }
  if (error.message.includes("internal error")) {
    return "RPC internal error.";
  }
  console.error(error);
  return "Transaction error.";
};
