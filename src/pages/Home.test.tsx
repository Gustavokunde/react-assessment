import { jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "../pages/Home";
import { useMarvelStore } from "../store/marvelStore";

// Mock Zustand store
jest.mock("../store/marvelStore", () => ({
  useMarvelStore: jest.fn(),
}));

describe("Home Component", () => {
  it("renders the loading state", () => {
    (useMarvelStore as unknown as jest.Mock).mockReturnValue({
      loading: true,
      error: null,
      characters: [],
      fetchCharacters: jest.fn(),
    });

    render(<Home />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("renders an error message", () => {
    (useMarvelStore as unknown as jest.Mock).mockReturnValue({
      loading: false,
      error: "Error fetching data",
      characters: [],
      fetchCharacters: jest.fn(),
    });

    render(<Home />);
    expect(screen.getByText("Error fetching data")).toBeInTheDocument();
  });

  it("renders character cards when data is available", () => {
    (useMarvelStore as unknown as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      characters: [
        {
          id: 1,
          name: "Iron Man",
          description: "Genius billionaire",
          thumbnail: { path: "https://example.com/image", extension: "jpg" },
        },
      ],
      fetchCharacters: jest.fn(),
    });

    render(<Home />);

    expect(screen.getByText("Iron Man")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /Iron Man/i })).toHaveAttribute(
      "src",
      "https://example.com/image.jpg"
    );
  });
});
