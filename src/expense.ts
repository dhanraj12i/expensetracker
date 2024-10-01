//define types

export interface Expense {
  id?: number;
  itemName: string;
  price: string;
  paymentMode: string;
  date: string;
}

export const notifyInfo = {
  success: "success",
  error: "error",
  warning: "warning",
  info: "info",
};
