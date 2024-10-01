import { DataGrid } from "@mui/x-data-grid";
import React, { FC, useCallback } from "react";
import { columns } from "./columnConfig";
import { Expense } from "../expense";

interface TableViewProps {
  tableData: object[];
  setRow: React.Dispatch<React.SetStateAction<Expense[]>>;
}

const TableView: FC<TableViewProps> = ({ tableData, setRow }) => {
  const handleConfirmChange = useCallback(
    (rowId: number) => {
      const selectedRow = tableData.find(
        (row) => (row as Expense).id === rowId
      );
      if (selectedRow) {
        setRow((prev) => {
          const exists = prev.some(
            (expense: Expense) => expense.id === (selectedRow as Expense).id
          );
          return exists
            ? prev.filter(
                (expense) => expense.id !== (selectedRow as Expense).id
              )
            : ([...prev, selectedRow] as Expense[]);
        });
      }
    },
    [setRow, tableData]
  );

  return (
    <div>
      {tableData.length > 0 && (
        <DataGrid
          rows={tableData}
          columns={columns({ handleConfirmChange })}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableColumnMenu={true}
          disableColumnFilter={true}
          disableColumnSelector={true}
          // checkboxSelection
          // disableRowSelectionOnClick
          // onRowSelectionModelChange={(newSelection: any) => {
          //   const selectedRows = newSelection.map((selectedId: number) =>
          //     tableData.find((row: any) => (row.id as number) === selectedId)
          //   );
          //   setRow(selectedRows as Expense[]);
          // }}
        />
      )}
    </div>
  );
};

export default TableView;
