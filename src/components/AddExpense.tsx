import React, { useState } from "react";
import DialogWrapper from "./shared/DialogWrapper";
import AddEditForm from "./AddEditForm";
import Button from "./shared/Button";
import { Expense } from "../expense";
import { createExpense } from "../services/expenseServices";
import { useExpenseContext } from "../state/Expense";
import { useSnackbar } from "notistack";

const AddExpense = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { setRefetch } = useExpenseContext();
  const { enqueueSnackbar } = useSnackbar();

  const handleModal = () => {
    setOpen(!open);
  };

  const handleAdd = async (data: Expense) => {
    try {
      const res = await createExpense(data);
      if (res.status === "OK" && res.data) {
        setRefetch(true);
        handleModal();
        enqueueSnackbar("Expense Added Successfully", { variant: "success" });
      }
    } catch (e) {
      enqueueSnackbar(`${e}`, { variant: "error" });
      console.error(e);
    }
  };

  return (
    <>
      <Button handleClick={handleModal} variant="primary" name="Add" />
      {open && (
        <DialogWrapper
          isOpen={open}
          onClose={handleModal}
          title={"Add Expense"}
        >
          <AddEditForm onCancel={handleModal} onSave={handleAdd} />
        </DialogWrapper>
      )}
    </>
  );
};

export default AddExpense;
