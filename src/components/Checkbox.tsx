// React.
import { ChangeEventHandler } from 'react';

export type CheckboxProps = {
  id: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Checkbox = (params: CheckboxProps) => {
  const { id, label, onChange } = params;

  return (
    <div className="flex items-center mb-4">
      <input
        id={id}
        name=""
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
        onChange={onChange}
      />
      <label htmlFor={id} className="mx-2">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
