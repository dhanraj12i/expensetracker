import React, { useCallback, useEffect, useState } from "react";
import AddExpense from "./AddExpense";
import EditExpense from "./EditExpense";
import TableView from "./TableView";
import { Expense } from "../expense";
import { getExpenses } from "../services/expenseServices";
import { useExpenseContext } from "../state/Expense";
import DeleteExpenese from "./DeleteExpenese";

const RightPane = () => {
  const [tableData, setTableData] = useState<Expense[]>([]);
  const [selectedRows, setSelectedRows] = useState<Expense[]>([]);
  const { setRefetch, refetch } = useExpenseContext();

  const loadData = useCallback(async () => {
    try {
      const res = await getExpenses();
      if (res.status === "OK" && res.data) {
        setTableData(res.data);
      }
    } catch (error) {
      console.error("Failed to load expenses:", error);
    }
    setRefetch(false);
  }, [setRefetch]);

  useEffect(() => {
    loadData();
  }, [loadData, refetch]);

  return (
    <div className="w-full sm:w-3/5 p-4 mt-4 sm:mt-0 ">
      <div className="flex w-full justify-end gap-4 pb-4">
        <AddExpense />
        <EditExpense rowData={selectedRows} />
        <DeleteExpenese rowData={selectedRows} />
      </div>
      <TableView tableData={tableData} setRow={setSelectedRows} />
    </div>
  );
};

export default RightPane;
