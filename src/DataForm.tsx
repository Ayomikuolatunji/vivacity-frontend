import React from "react";
import {
  Applicant,
  useDeleteApplicantMutation,
} from "./redux/apis/crudAPI";

interface DataFormProps {
  data: Applicant;
  saveData: (e: React.FormEvent<HTMLFormElement>, formData: Applicant) => void;
}

const DataForm: React.FC<DataFormProps> = ({ data, saveData }) => {
  const [deleteApplicant] = useDeleteApplicantMutation();

  const [formData, setFormData] = React.useState({
    firstName: data.firstName || "",
    lastName: data.lastName || "",
    email: data.email || "",
    phone: data.phone || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const deleteData = () => {
    console.log("Deleting data");
  };

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-2">Data Form</h2>
      <form onSubmit={(e) => saveData(e, formData)}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block font-semibold">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block font-semibold">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-semibold">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <div className="flex justify-start items-center gap-3">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded font-semibold"
          >
            Save
          </button>
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded font-semibold"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default DataForm;
