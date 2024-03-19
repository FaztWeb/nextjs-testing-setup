import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("Home Page", () => {
  beforeEach(() => {});

  it("should render home page", () => {
    render(<HomePage />);
    expect(screen.getByText("Templates")).toBeInTheDocument();
  });

  it("should render 'Get Started by'", () => {
    render(<HomePage />);
    expect(screen.getByText(/Get started by/i)).toBeInTheDocument();
  });

  it('should render just "Deploy" word in home page', () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", {
        name: /deploy/i,
      })
    ).toBeInTheDocument();
  });
});
