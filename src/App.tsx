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
  const [dateChange, setDateChange] = useState<null | Date>(null);
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
    if (!dateChange) return;
    window.alert(`Date selected: ${dateChange.toLocaleDateString()}`);
    setDateChange(null);
  }, [dateChange]);

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
        <h2 className="text-lg">Default (no options)</h2>
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
          </label>
          <Datepicker>
            <input
              id="default"
              type="text"
              className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
            ></input>
          </Datepicker>
        </div>
      </div>

      <div className="mt-6 p-4 border">
        <h2 className="text-lg">Set a start date</h2>
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
          <label htmlFor="startdate" className="text-sm">
            Example
          </label>
          <Datepicker startDate={startDate}>
            <input
              id="startdate"
              type="text"
              className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
            ></input>
          </Datepicker>
        </div>
      </div>

      <div className="mt-6 p-4 border">
        <h2 className="text-lg">Set an end date</h2>
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
          <label htmlFor="enddate" className="text-sm">
            Example
          </label>
          <Datepicker endDate={endDate}>
            <input
              id="enddate"
              type="text"
              className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
            ></input>
          </Datepicker>
        </div>
      </div>

      <div className="mt-6 p-4 border">
        <h2 className="text-lg">Set a minimum date</h2>
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
          <label htmlFor="mindate" className="text-sm">
            Example
          </label>
          <Datepicker minDate={minDate}>
            <input
              id="mindate"
              type="text"
              className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
            ></input>
          </Datepicker>
        </div>
      </div>

      <div className="mt-6 p-4 border">
        <h2 className="text-lg">Set a maximum date</h2>
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
          <label htmlFor="maxdate" className="text-sm">
            Example
          </label>
          <Datepicker maxDate={maxDate}>
            <input
              id="maxdate"
              type="text"
              className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
            ></input>
          </Datepicker>
        </div>
      </div>

      <div className="mt-6 p-4 border">
        <h2 className="text-lg">
          Execute a function when the datepicker has been opened
        </h2>
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
          <label htmlFor="onopen" className="text-sm">
            Example
          </label>
          <Datepicker onOpen={() => setOnOpen('Datepicker open')}>
            <input
              id="onopen"
              type="text"
              className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
            ></input>
          </Datepicker>
        </div>
      </div>

      <div className="mt-6 p-4 border">
        <h2 className="text-lg">
          Execute a function when the datepicker has been closed
        </h2>
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
          <label htmlFor="onclose" className="text-sm">
            Example
          </label>
          <Datepicker onClose={() => setOnClose('Datepicker closed')}>
            <input
              id="onclose"
              type="text"
              className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
            ></input>
          </Datepicker>
        </div>
      </div>

      <div className="mt-6 p-4 border">
        <h2 className="text-lg">
          Execute a function when a date has been selected
        </h2>
        <div>
          <SyntaxHighlighter
            language="typescript"
            showLineNumbers={true}
            style={darkMode ? materialDark : materialLight}
          >
            {
              '<Datepicker onDateChange={(selectedDate) => console.log(selectedDate)}>\n\t<input type="text"></input>\n</Datepicker>'
            }
          </SyntaxHighlighter>
        </div>
        <div>
          <label htmlFor="onclose" className="text-sm">
            Example
          </label>
          <Datepicker
            onDateChange={(selectedDate) => setDateChange(selectedDate)}
          >
            <input
              id="onclose"
              type="text"
              className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
            ></input>
          </Datepicker>
        </div>
      </div>

      <div className="mt-6 p-4 border">
        <h2 className="text-lg">Set a title for the datepicker</h2>
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
          <label htmlFor="title" className="text-sm">
            Example
          </label>
          <Datepicker title="Select date">
            <input
              id="title"
              type="text"
              className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
            ></input>
          </Datepicker>
        </div>
      </div>

      <div className="mt-6 p-4 border">
        <h2 className="text-lg">Show other months</h2>
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
          <label htmlFor="showothermonths" className="text-sm">
            Example
          </label>
          <Datepicker showOtherMonths>
            <input
              id="showothermonths"
              type="text"
              className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
            ></input>
          </Datepicker>
        </div>
      </div>

      <div className="mt-6 p-4 border">
        <h2 className="text-lg">Close on date selection</h2>
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
          <label htmlFor="closeonselect" className="text-sm">
            Example
          </label>
          <Datepicker closeOnSelect>
            <input
              id="closeonselect"
              type="text"
              className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
            ></input>
          </Datepicker>
        </div>
      </div>

      <div className="mt-6 p-4 border">
        <h2 className="text-lg">Locale with RTL support</h2>
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
          <label htmlFor="locale" className="text-sm">
            Example
          </label>
          <Datepicker locale={new Intl.Locale('Fa')} rtl>
            <input
              id="locale"
              type="text"
              className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
            ></input>
          </Datepicker>
        </div>
      </div>

      <div className="mt-6 p-4 border">
        <h2 className="text-lg">Custom theme</h2>
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
          <label htmlFor="theme" className="text-sm">
            Example
          </label>
          <Datepicker
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
          >
            <input
              id="theme"
              type="text"
              className="block w-full border cursor-pointer select-none bg-transparent p-4 focus:border-blue-500 focus:ring-blue-500"
            ></input>
          </Datepicker>
        </div>
      </div>
    </div>
  );
}

export default App;
