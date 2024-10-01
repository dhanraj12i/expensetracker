import { Checkbox } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

interface ColumnsProps {
  handleConfirmChange: (rowId: number) => void;
}

export const columns = ({ handleConfirmChange }: ColumnsProps) => {
  const columnConfig: GridColDef[] = [
    {
      field: "",
      headerName: "",
      width: 10,
      editable: true,
      sortable: false,
      renderCell: (params) => (
        <Checkbox
          checked={params.row.confirmed}
          onChange={() => handleConfirmChange(params.row.id)}
        />
      ),
    },
    {
      field: "itemName",
      headerName: "Item Name",
      width: 150,
      editable: true,
      sortable: true,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 150,
      editable: true,
      sortable: true,
    },
    {
      field: "paymentMode",
      headerName: "Payment Mode",
      width: 150,
      editable: true,
      sortable: true,
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      editable: true,
      sortable: true,
    },
  ];

  return columnConfig;
};
