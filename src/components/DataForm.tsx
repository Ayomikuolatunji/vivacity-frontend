import React from "react";
import {
  Applicant,
  useDeleteApplicantMutation,
  useUpdateApplicantMutation,
} from "../redux/apis/crudAPI";

interface DataFormProps {
  data: Applicant;
  setData: React.Dispatch<React.SetStateAction<Applicant>>;
}

const DataForm: React.FC<DataFormProps> = ({ data, setData }) => {
  const [deleteApplicant] = useDeleteApplicantMutation();
  const [updateApplicant] = useUpdateApplicantMutation();

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
  const saveData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateApplicant({
      id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      phone: formData.phone,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    })
      .unwrap()
      .then((data) => {
        setData(data);
      });
  };

  const deleteApplicantAccount = () => {
    deleteApplicant("9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d")
      .unwrap()
      .then((data) => {
        setData({} as Applicant);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-2">Data Form</h2>
      <form onSubmit={saveData}>
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
            onClick={deleteApplicantAccount}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default DataForm;
