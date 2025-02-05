import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import CharacterCard from "./index";

const mockCharacter = {
  id: 1,
  name: "Spider-Man",
  description: "A hero with spider-like abilities.",
  thumbnail: { path: "https://example.com/spiderman", extension: "jpg" },
};

test("renders character card with name and description", () => {
  render(<CharacterCard character={mockCharacter} />);
  expect(screen.getByRole("article")).toHaveAttribute(
    "aria-label",
    "Spider-Man"
  );
  expect(screen.getByText("Spider-Man")).toBeInTheDocument();
  expect(
    screen.getByText("A hero with spider-like abilities.")
  ).toBeInTheDocument();
});
