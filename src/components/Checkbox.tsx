"use client";
import {useState} from "react";
import {classNames} from "@/utils/style";

type CheckboxPros = {
  readonly?: true;
  defaultStatus?: boolean;
  label?: string;
};

export default function Checkbox({
  readonly,
  defaultStatus,
  label,
}: CheckboxPros) {
  const [checked, setChecked] = useState<boolean>(defaultStatus || false);
  classNames;
  return (
    <div className=" flex items-center justify-center gap-3 ">
      <label className="block text-sm font-semibold leading-6 text-gray-900">
        {label}
      </label>
      <button
        className={classNames(
          "w-10 h-10 rounded-md  text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-20",
          checked
            ? "bg-green-50 hover:bg-green-20"
            : "bg-gray-100 hover:bg-gray-90"
        )}
        onClick={() => {
          !readonly && setChecked(!checked);
        }}
      >
        {checked ? "✓" : "X"}
      </button>
    </div>
  );
}
