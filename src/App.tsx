// React.
import { useState, useCallback } from 'react';

// Datepicker.
import Datepicker, {
  OnOpen,
  OnClose,
  OnDateChange,
  OnDateSelect,
  Theme,
  Label,
} from '@dchimen/react-datepicker';

// Datepicker styles.
import '@dchimen/react-datepicker/react-datepicker.css';

// Date helpers.
import { add, sub } from 'date-fns';

// Holidays.
import Holidays from 'date-holidays';

// Components
import Checkbox from '@components/Checkbox';
import Codeblock from '@components/Codeblock';

function App() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [startLabel, setStartLabel] = useState('');
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [endLabel, setEndLabel] = useState('');
  const [labels, setLabels] = useState<Label[]>([]);
  const [minDate, setMinDate] = useState<Date | null>(null);
  const [maxDate, setMaxDate] = useState<Date | null>(null);
  const [title, setTitle] = useState('');
  const [locale, setLocale] = useState('en-GB');
  const [showOtherMonths, setShowOtherMonths] = useState(false);
  const [showWeekNumbers, setShowWeekNumbers] = useState(false);
  const [closeOnSelect, setCloseOnSelect] = useState(false);
  const [theme, setTheme] = useState<Theme>(null);
  const [disabledDates, setDisabledDates] = useState<Date[] | null>(null);
  const [hasOnOpen, setHasOnOpen] = useState(false);
  const [hasOnClose, setHasOnClose] = useState(false);
  const [hasOnDateSelect, setHasOnDateSelect] = useState(false);
  const [hasOnDateChange, setHasOnDateChange] = useState(false);

  const toggleStartDate = () => {
    if (startDate) {
      setStartDate(null);
      return;
    }

    setStartDate(add(new Date(), { days: 7 }));
  };

  const toggleStartLabel = () => {
    if (startLabel) {
      setStartLabel('');
      return;
    }

    setStartLabel('Depart');
  };

  const toggleEndDate = () => {
    if (endDate) {
      setEndDate(null);
      setEndLabel('');
      return;
    }

    setEndDate(add(startDate || new Date(), { days: 14 }));
  };

  const toggleEndLabel = () => {
    if (endLabel) {
      setEndLabel('');
      return;
    }

    setEndLabel('Return');
  };

  const getHolidays = useCallback((locale?: string) => {
    const allDays = new Holidays(locale || 'GB').getHolidays(
      new Date().getFullYear(),
    );

    const holidays: Label[] = allDays.map((holiday) => ({
      date: holiday.start,
      label: holiday.name,
    }));

    return holidays;
  }, []);

  const toggleLabels = () => {
    if (labels.length) {
      setLabels([]);
      return;
    }

    setLabels(() => getHolidays());
  };

  const toggleMinDate = () => {
    if (minDate) {
      setMinDate(null);
      return;
    }

    setMinDate(sub(startDate || new Date(), { months: 2 }));
  };

  const toggleMaxDate = () => {
    if (maxDate) {
      setMaxDate(null);
      return;
    }

    setMaxDate(add(startDate || new Date(), { months: 2 }));
  };

  const toggleTitle = () => {
    setTitle((title) => {
      if (title) {
        return '';
      }

      return 'Select a date';
    });
  };

  const toggleShowOtherMonths = () => {
    setShowOtherMonths((showOtherMonths) => !showOtherMonths);
  };

  const toggleShowWeekNumbers = () => {
    setShowWeekNumbers((showWeekNumbers) => !showWeekNumbers);
  };

  const toggleCloseOnSelect = () => {
    setCloseOnSelect((closeOnSelect) => !closeOnSelect);
  };

  const toggleCustomTheme = () => {
    if (theme) {
      setTheme(null);
      return;
    }

    setTheme({
      background: 'bg-emerald-50',
      cell: {
        active: 'bg-emerald-300',
        ranged: 'bg-emerald-200',
        weekend: 'bg-emerald-100',
      },
      button: {
        submit: 'p-4 text-emerald-600',
        close: 'p-4 text-emerald-600',
        nav: 'text-emerald-600',
      },
      label: 'bg-white text-emerald-600',
    });
  };

  const toggleLocale = () => {
    const language = locale === 'en-GB' ? 'en-GB' : 'fa-IR';

    if (language === 'en-GB') {
      if (title) {
        setTitle('تاریخ را انتخاب کنید');
      }

      if (startLabel) {
        setStartLabel('تاریخ رفت');
      }

      if (endLabel) {
        setEndLabel('تاریخ برگشت');
      }

      if (labels.length) {
        setLabels(() => getHolidays('IR'));
      }

      document.documentElement.dir = 'rtl';
    }

    if (language === 'fa-IR') {
      if (title) {
        setTitle('Select a date');
      }

      if (startLabel) {
        setStartLabel('Depart');
      }

      if (endLabel) {
        setEndLabel('Return');
      }

      if (labels.length) {
        setLabels(() => getHolidays('GB'));
      }

      document.documentElement.dir = '';
    }

    setLocale(language === 'en-GB' ? 'fa-IR' : 'en-GB');
  };

  const toggleDisabledDates = () => {
    if (disabledDates) {
      setDisabledDates(null);
      return;
    }

    setDisabledDates([
      add(startDate || new Date(), { days: 2 }),
      add(startDate || new Date(), { days: 3 }),
      add(startDate || new Date(), { days: 4 }),
    ]);
  };

  const onOpen: OnOpen = () => {
    console.log('onOpen called');
  };

  const onClose: OnClose = () => {
    console.log('onClose called');
  };

  const onDateSelect: OnDateSelect = (selectedStartDate, selectedEndDate) => {
    console.log({ selectedStartDate, selectedEndDate });
  };

  const onDateChange: OnDateChange = (changedStartDate, changedEndDate) => {
    console.log({ changedStartDate, changedEndDate });

    setStartDate(changedStartDate);

    if (changedEndDate) {
      setEndDate(changedEndDate);
    }
  };

  return (
    <div className="container p-4 mx-auto max-w-4xl" dir="ltr">
      <h1 className="text-3xl">React Datepicker</h1>
      <div className="mt-4 p-4 border">
        <div>
          <label htmlFor="default">
            <h2 className="text-2xl">Example</h2>
            <Datepicker
              startDate={startDate}
              startLabel={startLabel}
              endDate={endDate}
              endLabel={endLabel}
              minDate={minDate}
              maxDate={maxDate}
              title={title}
              showOtherMonths={showOtherMonths}
              showWeekNumbers={showWeekNumbers}
              closeOnSelect={closeOnSelect}
              locale={locale}
              disabledDates={disabledDates}
              theme={theme}
              labels={labels}
              onOpen={hasOnOpen ? onOpen : null}
              onClose={hasOnClose ? onClose : null}
              onDateSelect={hasOnDateSelect ? onDateSelect : null}
              onDateChange={hasOnDateChange ? onDateChange : null}
            >
              <input
                type="text"
                id="default"
                className="block mt-2 w-full border cursor-pointer select-none bg-transparent p-2 focus:border-transparent focus:ring-blue-500"
              ></input>
            </Datepicker>
          </label>
        </div>
      </div>
      <div className="border mt-4 p-4">
        <h2 className="text-2xl">Options</h2>
        <div className="mt-4">
          {/* startDate */}
          <Checkbox
            id="toggle-start-date"
            label={`start date ${
              startDate
                ? `(${startDate.toLocaleDateString(
                    locale === 'en-GB' ? 'en-GB' : 'fa-IR',
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    },
                  )})`
                : ''
            }`}
            onChange={toggleStartDate}
          />

          {/* startLabel */}
          <Checkbox
            id="toggle-start-label"
            label={`start label ${startLabel ? `(${startLabel})` : ''}`}
            onChange={toggleStartLabel}
          />

          {/* end date */}
          <Checkbox
            id="toggle-end-date"
            label={`end date ${
              endDate
                ? `(${endDate.toLocaleDateString(
                    locale === 'en-GB' ? 'en-GB' : 'fa-IR',
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    },
                  )})`
                : ''
            }`}
            onChange={toggleEndDate}
          />

          {/* endLabel */}
          {endDate && (
            <Checkbox
              id="toggle-end-label"
              label={`end label ${endLabel ? `(${endLabel})` : ''}`}
              onChange={toggleEndLabel}
            />
          )}

          {/* minDate */}
          <Checkbox
            id="toggle-min-date"
            label={`min date ${
              minDate
                ? `(${minDate.toLocaleDateString(
                    locale === 'en-GB' ? 'en-GB' : 'fa-IR',
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    },
                  )})`
                : ''
            }`}
            onChange={toggleMinDate}
          />

          {/* maxDate */}
          <Checkbox
            id="toggle-max-date"
            label={`max date ${
              maxDate
                ? `(${maxDate.toLocaleDateString(
                    locale === 'en-GB' ? 'en-GB' : 'fa-IR',
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    },
                  )})`
                : ''
            }`}
            onChange={toggleMaxDate}
          />

          {/* title */}
          <Checkbox
            id="toggle-title"
            label={`title ${title ? `(${title})` : ''}`}
            onChange={toggleTitle}
          />

          {/* showOtherMonths */}
          <Checkbox
            id="toggle-show-other-months"
            label="show other months"
            onChange={toggleShowOtherMonths}
          />

          {/* showWeekNumbers */}
          <Checkbox
            id="toggle-show-week-numbers"
            label="show week numbers"
            onChange={toggleShowWeekNumbers}
          />

          {/* closeOnSelect */}
          <Checkbox
            id="toggle-close-on-select"
            label="close on select"
            onChange={toggleCloseOnSelect}
          />

          {/* locale */}
          <Checkbox
            id="toggle-locale"
            label={`locale ${locale ? `(${locale.toString()})` : ''}`}
            onChange={toggleLocale}
          />

          {/* disabledDates */}
          <Checkbox
            id="toggle-disabled-dates"
            label="disabled dates"
            onChange={toggleDisabledDates}
          />

          {/* theme */}
          <Checkbox
            id="toggle-theme"
            label="custom theme"
            onChange={toggleCustomTheme}
          />

          {/* labels */}
          <Checkbox id="toggle-labels" label="labels" onChange={toggleLabels} />

          {/* onOpen */}
          <Checkbox
            id="toggle-on-open"
            label="open callback (check console)"
            onChange={() => setHasOnOpen(!hasOnOpen)}
          />

          {/* onClose */}
          <Checkbox
            id="toggle-on-close"
            label="close callback (check console)"
            onChange={() => setHasOnClose(!hasOnClose)}
          />

          {/* onSelect */}
          <Checkbox
            id="toggle-on-select"
            label="select callback (check console)"
            onChange={() => setHasOnDateSelect(!hasOnDateSelect)}
          />

          {/* onChange */}
          <Checkbox
            id="toggle-on-change"
            label="change callback (check console)"
            onChange={() => setHasOnDateChange(!hasOnDateChange)}
          />
        </div>
      </div>
      {process.env.NODE_ENV !== 'development' && (
        <div className="mt-4 p-4 border">
          <h2 className="text-2xl">Documentation</h2>
          <Codeblock
            option="Defaults"
            code={{
              __html:
                '<Datepicker>\n\t<input type="text"></input>\n</Datepicker>',
            }}
          >
            <span>
              No options.{' '}
              <strong>The input element of type text is required</strong>. If no
              startDate is provided, the current date will be used.
            </span>
          </Codeblock>

          {/* startDate */}
          <Codeblock
            option="startDate"
            code={{
              __html:
                '<Datepicker startDate={new Date()}>\n\t<input type="text"></input>\n</Datepicker>',
            }}
          >
            <span>
              Sets a start date. If either endDate or maxDate are provided, they
              must come after startDate.
            </span>
          </Codeblock>

          {/* startLabel */}
          <Codeblock
            option="startLabel"
            code={{
              __html:
                '<Datepicker startLabel="Depart">\n\t<input type="text"></input>\n</Datepicker>',
            }}
          >
            <span>Sets a start label for the startDate.</span>
          </Codeblock>

          {/* endDate */}
          <Codeblock
            option="endDate"
            code={{
              __html:
                '<Datepicker endDate={new Date()}>\n\t<input type="text"></input>\n</Datepicker>',
            }}
          >
            <span>
              Sets an end date. If maxDate is provided it must come after
              endDate.
            </span>
          </Codeblock>

          {/* endLabel */}
          <Codeblock
            option="endLabel"
            code={{
              __html:
                '<Datepicker endLabel="Return">\n\t<input type="text"></input>\n</Datepicker>',
            }}
          >
            <span>Sets an end label for the endDate.</span>
          </Codeblock>

          {/* minDate */}
          <Codeblock
            option="minDate"
            code={{
              __html:
                '<Datepicker minDate={new Date()}>\n\t<input type="text"></input>\n</Datepicker>',
            }}
          >
            <span>
              Sets a minimum date. If minDate is provided it must come before
              maxDate. By default minDate is today.
            </span>
          </Codeblock>

          {/* maxDate */}
          <Codeblock
            option="maxDate"
            code={{
              __html:
                '<Datepicker maxDate={new Date()}>\n\t<input type="text"></input>\n</Datepicker>',
            }}
          >
            <span>
              Set a maximum date. The maxDate must be in the future. By default
              maxDate is a year from today.
            </span>
          </Codeblock>

          {/* title */}
          <Codeblock
            option="title"
            code={{
              __html:
                '<Datepicker title="Select a date">\n\t<input type="text"></input>\n</Datepicker>',
            }}
          >
            <span>Sets a title for the datepicker.</span>
          </Codeblock>

          {/* showOtherMonths */}
          <Codeblock
            option="showOtherMonths"
            code={{
              __html:
                '<Datepicker showOtherMonths>\n\t<input type="text"></input>\n</Datepicker>',
            }}
          >
            <span>Shows dates from the previous and next month.</span>
          </Codeblock>

          {/* showWeekNumbers */}
          <Codeblock
            option="showWeekNumbers"
            code={{
              __html:
                '<Datepicker showWeekNumbers>\n\t<input type="text"></input>\n</Datepicker>',
            }}
          >
            <span>Shows week numbers.</span>
          </Codeblock>

          {/* closeOnSelect */}
          <Codeblock
            option="closeOnSelect"
            code={{
              __html:
                '<Datepicker closeOnSelect>\n\t<input type="text"></input>\n</Datepicker>',
            }}
          >
            Closes the datepicker when a date is selected.
          </Codeblock>

          {/* locale */}
          <Codeblock
            option="locale"
            code={{
              __html:
                '<Datepicker locale="fa-IR">\n\t<input type="text"></input>\n</Datepicker>',
            }}
          >
            <span>
              Set the locale for the datepicker by passing a language tag. By
              default the locale is en-GB.
            </span>
          </Codeblock>

          {/* disabledDates */}
          <Codeblock
            option="disabledDates"
            code={{
              __html:
                '<Datepicker \n\tdisabledDates={[\n\t\tnew Date(), \n\t\tnew Date(),\n\t]}>\n\t<input type="text"></input>\n</Datepicker>',
            }}
          >
            <span>Disables dates so they cannot be selected.</span>
          </Codeblock>

          {/* theme */}
          <Codeblock
            option="theme"
            code={{
              __html:
                '<Datepicker \n\ttheme={{\n\t\tbackground: "bg-emerald-50",\n\t\tcell: {\n\t\t\tactive: "bg-emerald-300",\n\t\t\tranged: "bg-emerald-200",\n\t\t\tweekend: "bg-emerald-100",\n\t\t},\n\t\tbutton: {\n\t\t\tsubmit: "p-4 text-emerald-600",\n\t\t\tclose: "p-4 text-emerald-600",\n\t\t\tnav: "text-emerald-600",\n\t\t},\n\t\tlabel: "bg-white text-emerald-600"\n\t}}>\n\t<input type="text"></input>\n</Datepicker>',
            }}
          >
            <span>
              Sets a custom theme for the datepicker. All theme properties are
              optional. Below is an example of how TailwindCSS can be used to
              style the datepicker.
            </span>
          </Codeblock>

          {/* labels */}
          <Codeblock
            option="labels"
            code={{
              __html:
                '<Datepicker \n\tlabels={[\n\t\t{ date: new Date(), label: "..." }, \n\t\t{ date: new Date(), label: "..." },\n\t]}>\n\t<input type="text"></input>\n</Datepicker>',
            }}
          >
            <span>
              Sets custom labels for the datepicker. This is useful for things
              such as holidays.
            </span>
          </Codeblock>

          {/* onOpen */}
          <Codeblock
            option="onOpen"
            code={{
              __html:
                '<Datepicker \n\tonOpen={() => {\n\t\tconsole.log("Datepicker opened.")\n\t}}>\n\t<input type="text"></input>\n</Datepicker>',
            }}
          >
            <span>
              Callback function that executes when the datepicker has opened. Do
              not attempt to modify props passed to the datepicker in this
              function (e.g. startDate, endDate, etc...)
            </span>
          </Codeblock>

          {/* onClose */}
          <Codeblock
            option="onClose"
            code={{
              __html:
                '<Datepicker \n\tonClose={() => {\n\t\tconsole.log("Datepicker closed.")\n\t}}>\n\t<input type="text"></input>\n</Datepicker>',
            }}
          >
            <span>
              Callback function that executes when the datepicker has closed.
            </span>
          </Codeblock>

          {/* onDateSelect */}
          <Codeblock
            option="onDateSelect"
            code={{
              __html:
                '<Datepicker \n\tstartDate={startDate} \n\tendDate={endDate} \n\tonDateSelect={(start, end) => {\n\t\t console.log(start, end)\n\t}}>\n\t<input type="text"></input>\n</Datepicker>',
            }}
          >
            <span>
              Callback function that executes when a date has been selected. Do
              not attempt to modify props passed to the datepicker in this
              function (e.g. startDate, endDate, etc...)
            </span>
          </Codeblock>

          {/* onDateChange */}
          <Codeblock
            option="onDateChange"
            code={{
              __html:
                '<Datepicker \n\tstartDate={startDate} \n\tendDate={endDate} \n\tonDateChange={(start, end) => {\n\t\tsetStartDate(start);\n\t\tsetEndDate(end)\n\t}}>\n\t<input type="text"></input>\n</Datepicker>',
            }}
          >
            <span>
              Callback function that executes when the dates have been changed.
              It will execute after the datepicker has closed. This callback can
              be used to modify props passed to the datepicker like so:
            </span>
          </Codeblock>
        </div>
      )}
    </div>
  );
}

export default App;
