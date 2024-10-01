import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useMemo,
} from "react";

interface ExpenseContextProps {
  refetch: boolean;
  setRefetch: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue: ExpenseContextProps = {
  refetch: false,
  setRefetch: () => {},
};

const ExpenseContext = createContext<ExpenseContextProps>(defaultValue);

export const ExpenseProvider = ({ children }: { children: ReactNode }) => {
  const [refetch, setRefetch] = useState<boolean>(false);

  const value = useMemo(
    () => ({
      refetch,
      setRefetch,
    }),
    [refetch]
  );

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export const useExpenseContext = () => {
  const context = useContext(ExpenseContext);

  return context;
};
