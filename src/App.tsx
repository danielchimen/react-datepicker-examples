// React.
import { useState, useEffect } from 'react';

// Components.
import Datepicker from '@dchimen/react-datepicker';

// Styles.
import './App.css';

// Date helpers.
import { add, sub } from 'date-fns';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  materialLight,
  materialDark,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

function App() {
  const startDate = add(new Date(), { days: 7 });
  const endDate = add(new Date(), { days: 14 });
  const minDate = sub(startDate, { months: 2 });
  const maxDate = add(startDate, { months: 2 });

  const [onOpen, setOnOpen] = useState('');
  const [onClose, setOnClose] = useState('');
  const [dateSelected, setDateSelected] = useState<null | Date>(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (!onOpen) return;
    window.alert(onOpen);
    setOnOpen('');
  }, [onOpen]);

  useEffect(() => {
    if (!onClose) return;
    window.alert(onClose);
    setOnClose('');
  }, [onClose]);

  useEffect(() => {
    if (!dateSelected) return;
    window.alert(`Date selected: ${dateSelected.toLocaleDateString()}`);
    setDateSelected(null);
  }, [dateSelected]);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setDarkMode(true);
    }
  }, [window]);

  return (
    <div className="container p-4 mx-auto max-w-4xl">
      <h1 className="text-2xl">Datepicker Examples</h1>
      <div className="mt-4 p-4 border">
        <h2 className="text-xl">Defaults</h2>
        <p className="mt-4">No options</p>
        <div>
          <SyntaxHighlighter
            language="typescript"
            showLineNumbers={true}
            style={darkMode ? materialDark : materialLight}
          >
            {'<Datepicker>\n\t<input type="text"></input>\n</Datepicker>'}
          </SyntaxHighlighter>
        </div>
        <div>
          <label htmlFor="default" className="text-sm">
            Example
            <Datepicker>
              <input
                type="text"
                className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
              ></input>
            </Datepicker>
          </label>
        </div>
      </div>
      {/* startDate */}
      <div className="mt-6 p-4 border">
        <h2 className="text-xl">startDate</h2>
        <p className="mt-4">Set an start date</p>
        <div>
          <SyntaxHighlighter
            language="typescript"
            showLineNumbers={true}
            style={darkMode ? materialDark : materialLight}
          >
            {
              '<Datepicker startDate={new Date()}>\n\t<input type="text"></input>\n</Datepicker>'
            }
          </SyntaxHighlighter>
        </div>
        <div>
          <label className="text-sm">
            Example
            <Datepicker startDate={startDate}>
              <input
                type="text"
                className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
              ></input>
            </Datepicker>
          </label>
        </div>
      </div>
      {/* endDate */}
      <div className="mt-6 p-4 border">
        <h2 className="text-xl">endDate</h2>
        <p className="mt-4">Set an end date</p>
        <div>
          <SyntaxHighlighter
            language="typescript"
            showLineNumbers={true}
            style={darkMode ? materialDark : materialLight}
          >
            {
              '<Datepicker endDate={new Date()}>\n\t<input type="text"></input>\n</Datepicker>'
            }
          </SyntaxHighlighter>
        </div>
        <div>
          <label className="text-sm">
            Example
            <Datepicker endDate={endDate}>
              <input
                type="text"
                className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
              ></input>
            </Datepicker>
          </label>
        </div>
      </div>
      {/* minDate */}
      <div className="mt-6 p-4 border">
        <h2 className="text-xl">minDate</h2>
        <p className="mt-4">Set a minimum date</p>
        <div>
          <SyntaxHighlighter
            language="typescript"
            showLineNumbers={true}
            style={darkMode ? materialDark : materialLight}
          >
            {
              '<Datepicker minDate={new Date()}>\n\t<input type="text"></input>\n</Datepicker>'
            }
          </SyntaxHighlighter>
        </div>
        <div>
          <label className="text-sm">
            Example
            <Datepicker minDate={minDate}>
              <input
                type="text"
                className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
              ></input>
            </Datepicker>
          </label>
        </div>
      </div>
      {/* maxDate */}
      <div className="mt-6 p-4 border">
        <h2 className="text-xl">maxDate</h2>
        <p className="mt-4">Set a maximum date</p>
        <div>
          <SyntaxHighlighter
            language="typescript"
            showLineNumbers={true}
            style={darkMode ? materialDark : materialLight}
          >
            {
              '<Datepicker maxDate={new Date()}>\n\t<input type="text"></input>\n</Datepicker>'
            }
          </SyntaxHighlighter>
        </div>
        <div>
          <label className="text-sm">
            Example
            <Datepicker maxDate={maxDate}>
              <input
                type="text"
                className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
              ></input>
            </Datepicker>
          </label>
        </div>
      </div>
      {/* onOpen */}
      <div className="mt-6 p-4 border">
        <h2 className="text-xl">onOpen</h2>
        <p className="mt-4">
          Execute a function when the datepicker has been opened
        </p>
        <div>
          <SyntaxHighlighter
            language="typescript"
            showLineNumbers={true}
            style={darkMode ? materialDark : materialLight}
          >
            {
              '<Datepicker onOpen={() => console.log("Datepicker open")}>\n\t<input type="text"></input>\n</Datepicker>'
            }
          </SyntaxHighlighter>
        </div>
        <div>
          <label className="text-sm">
            Example
            <Datepicker onOpen={() => setOnOpen('Datepicker open')}>
              <input
                type="text"
                className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
              ></input>
            </Datepicker>
          </label>
        </div>
      </div>
      {/* onClose */}
      <div className="mt-6 p-4 border">
        <h2 className="text-xl">onClose</h2>
        <p className="mt-4">
          Execute a function when the datepicker has been closed
        </p>
        <div>
          <SyntaxHighlighter
            language="typescript"
            showLineNumbers={true}
            style={darkMode ? materialDark : materialLight}
          >
            {
              '<Datepicker onClose={() => console.log("Datepicker closed")}>\n\t<input type="text"></input>\n</Datepicker>'
            }
          </SyntaxHighlighter>
        </div>
        <div>
          <label className="text-sm">
            Example
            <Datepicker onClose={() => setOnClose('Datepicker closed')}>
              <input
                type="text"
                className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
              ></input>
            </Datepicker>
          </label>
        </div>
      </div>
      {/* onDateSelect */}
      <div className="mt-6 p-4 border">
        <h2 className="text-xl">onDateSelect</h2>
        <p className="mt-4">Execute a function on date selection</p>
        <div>
          <SyntaxHighlighter
            language="typescript"
            showLineNumbers={true}
            style={darkMode ? materialDark : materialLight}
          >
            {
              '<Datepicker onDateSelect={(selectedDate) => console.log(selectedDate)}>\n\t<input type="text"></input>\n</Datepicker>'
            }
          </SyntaxHighlighter>
        </div>
        <div>
          <label className="text-sm">
            Example
            <Datepicker
              onDateSelect={(selectedDate) => setDateSelected(selectedDate)}
            >
              <input
                type="text"
                className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
              ></input>
            </Datepicker>
          </label>
        </div>
      </div>
      {/* onDateChange */}
      <div className="mt-6 p-4 border">
        <h2 className="text-xl">onDateChange</h2>
        <p className="mt-4">
          Execute a function after date/s have been changed
        </p>
        <div>
          <SyntaxHighlighter
            language="typescript"
            showLineNumbers={true}
            style={darkMode ? materialDark : materialLight}
          >
            {
              '<Datepicker onDateChange={(startDate: Date, endDate: Date) => console.log(startDate, endDate)}>\n\t<input type="text"></input>\n</Datepicker>'
            }
          </SyntaxHighlighter>
        </div>
        <div>
          <label className="text-sm">
            Example
            <Datepicker
              startDate={startDate}
              endDate={endDate}
              onDateChange={(startDate, endDate) => {
                console.log(startDate, endDate);
              }}
            >
              <input
                type="text"
                className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
              ></input>
            </Datepicker>
          </label>
        </div>
      </div>
      {/* title */}
      <div className="mt-6 p-4 border">
        <h2 className="text-xl">title</h2>
        <p className="mt-4">Set a title for the datepicker</p>
        <div>
          <SyntaxHighlighter
            language="typescript"
            showLineNumbers={true}
            style={darkMode ? materialDark : materialLight}
          >
            {
              '<Datepicker title="Select date">\n\t<input type="text"></input>\n</Datepicker>'
            }
          </SyntaxHighlighter>
        </div>
        <div>
          <label className="text-sm">
            Example
            <Datepicker title="Select date">
              <input
                type="text"
                className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
              ></input>
            </Datepicker>
          </label>
        </div>
      </div>
      {/* showOtherMonths */}
      <div className="mt-6 p-4 border">
        <h2 className="text-xl">showOtherMonths</h2>
        <p className="mt-4">Show other months</p>
        <div>
          <SyntaxHighlighter
            language="typescript"
            showLineNumbers={true}
            style={darkMode ? materialDark : materialLight}
          >
            {
              '<Datepicker showOtherMonths>\n\t<input type="text"></input>\n</Datepicker>'
            }
          </SyntaxHighlighter>
        </div>
        <div>
          <label className="text-sm">
            Example
            <Datepicker showOtherMonths>
              <input
                type="text"
                className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
              ></input>
            </Datepicker>
          </label>
        </div>
      </div>
      {/* closeOnSelect */}
      <div className="mt-6 p-4 border">
        <h2 className="text-xl">closeOnSelect</h2>
        <p className="mt-4">Close on date selection</p>
        <div>
          <SyntaxHighlighter
            language="typescript"
            showLineNumbers={true}
            style={darkMode ? materialDark : materialLight}
          >
            {
              '<Datepicker closeOnSelect>\n\t<input type="text"></input>\n</Datepicker>'
            }
          </SyntaxHighlighter>
        </div>
        <div>
          <label className="text-sm">
            Example
            <Datepicker closeOnSelect>
              <input
                type="text"
                className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
              ></input>
            </Datepicker>
          </label>
        </div>
      </div>
      {/* locale */}
      <div id="locale" className="mt-6 p-4 border">
        <h2 className="text-xl">locale + rtl</h2>
        <p className="mt-4">Locale with optional rtl support</p>
        <div>
          <SyntaxHighlighter
            language="typescript"
            showLineNumbers={true}
            style={darkMode ? materialDark : materialLight}
          >
            {
              '<Datepicker locale={new Intl.Locale("Fa")} rtl={true}>\n\t<input type="text"></input>\n</Datepicker>'
            }
          </SyntaxHighlighter>
        </div>
        <div>
          <label className="text-sm">
            Example
            <Datepicker locale={new Intl.Locale('Fa')} rtl>
              <input
                type="text"
                className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
              ></input>
            </Datepicker>
          </label>
        </div>
      </div>
      {/* theme */}
      <div id="theme" className="mt-6 p-4 border">
        <h2 className="text-xl">theme</h2>
        <p className="mt-4">custom theme</p>
        <div>
          <SyntaxHighlighter
            language="typescript"
            showLineNumbers={true}
            style={darkMode ? materialDark : materialLight}
          >
            {
              '<Datepicker theme={{\n\tcell: {\n\t\tactive: "bg-red-500 text-white dark:text-red-500 dark:bg-black",\n\t\tranged: "bg-red-300 text-white text-red-500 dark:bg-zinc-900",\n\t\tweekend: "bg-red-50 dark:bg-zinc-600",\n\t},\n\tbutton: {\n\t\tsubmit: "bg-white text-red-500 dark:bg-black",\n\t\tclose: "bg-white text-red-500 dark:bg-black",\n\t\tnav: "bg-white text-red-500 dark:bg-black",\n\t},\n}}>\n\t<input type="text"></input>\n</Datepicker>'
            }
          </SyntaxHighlighter>
        </div>
        <div>
          <label className="text-sm">
            Example
            <Datepicker
              startDate={startDate}
              endDate={endDate}
              theme={{
                cell: {
                  active:
                    'bg-red-500 text-white dark:text-red-500 dark:bg-black',
                  ranged: 'bg-red-300 text-white text-red-500 dark:bg-zinc-900',
                  weekend: 'bg-red-50 dark:bg-zinc-600',
                },
                button: {
                  submit: 'bg-white text-red-500 dark:bg-black',
                  close: 'bg-white text-red-500 dark:bg-black',
                  nav: 'bg-white text-red-500 dark:bg-black',
                },
              }}
            >
              <input
                type="text"
                className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
              ></input>
            </Datepicker>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
