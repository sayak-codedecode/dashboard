
export type Category = {
  id: string;
  url: string;
  name: string;
  baseCategory: string;
  status: "Enabled" | "Disabled"; 
  createdAt: string;
  updatedAt: string;
};