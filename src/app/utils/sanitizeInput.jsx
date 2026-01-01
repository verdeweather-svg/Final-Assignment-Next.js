// Removes extra spaces and unsafe characters
export const sanitizeInput = (value) => {
  if (typeof value !== "string") return "";
  return value.trim().replace(/[<>]/g, ""); // remove < and > to prevent injection
};
