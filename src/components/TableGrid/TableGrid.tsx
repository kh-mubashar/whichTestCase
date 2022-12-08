import React from "react";
import "./TableGrid.css";

type TableGridProps = {
  tableData?: number[];
};

function TableGrid({ tableData }: TableGridProps) {
  const [matchValue, setMatchValue] = React.useState(0);
  const getMultipleOf = (col: number) => {
    const multiples = [];
    for (let i = col; i <= 144; i = i + col) {
      multiples.push(i);
    }
    setMatchValue(col);
  };
  const checkIsMultiple = (value: number) => {
    if (value % matchValue === 0) {
      return true;
    }
    return false;
  };
  return (
    <div data-testid='table-grid' className='Grid-column'>
      {tableData &&
        tableData.map((row, index) => (
          <div key={index}>
            {/* {row.map((col: number, index: number) => ( */}
            <button
              data-testid={"trigger" + row}
              key={index}
              className='Grid-cell'
              style={{
                backgroundColor: checkIsMultiple(row) ? "#009FB7" : "#ECA400",
              }}
              onClick={() => getMultipleOf(row)}
            >
              {row}
            </button>
            {/* ))} */}
          </div>
        ))}
    </div>
  );
}
export default TableGrid;
