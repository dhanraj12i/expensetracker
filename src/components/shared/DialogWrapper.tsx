import React, { FC, ReactElement } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface DialogWrapperProps {
  isOpen: boolean;
  children: ReactElement;
  onClose: () => void;
  title: string;
}

const DialogWrapper: FC<DialogWrapperProps> = ({
  isOpen,
  children,
  onClose,
  title,
}) => {
  return (
    <dialog
      className="fixed inset-0 z-[9999]" // Ensure modal is on top
      aria-labelledby={""}
      open={isOpen}
      onCancel={onClose}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50 z-[-1]"></div>
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden max-w-lg mx-auto p-3 bg-white shadow-md rounded-lg text-left transition-all sm:w-full sm:max-w-lg z-10">
          <div className="px-4 pb-2 pt-2 flex justify-between">
            <div className="text-2xl font-bold">{title}</div>
            <XMarkIcon
              className="size-6 cursor-pointer text-slate-400"
              onClick={onClose}
            />
          </div>
          {children}
        </div>
      </div>
    </dialog>
  );
};

export default DialogWrapper;
