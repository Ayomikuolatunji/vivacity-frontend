import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { Applicant, useGetApplicantMutation } from "../../redux/apis/crudAPI";
import PictureCard from "./Profile";

jest.mock("../../redux/apis/crudAPI", () => ({
  useGetApplicantMutation: jest.fn(),
}));

describe("PictureCard", () => {
  const mockSetData = jest.fn();
  const mockData = {
    id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "1234567890",
  };

  beforeEach(() => {
    (useGetApplicantMutation as jest.Mock).mockReturnValue([
      () => Promise.resolve({ data: mockData }),
    ]);
  });

  it("should call useGetApplicantMutation and setData on click", async () => {
    render(<PictureCard setData={mockSetData} data={mockData} />);
    const card = screen.getByTestId("picture-card");
    fireEvent.click(card);
    await waitFor(() => {
      expect(useGetApplicantMutation).toHaveBeenCalledWith();
    });
  });

  it("should render user information when data is present", () => {
    render(<PictureCard setData={mockSetData} data={mockData} />);

    expect(
      screen.getByText(`${mockData.firstName} ${mockData.lastName}`)
    ).toBeInTheDocument();
    expect(screen.getByText(mockData.email)).toBeInTheDocument();
    expect(screen.getByText(mockData.phone)).toBeInTheDocument();
  });

  it("should not render user information when data is empty", () => {
    render(<PictureCard setData={mockSetData} data={{} as Applicant} />);

    expect(
      screen.queryByText(`${mockData.firstName} ${mockData.lastName}`)
    ).not.toBeInTheDocument();
    expect(screen.queryByText(mockData.email)).not.toBeInTheDocument();
    expect(screen.queryByText(mockData.phone)).not.toBeInTheDocument();
  });
});
