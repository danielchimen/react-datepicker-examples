// React.
import { ReactNode } from 'react';

// Syntax highlighter.
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export type CodeblockParams = {
  option: string;
  code: { __html: string };
  children: ReactNode;
};

const Codeblock = (params: CodeblockParams) => {
  const { option, code, children } = params;

  return (
    <div id={option} className="mt-6 p-4 border">
      <h2 className="text-xl">
        <code>{option}</code>
      </h2>
      <p className="mt-4">{children}</p>
      <div>
        <SyntaxHighlighter
          language="typescript"
          showLineNumbers={true}
          style={materialDark}
        >
          {code.__html}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Codeblock;
