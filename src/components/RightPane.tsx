import React, { useCallback, useEffect, useState } from "react";
import AddExpense from "./AddExpense";
import EditExpense from "./EditExpense";
import TableView from "./TableView";
import { Expense } from "../expense";
import { getExpenses } from "../services/expenseServices";
import { useExpenseContext } from "../state/Expense";
import DeleteExpenese from "./DeleteExpenese";
import dayjs from "dayjs";
import FilterMonthly from "./FilterMonthly";

const RightPane = () => {
  const [tableData, setTableData] = useState<Expense[]>([]);
  const [filteredData, setFilteredData] = useState<Expense[]>([]); // This holds filtered data only
  const [selectedRows, setSelectedRows] = useState<Expense[]>([]);
  const { setRefetch, refetch } = useExpenseContext();

  const filterDataByMonth = (selectedMonth: string) => {
    if (selectedMonth === "All") {
      setFilteredData(tableData);
    } else {
      const filtered = tableData.filter(
        (expense) => dayjs(expense.date).format("MMMM YYYY") === selectedMonth
      );
      setFilteredData(filtered);
    }
  };

  const loadData = useCallback(async () => {
    try {
      const res = await getExpenses();
      if (res.status === "OK" && res.data) {
        setTableData(res.data);
        setFilteredData(res.data);
      }
    } catch (error) {
      console.error("Failed to load expenses:", error);
    }
    setRefetch(false);
  }, [setRefetch]);

  useEffect(() => {
    loadData();
    setSelectedRows([]);
  }, [loadData, refetch]);

  return (
    <div className="w-full sm:w-3/5 p-4 mt-4 sm:mt-0">
      <div className="flex flex-wrap pb-4 justify-between gap-4">
        <div className="flex flex-row items-center gap-2">
          <FilterMonthly
            tableData={tableData}
            filterDataByMonth={filterDataByMonth}
          />
        </div>
        <div className="flex justify-end gap-4">
          <AddExpense />
          <EditExpense rowData={selectedRows} />
          <DeleteExpenese rowData={selectedRows} />
        </div>
      </div>
      <TableView tableData={filteredData} setRow={setSelectedRows} />
    </div>
  );
};

export default RightPane;
