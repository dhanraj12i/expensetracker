import React, { FC, useState } from "react";
import { useExpenseContext } from "../state/Expense";
import { useSnackbar } from "notistack";
import { Expense } from "../expense";
import Button from "./shared/Button";
import DialogWrapper from "./common/DialogWrapper";
import { deleteExpense } from "../services/expenseServices";

interface DeleteExpenseProps {
  rowData: Expense[];
}
const DeleteExpenese: FC<DeleteExpenseProps> = ({ rowData }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { setRefetch } = useExpenseContext();
  const { enqueueSnackbar } = useSnackbar();

  const handleModal = () => {
    if (rowData.length === 0) {
      enqueueSnackbar(`Please select the Expense entry for any action`, {
        variant: "error",
      });
    } else if (rowData.length > 1) {
      enqueueSnackbar(`Kindly multiselection actions are prohibited`, {
        variant: "error",
      });
    } else {
      setOpen(!open);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await deleteExpense(rowData[0].id as number);
      console.log(res);
      if (res.status === "OK") {
        setRefetch(true);
        handleModal();
        enqueueSnackbar("Expense Deleted Successfully", { variant: "success" });
      }
    } catch (e) {
      enqueueSnackbar(`${e}`, { variant: "error" });
      console.error(e);
    }
  };

  return (
    <>
      <Button handleClick={handleModal} variant="danger" name="Delete" />
      {open && (
        <DialogWrapper
          isOpen={open}
          onClose={handleModal}
          title={"Confirmation"}
        >
          <div>
            <div className="flex-row min-h-full items-center justify-center p-4">
              <p className="mb-1">
                Are you sure you want to delete this item? This action cannot be
                undone.
              </p>
              <div className="bg-gray-50 px-4 py-3 flex flex-col sm:flex-row sm:px-6 justify-end gap-2">
                <Button
                  handleClick={handleModal}
                  variant="white"
                  name="Cancel"
                  btnStyle={"w-full sm:w-auto"}
                />
                <Button
                  handleClick={handleDelete}
                  variant="danger"
                  name="Save"
                  btnStyle={"w-full sm:w-auto"}
                />
              </div>
            </div>
          </div>
        </DialogWrapper>
      )}
    </>
  );
};

export default DeleteExpenese;
