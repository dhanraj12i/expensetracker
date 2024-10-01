import React, { FC, useState } from "react";
import dayjs from "dayjs";
import { Expense } from "../expense";

interface FilterMonthlyProps {
  tableData: Expense[];
  filterDataByMonth: (month: string) => void; // Function to filter data
}

const FilterMonthly: FC<FilterMonthlyProps> = ({
  tableData,
  filterDataByMonth,
}) => {
  const [selectedMonth, setSelectedMonth] = useState("All");

  const getUniqueMonths = () => {
    const months = tableData.map((expense) =>
      dayjs(expense.date).format("MMMM YYYY")
    );
    return ["All", ...Array.from(new Set(months))];
  };

  const uniqueMonths = getUniqueMonths();

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    setSelectedMonth(selected);
    filterDataByMonth(selected);
  };

  return (
    <>
      <label htmlFor="monthlyFilter" className="text-lg font-medium">
        Filter Monthly
      </label>
      <select
        id="monthlyFilter"
        className="border border-gray-300 rounded-md p-2 ml-2"
        value={selectedMonth}
        onChange={handleMonthChange}
      >
        {uniqueMonths.map((month, index) => (
          <option key={`${month}+${index}`} value={month}>
            {month}
          </option>
        ))}
      </select>
    </>
  );
};

export default FilterMonthly;
