import TableGrid from "../TableGrid/TableGrid";
import "./App.css";

function App() {
  const numberList = Array.from(Array(144).keys());

  return (
    <div data-testid='app-load' className='App'>
      <header className='App-header'>Which? Front-end Exercise?</header>
      <pre>
        Note: The <span className='unselected-text'>Orange</span> color
        represent unselected fields and the{" "}
        <span className='selected-text'>blue </span>
        color represents the color fields that are multiple of the selection
      </pre>
      <TableGrid tableData={numberList} />
    </div>
  );
}

export default App;
