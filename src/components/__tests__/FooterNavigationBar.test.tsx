import { render, screen } from "@testing-library/react";
import FooterNavigationBar from "../FooterNavigationBar";
import "@testing-library/jest-dom";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} alt={props.alt || "mocked-image"} />;
  },
}));

describe("FooterNavigationBar", () => {
  it("renders calendar, home and chat labels", () => {
    render(<FooterNavigationBar />);

    expect(screen.getByText("Calendario")).toBeInTheDocument();
    expect(screen.getByText("Inicio")).toBeInTheDocument();
    expect(screen.getByText("Chat")).toBeInTheDocument();
  });

  it("renders 3 images", () => {
    render(<FooterNavigationBar />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(3);
  });
});
