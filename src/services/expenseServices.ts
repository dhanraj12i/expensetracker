import axios from "axios";
import { Expense } from "../expense";

const API_URL = "http://localhost:3004";

interface ApiResponse<T> {
  status: string;
  data: T | null;
  message?: string;
}

const createErrorResponse = <T>(message: string): ApiResponse<T> => {
  return { status: "NOK", data: null, message };
};

const getExpenses = async (): Promise<ApiResponse<Expense[]>> => {
  try {
    const response = await axios.get<Expense[]>(`${API_URL}/expenses`);
    if (!response.data || !Array.isArray(response.data)) {
      return createErrorResponse<Expense[]>("No valid expense data received");
    }
    return { status: "OK", data: response.data };
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return createErrorResponse<Expense[]>("Error fetching expenses");
  }
};

const createExpense = async (
  expense: Expense
): Promise<ApiResponse<Expense>> => {
  try {
    const response = await axios.post<Expense>(`${API_URL}/expenses`, expense);
    return { status: "OK", data: response.data };
  } catch (error) {
    console.error("Error creating expense:", error);
    return createErrorResponse<Expense>("Error creating expense");
  }
};

const updateExpense = async (
  id: number,
  expense: Expense
): Promise<ApiResponse<Expense>> => {
  try {
    const response = await axios.put<Expense>(
      `${API_URL}/expenses/${id}`,
      expense
    );
    console.log("service", { status: "OK", data: response.data });
    return { status: "OK", data: response.data };
  } catch (error) {
    console.error("Error updating expense:", error);
    return createErrorResponse<Expense>("Error updating expense");
  }
};

const deleteExpense = async (id: number): Promise<ApiResponse<void>> => {
  try {
    await axios.delete(`${API_URL}/expenses/${id}`);
    return { status: "OK", data: null };
  } catch (error) {
    console.error("Error deleting expense:", error);
    return createErrorResponse<void>("Error deleting expense");
  }
};

export { getExpenses, createExpense, updateExpense, deleteExpense };
