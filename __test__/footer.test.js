import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer component", () => {
  it("should render footer with correct text", () => {
    render(<Footer />);
    const footerText = screen.getByText(/SUIVEZ-NOUS SUR/i);
    expect(footerText).toBeInTheDocument();
  });
  it("should render 5 social item", () => {
    render(<Footer />);
    const socialsAlt = [
      "facebook",
      "instagram",
      "linkedin",
      "twitter",
      "youtube",
    ];
    socialsAlt.forEach((item) => {
      expect(screen.getByAltText(item)).toBeInTheDocument();
    });
  });
});
