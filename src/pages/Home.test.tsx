import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { useMarvelStore } from "../store/marvelStore";
import Home from "./Home";

jest.mock("../store/marvelStore", () => ({
  useMarvelStore: jest.fn(),
}));

test("renders loading state", () => {
  (useMarvelStore as unknown as jest.Mock).mockReturnValue({
    loading: true,
    characters: [],
    fetchCharacters: jest.fn(),
  });
  render(<Home />);
  expect(screen.getByRole("status")).toHaveTextContent("Loading...");
});

test("renders error state", () => {
  (useMarvelStore as unknown as jest.Mock).mockReturnValue({
    error: "Error fetching data",
    characters: [],
    fetchCharacters: jest.fn(),
  });
  render(<Home />);
  expect(screen.getByRole("alert")).toHaveTextContent("Error fetching data");
});
