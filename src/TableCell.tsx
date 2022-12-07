type tabelCellProps = {
  cellData: number;
};

function TabelCell({ cellData }: tabelCellProps) {
  return <div>{cellData}</div>;
}

export default TabelCell;
