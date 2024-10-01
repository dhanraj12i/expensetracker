import React, { FC, useState } from "react";
import Button from "./shared/Button";
import { Expense } from "../expense";

interface AddEditFormProps {
  isEdit?: boolean;
  onSave: (data: any) => void;
  onCancel: () => void;
  rowData?: Expense[];
}

const AddEditForm: FC<AddEditFormProps> = ({
  isEdit = false,
  onSave,
  onCancel,
  rowData = [] as Expense[],
}) => {
  const defaultValue: Expense = {
    itemName: "",
    price: "",
    paymentMode: "Cash",
    date: "",
  };

  const [formData, setFormData] = useState<Expense>(
    isEdit ? { ...rowData[0] } : { ...defaultValue }
  );

  const [errors, setErrors] = useState<Expense>({} as Expense);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev: Expense) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {} as Expense;
    if (!formData.itemName) newErrors.itemName = "Item Name is required.";
    if (!formData.price) newErrors.price = "Price is required.";
    if (!formData.paymentMode)
      newErrors.paymentMode = "Payment Mode is required.";
    if (!formData.date) newErrors.date = "Date is required.";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSave(formData);
    console.log("Form submitted successfully:", formData);
    setFormData({ ...defaultValue });
    setErrors({} as Expense);
    e.preventDefault();
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="itemName"
            className="block text-sm font-medium text-gray-700 pb-1"
          >
            Item Name
          </label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter Item Name"
            required
          />
        </div>
        {errors.itemName && (
          <span className="text-red-500">{errors.itemName}</span>
        )}

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 pb-1"
          >
            Price (in Rupees)
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter price"
            required
          />
        </div>
        {errors.price && <span className="text-red-500">{errors.price}</span>}
        <div className="mb-4 flex justify-between">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 pb-1 pr-2"
          >
            Payment Mode
          </label>
          <select
            name="paymentMode"
            value={formData.paymentMode}
            onChange={handleInputChange}
            className="block  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          >
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
            <option value="UPI">UPI</option>
            <option value="Net Banking">Net Banking</option>
          </select>
        </div>
        {errors.paymentMode && (
          <span className="text-red-500">{errors.paymentMode}</span>
        )}
        <div className="mb-4 flex justify-between">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 pb-1 pr-2"
          >
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>
        {errors.date && <span className="text-red-500">{errors.date}</span>}
        <div className="bg-gray-50 px-4 py-3 flex flex-col sm:flex-row sm:px-6 justify-end gap-2">
          <Button
            handleClick={onCancel}
            variant="white"
            name="Cancel"
            btnStyle={"w-full sm:w-auto"}
          />
          <Button
            handleClick={handleSubmit}
            variant="primary"
            name="Save"
            btnStyle={"w-full sm:w-auto"}
          />
        </div>
      </form>
    </div>
  );
};

export default AddEditForm;
