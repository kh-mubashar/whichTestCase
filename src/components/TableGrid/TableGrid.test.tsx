import { fireEvent, render, screen } from "@testing-library/react";
import TableGrid from "./TableGrid";

const numberList = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]];

test("renders empty grid table", () => {
  render(<TableGrid />);
  const linkElement = screen.getByTestId("table-grid");
  expect(linkElement).toBeInTheDocument();
});

test("renders grid table Data", async () => {
  render(<TableGrid tableData={numberList} />);
  const linkElement = screen.getByTestId("table-grid");
  expect(linkElement).toBeInTheDocument();
  const DisplayVale = screen.getByText(/5/i);
  expect(DisplayVale).toBeInTheDocument();
});

test("highlight the multiple of selection", async () => {
  render(<TableGrid tableData={numberList} />);
  const eventTrigger = screen.getByTestId("trigger6");
  const expectedTrigger = screen.getByTestId("trigger12");
  fireEvent.click(eventTrigger);
  expect(eventTrigger).toHaveStyle("background-color: rgb(0, 159, 183)");
  expect(expectedTrigger).toHaveStyle("background-color: rgb(0, 159, 183)");
});
