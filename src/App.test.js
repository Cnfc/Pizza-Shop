import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Main Logo Text", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Sliceline/i);
  expect(linkElement).toBeInTheDocument();
});
