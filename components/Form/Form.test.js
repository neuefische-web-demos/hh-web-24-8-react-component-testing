import Form from ".";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("calls the submit function when the form is submitted", async () => {
  const handleAddMovie = jest.fn();
  const user = userEvent.setup();

  render(<Form onAddMovie={handleAddMovie} />);

  const input = screen.getByLabelText("Name");
  await user.type(input, "The Matrix");

  const button = screen.getByRole("button", { name: "Add" });
  await user.click(button);

  expect(handleAddMovie).toHaveBeenCalledTimes(1);
});
