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

  expect(screen.getByRole("img", { name: /Spider-Man/i })).toHaveAttribute(
    "alt",
    "Spider-Man"
  );

  expect(
    screen.getByText((content) =>
      content.includes("A hero with spider-like abilities.")
    )
  ).toBeInTheDocument();
});
