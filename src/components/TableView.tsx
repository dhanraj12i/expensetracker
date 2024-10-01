import { DataGrid } from "@mui/x-data-grid";
import React, { FC, useCallback, useEffect, useState } from "react";
import { columns } from "./columnConfig";
import { Expense } from "../expense";
import { CircularProgress } from "@mui/material";

interface TableViewProps {
  tableData: Expense[]; // Change to Expense type for better type safety
  setRow: React.Dispatch<React.SetStateAction<Expense[]>>;
}

const TableView: FC<TableViewProps> = ({ tableData, setRow }) => {
  const [loading, setLoading] = useState(true);

  const handleConfirmChange = useCallback(
    (rowId: number) => {
      const selectedRow = tableData.find((row) => row.id === rowId);
      if (selectedRow) {
        setRow((prev) => {
          const exists = prev.some(
            (expense: Expense) => expense.id === selectedRow.id
          );
          return exists
            ? prev.filter((expense) => expense.id !== selectedRow.id)
            : [...prev, selectedRow]; // No need for type assertion
        });
      }
    },
    [setRow, tableData]
  );

  useEffect(() => {
    if (tableData?.length > 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [tableData]);

  const CustomLoadingOverlay = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
      <CircularProgress />
    </div>
  );

  const CustomFooter = () => {
    const totalAmount = tableData.reduce(
      (total, item) => total + (parseInt(item.price) || 0),
      0
    );
    return (
      <div className="flex justify-end p-2 bg-gray-100">
        <span className="font-bold">
          Total Amount: Rs {totalAmount.toFixed(2)}
        </span>
      </div>
    );
  };

  return (
    <div className="relative h-80 w-full">
      {loading ? (
        <CustomLoadingOverlay />
      ) : (
        <DataGrid
          rows={tableData}
          columns={columns({ handleConfirmChange })}
          disableColumnMenu
          disableColumnFilter
          disableColumnSelector
          hideFooter
          autoHeight={false}
          scrollbarSize={8}
          loading={loading}
        />
      )}
      <CustomFooter />
    </div>
  );
};

export default TableView;
