import React, { FC, useEffect, useState } from "react";
import DialogWrapper from "./common/DialogWrapper";
import AddEditForm from "./AddEditForm";
import Button from "./shared/Button";
import { Expense } from "../expense";
import { useSnackbar } from "notistack";
import { updateExpense } from "../services/expenseServices";
import { useExpenseContext } from "../state/Expense";

interface EditExpenseProps {
  rowData: Expense[];
}

const EditExpense: FC<EditExpenseProps> = ({ rowData }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const { setRefetch } = useExpenseContext();

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

  const handleEdit = async (data: Expense) => {
    try {
      const res = await updateExpense(data.id as number, data);
      if (res.status === "OK" && res.data) {
        setRefetch(true);
        handleModal();
        enqueueSnackbar("Successfully Edited", { variant: "success" });
      }
    } catch (e) {
      enqueueSnackbar(
        `Unable to perform action please contact system administrator`,
        { variant: "error" }
      );
      console.error(e);
    }
  };

  return (
    <div>
      <Button
        handleClick={handleModal}
        variant="secondary"
        name="Edit"
        isDisable={false}
      />
      {open && (
        <DialogWrapper
          isOpen={open}
          onClose={handleModal}
          title={"Add Expense"}
        >
          <AddEditForm
            isEdit={true}
            onCancel={handleModal}
            onSave={handleEdit}
            rowData={rowData}
          />
        </DialogWrapper>
      )}
    </div>
  );
};

export default EditExpense;
