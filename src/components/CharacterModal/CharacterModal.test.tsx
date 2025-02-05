import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import CharacterModal from "../CharacterModal";

const mockCharacter = {
  id: 1,
  name: "Iron Man",
  description: "Genius, billionaire, playboy, philanthropist.",
  thumbnail: { path: "https://example.com/image", extension: "jpg" },
};

describe("CharacterModal Component", () => {
  it("renders character details correctly", () => {
    render(
      <CharacterModal onCloseModal={jest.fn()} character={mockCharacter} />
    );

    expect(
      screen.getByRole("heading", { name: /iron man/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/genius, billionaire, playboy, philanthropist./i)
    ).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /iron man/i })).toHaveAttribute(
      "src",
      "https://example.com/image.jpg"
    );
  });

  it("displays default text when description is missing", () => {
    const characterWithoutDescription = { ...mockCharacter, description: "" };
    render(
      <CharacterModal
        onCloseModal={jest.fn()}
        character={characterWithoutDescription}
      />
    );

    expect(screen.getByText(/no description available./i)).toBeInTheDocument();
  });

  it("calls onCloseModal when close button is clicked", () => {
    const onCloseMock = jest.fn();
    render(
      <CharacterModal onCloseModal={onCloseMock} character={mockCharacter} />
    );

    const closeButton = screen.getByTestId("close");
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
