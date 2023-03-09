// React.
import { useRef } from 'react';

// Components.
import Datepicker from '@dchimen/react-datepicker';

// Styles.
import './App.css';

// Date helpers.
import { add, sub } from 'date-fns';

function App() {
  const defaultInputRef = useRef<HTMLInputElement>(null);
  const singleDateInputRef = useRef<HTMLInputElement>(null);
  const minDateInputRef = useRef<HTMLInputElement>(null);
  const maxDateInputRef = useRef<HTMLInputElement>(null);
  const doubleDateInputRef = useRef<HTMLInputElement>(null);
  const closeOnSelectInputRef = useRef<HTMLInputElement>(null);
  const onDateChangeInputRef = useRef<HTMLInputElement>(null);
  const showOtherMonthsInputRef = useRef<HTMLInputElement>(null);
  const customThemeInputRef = useRef<HTMLInputElement>(null);
  const customDateFormatInputRef = useRef<HTMLInputElement>(null);
  const customTitleInputRef = useRef<HTMLInputElement>(null);

  const startDate = add(new Date(), { days: 7 });
  const endDate = add(new Date(), { days: 14 });

  return (
    <div className="container p-4 dark:text-stone-300">
      {/* default */}
      <div className="flex items-center max-w-lg whitespace-nowrap">
        <label htmlFor="defaultInputRef">default</label>
        <div className="relative w-full ml-4 border border-gray-300 dark:bg-zinc-700 dark:border-zinc-900">
          <input
            id="defaultInputRef"
            ref={defaultInputRef}
            type="text"
            className="block w-full cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
          ></input>
        </div>
        <Datepicker inputRef={defaultInputRef} />
      </div>
      {/* start date */}
      <div className="flex items-center max-w-lg whitespace-nowrap mt-4">
        <label htmlFor="singleDateInputRef">single date</label>
        <div className="relative w-full ml-4 border border-gray-300 dark:bg-zinc-700 dark:border-zinc-900">
          <input
            id="singleDateInputRef"
            ref={singleDateInputRef}
            type="text"
            className="block w-full cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
          ></input>
        </div>
        <Datepicker inputRef={singleDateInputRef} startDate={startDate} />
      </div>
      {/* min date */}
      <div className="flex items-center max-w-lg whitespace-nowrap mt-4">
        <label htmlFor="minDateInputRef">min date</label>
        <div className="relative w-full ml-4 border border-gray-300 dark:bg-zinc-700 dark:border-zinc-900">
          <input
            id="minDateInputRef"
            ref={minDateInputRef}
            type="text"
            className="block w-full cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
          ></input>
        </div>
        <Datepicker
          inputRef={minDateInputRef}
          startDate={startDate}
          minDate={sub(new Date(), { months: 3 })}
        />
      </div>
      {/* max date */}
      <div className="flex items-center max-w-lg whitespace-nowrap mt-4">
        <label htmlFor="maxDateInputRef">max date</label>
        <div className="relative w-full ml-4 border border-gray-300 dark:bg-zinc-700 dark:border-zinc-900">
          <input
            id="maxDateInputRef"
            ref={maxDateInputRef}
            type="text"
            className="block w-full cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
          ></input>
        </div>
        <Datepicker
          inputRef={maxDateInputRef}
          startDate={startDate}
          maxDate={add(new Date(), { months: 3 })}
        />
      </div>
      {/* end date */}
      <div className="flex items-center max-w-lg whitespace-nowrap mt-4">
        <label htmlFor="doubleDateInputRef">end date</label>
        <div className="relative w-full ml-4 border border-gray-300 dark:bg-zinc-700 dark:border-zinc-900">
          <input
            id="doubleDateInputRef"
            ref={doubleDateInputRef}
            type="text"
            className="block w-full cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
          ></input>
        </div>
        <Datepicker
          inputRef={doubleDateInputRef}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      {/* close on select */}
      <div className="flex items-center max-w-lg whitespace-nowrap mt-4">
        <label htmlFor="closeOnSelectInputRef">close on select</label>
        <div className="relative w-full ml-4 border border-gray-300 dark:bg-zinc-700 dark:border-zinc-900">
          <input
            id="closeOnSelectInputRef"
            ref={closeOnSelectInputRef}
            type="text"
            className="block w-full cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
          ></input>
        </div>
        <Datepicker
          inputRef={closeOnSelectInputRef}
          startDate={startDate}
          endDate={endDate}
          closeOnSelect={true}
        />
      </div>
      {/* on date change */}
      <div className="flex items-center max-w-lg whitespace-nowrap mt-4">
        <label htmlFor="onDateChangeInputRef">date change callback</label>
        <div className="relative w-full ml-4 border border-gray-300 dark:bg-zinc-700 dark:border-zinc-900">
          <input
            id="onDateChangeInputRef"
            ref={onDateChangeInputRef}
            type="text"
            className="block w-full cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
          ></input>
        </div>
        <Datepicker
          inputRef={onDateChangeInputRef}
          startDate={startDate}
          endDate={endDate}
          onDateChange={(startDate, endDate) => {
            console.log(startDate, endDate);
          }}
        />
      </div>
      {/* show other months */}
      <div className="flex items-center max-w-lg whitespace-nowrap mt-4">
        <label htmlFor="showOtherMonthsInputRef">show other months</label>
        <div className="relative w-full ml-4 border border-gray-300 dark:bg-zinc-700 dark:border-zinc-900">
          <input
            id="showOtherMonthsInputRef"
            ref={showOtherMonthsInputRef}
            type="text"
            className="block w-full cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500 "
          ></input>
        </div>
        <Datepicker
          inputRef={showOtherMonthsInputRef}
          startDate={startDate}
          endDate={endDate}
          showOtherMonths={true}
        />
      </div>
      {/* custom theme */}
      <div className="flex items-center max-w-lg whitespace-nowrap mt-4">
        <label htmlFor="customThemeInputRef">custom theme</label>
        <div className="relative w-full ml-4 border border-gray-300 dark:bg-zinc-700 dark:border-zinc-900">
          <input
            id="customThemeInputRef"
            ref={customThemeInputRef}
            type="text"
            className="block w-full cursor-pointer text-red- select-none bg-transparent p-4  focus:border-blue-500 focus:ring-blue-500"
          ></input>
        </div>
        <Datepicker
          inputRef={customThemeInputRef}
          startDate={startDate}
          endDate={endDate}
          theme={{
            cell: {
              active: 'bg-red-500 text-white dark:text-red-500 dark:bg-black',
              ranged: 'bg-red-300 text-white text-red-500 dark:bg-zinc-900',
              weekend: 'bg-red-50 dark:bg-zinc-600',
            },
            button: {
              submit: 'bg-white text-red-500 dark:bg-black',
              close: 'bg-white text-red-500 dark:bg-black',
              nav: 'bg-white text-red-500 dark:bg-black',
            },
          }}
        />
      </div>
      {/* custom locale with rtl enabled */}
      <div className="flex items-center max-w-lg whitespace-nowrap mt-4">
        <label htmlFor="customDateFormatInputRef">
          custom locale + rtl enabled
        </label>
        <div className="relative w-full ml-4 border border-gray-300 dark:bg-zinc-700 dark:border-zinc-900">
          <input
            id="customDateFormatInputRef"
            ref={customDateFormatInputRef}
            type="text"
            className="block w-full cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
          ></input>
        </div>
        <Datepicker
          inputRef={customDateFormatInputRef}
          startDate={startDate}
          endDate={endDate}
          locale={new Intl.Locale('Fa')}
          rtl={true}
        />
      </div>
      {/* custom title */}
      <div className="flex items-center max-w-lg whitespace-nowrap mt-4">
        <label htmlFor="customTitleInputRef">custom title</label>
        <div className="relative w-full ml-4 border border-gray-300 dark:bg-zinc-700 dark:border-zinc-900">
          <input
            id="customTitleInputRef"
            ref={customTitleInputRef}
            type="text"
            className="block w-full cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
          ></input>
        </div>
        <Datepicker
          inputRef={customTitleInputRef}
          startDate={startDate}
          endDate={endDate}
          title="Select trip dates"
        />
      </div>
    </div>
  );
}

export default App;
