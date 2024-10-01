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
      width: 70,
      editable: true,
      sortable: false,
      resizable: false,
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
      width: 200,
      editable: true,
      sortable: true,
      resizable: false,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 200,
      editable: true,
      sortable: true,
      resizable: false,
    },
    {
      field: "paymentMode",
      headerName: "Payment Mode",
      width: 180,
      editable: true,
      sortable: true,
      resizable: false,
    },
    {
      field: "date",
      headerName: "Date",
      width: 200,
      editable: true,
      sortable: true,
      resizable: false,
    },
  ];

  return columnConfig;
};
