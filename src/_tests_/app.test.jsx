
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import Hero from "../src/components/Hero";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<Hero />);
    expect(screen.getByText("hero")).toBeInTheDocument();
  });
});
