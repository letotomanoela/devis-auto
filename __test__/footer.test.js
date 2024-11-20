import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer component", () => {
  it("should render footer with correct text", () => {
    render(<Footer />);
    const footerText = screen.getByText(/SUIVEZ-NOUS SUR/i);
    expect(footerText).toBeInTheDocument();
  });
});
