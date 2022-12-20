export const formatResponse = (response: string) => {
  const colonIndex = response.indexOf(":");

  return response.slice(colonIndex + 1).trim();
};
