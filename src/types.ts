export type Category = {
  id: string;
  url: string;
  name: string;
  baseCategory: string;
  status: "Enabled" | "Disabled"; // Or other status types
  createdAt: string;
  updatedAt: string;
};