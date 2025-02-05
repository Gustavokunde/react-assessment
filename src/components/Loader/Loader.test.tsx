import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Loader from "./index";

test("renders loading status", () => {
  render(<Loader />);
  expect(screen.getByRole("status")).toHaveTextContent("Loading...");
});
