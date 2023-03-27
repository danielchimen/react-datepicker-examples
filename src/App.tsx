// React.
import { useState, useEffect } from 'react';

// Components.
import Datepicker, {
  OnDateChange,
  OnDateSelect,
} from '@dchimen/react-datepicker';

// Date helpers.
import { add, sub } from 'date-fns';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  materialLight,
  materialDark,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

function App() {
  const [startDate] = useState(add(new Date(), { days: 7 }));
  const [endDate] = useState(add(new Date(), { days: 14 }));
  const [minDate] = useState(sub(startDate, { months: 2 }));
  const [maxDate] = useState(add(startDate, { months: 2 }));
  const [darkMode, setDarkMode] = useState(false);

  const handleOnOpen = () => {
    console.log('handleOnOpen called');
  };

  const handleOnClose = () => {
    console.log('handleOnClose called');
  };

  const handleOnDateSelect: OnDateSelect = (date) => {
    console.log(date.toLocaleDateString());
  };

  const handleOnDateChange: OnDateChange = (startDate, endDate) => {
    console.log({ startDate, endDate });
  };

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
        <h2 className="text-xl">
          <code>Defaults</code>
        </h2>
        <p className="mt-4">No options.</p>
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
        <h2 className="text-xl">
          <code>startDate</code>
        </h2>
        <p className="mt-4">Set a start date.</p>
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
        <h2 className="text-xl">
          <code>endDate</code>
        </h2>
        <p className="mt-4">Set an end date.</p>
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
        <h2 className="text-xl">
          <code>minDate</code>
        </h2>
        <p className="mt-4">Set a minimum date.</p>
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
        <h2 className="text-xl">
          <code>maxDate</code>
        </h2>
        <p className="mt-4">Set a maximum date.</p>
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
        <h2 className="text-xl">
          <code>onOpen</code>
        </h2>
        <p className="mt-4">
          Execute a function when the datepicker has been opened.
        </p>
        <div>
          <SyntaxHighlighter
            language="typescript"
            showLineNumbers={true}
            style={darkMode ? materialDark : materialLight}
          >
            {
              '<Datepicker onOpen={handleOnOpen}>\n\t<input type="text"></input>\n</Datepicker>'
            }
          </SyntaxHighlighter>
        </div>
        <div>
          <label className="text-sm">
            Example
            <Datepicker onOpen={handleOnOpen}>
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
        <h2 className="text-xl">
          <code>onClose</code>
        </h2>
        <p className="mt-4">
          Execute a function when the datepicker has been closed.
        </p>
        <div>
          <SyntaxHighlighter
            language="typescript"
            showLineNumbers={true}
            style={darkMode ? materialDark : materialLight}
          >
            {
              '<Datepicker onClose={handleOnClose}>\n\t<input type="text"></input>\n</Datepicker>'
            }
          </SyntaxHighlighter>
        </div>
        <div>
          <label className="text-sm">
            Example
            <Datepicker onClose={handleOnClose}>
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
        <h2 className="text-xl">
          <code>onDateSelect</code>
        </h2>
        <p className="mt-4">Execute a function on date selection.</p>
        <div>
          <SyntaxHighlighter
            language="typescript"
            showLineNumbers={true}
            style={darkMode ? materialDark : materialLight}
          >
            {
              'import Datepicker, {\n\tOnDateSelect,\n} from "@dchimen/react-datepicker";\n\nfunction App() {\n\tconst handleOnDateSelect: OnDateSelect = (date) => {\n\t\tconsole.log(date.toLocaleDateString());\n\t};\n\n\t<Datepicker onDateSelect={handleOnDateSelect}>\n\t\t<input type="text"></input>\n\t</Datepicker>\n}'
            }
          </SyntaxHighlighter>
        </div>
        <div>
          <label className="text-sm">
            Example
            <Datepicker onDateSelect={handleOnDateSelect}>
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
        <h2 className="text-xl">
          <code>onDateChange</code>
        </h2>
        <p className="mt-4">
          Execute a function after date/s have been changed. The endDate
          returned from the callback will be of type null If it is not passed as
          a prop to the datepicker.
        </p>
        <div>
          <SyntaxHighlighter
            language="typescript"
            showLineNumbers={true}
            style={darkMode ? materialDark : materialLight}
          >
            {
              'import Datepicker, {\n\tOnDateChange,\n} from "@dchimen/react-datepicker";\n\nfunction App() {\n\tconst handleOnDateChange: OnDateChange = (startDate, endDate) => {\n\t\tconsole.log({ startDate, endDate });\n\t};\n\n\t<Datepicker onDateChange={handleOnDateSelect}>\n\t\t<input type="text"></input>\n\t</Datepicker>\n}'
            }
          </SyntaxHighlighter>
        </div>
        <div>
          <label className="text-sm">
            Example
            <Datepicker
              startDate={startDate}
              endDate={endDate}
              onDateChange={handleOnDateChange}
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
        <h2 className="text-xl">
          <code>title</code>
        </h2>
        <p className="mt-4">Set a title for the datepicker.</p>
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
        <h2 className="text-xl">
          <code>showOtherMonths</code>
        </h2>
        <p className="mt-4">Show other months.</p>
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
        <h2 className="text-xl">
          <code>closeOnSelect</code>
        </h2>
        <p className="mt-4">Close on date selection.</p>
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
        <h2 className="text-xl">
          <code>locale</code>
        </h2>
        <p className="mt-4">Set a custom locale.</p>
        <div>
          <SyntaxHighlighter
            language="typescript"
            showLineNumbers={true}
            style={darkMode ? materialDark : materialLight}
          >
            {
              '<Datepicker locale={new Intl.Locale("Fa")}>\n\t<input type="text"></input>\n</Datepicker>'
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
        <h2 className="text-xl">
          <code>theme</code>
        </h2>
        <p className="mt-4">
          Set a custom theme. You can use Tailwind CSS or your own styles here.
        </p>
        <div>
          <SyntaxHighlighter
            language="typescript"
            showLineNumbers={true}
            style={darkMode ? materialDark : materialLight}
          >
            {
              '<Datepicker theme={{\n\tbackground: "bg-gradient-to-b from-white to-emerald-200",\n\tcell: {\n\t\tactive: "bg-emerald-600",\n\t\tranged: "bg-emerald-300",\n\t\tweekend: "transparent",\n\t},\n\tbutton: {\n\t\tsubmit: "text-emerald-600",\n\t\tclose: "text-emerald-600",\n\t\tnav: "text-emerald-600",\n\t},\n}}>\n\t<input type="text"></input>\n</Datepicker>'
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
                background: 'bg-gradient-to-b from-white to-emerald-200',
                cell: {
                  active: 'bg-emerald-600',
                  ranged: 'bg-emerald-300',
                  weekend: 'transparent',
                },
                button: {
                  submit: 'text-emerald-600',
                  close: 'text-emerald-600',
                  nav: 'text-emerald-600',
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