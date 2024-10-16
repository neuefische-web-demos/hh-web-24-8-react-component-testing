import Movie from ".";
import { screen, render } from "@testing-library/react";

test("renders a movie", () => {
  render(<Movie name="The Matrix" />);

  const matrixHeading = screen.getByRole("heading", {
    name: "The Matrix",
  });

  expect(matrixHeading).toBeInTheDocument();
});
