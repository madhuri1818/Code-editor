import React, { useState, useEffect } from 'react';
import './App.css';
const App = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [output, setOutput] = useState('');
  useEffect(() => {
    const com = `<html>${htmlCode}</html><style>${cssCode}</style><script>${jsCode}</script>`;
    setOutput(com);
  }, [htmlCode, cssCode, jsCode]);
  return (
    <div className="code-playground">
      <div className="code-editor">
        <div className="editor">
          <label id='x'>HTML</label>
          <textarea id="html" className="html" value={htmlCode} onChange={(e) => setHtmlCode(e.target.value)} placeholder="Enter HTML code here..."></textarea>
        </div>
        <div className="editor">
          <label id='x'>CSS</label>
          <textarea id="css" className="css" value={cssCode} onChange={(e) => setCssCode(e.target.value)} placeholder="Enter CSS code here..."></textarea>
        </div>
        <div className="editor">
          <label id='x'>JS</label>
          <textarea id="js" className="js" value={jsCode} onChange={(e) => setJsCode(e.target.value)} placeholder="Enter JS code here..."></textarea>
        </div>
      </div>
      {/* <div className="output-label">Output</div> */}
      <div className="out">
      <div className="output-label">Output</div>
        <iframe id="outputFrame" srcDoc={output}></iframe>
      </div>
    </div>
  );
};
export default App;
