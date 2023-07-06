import React, { useState } from "react";
import DataForm from "./DataForm";
import PictureCard from "./Profile";
import {
  Applicant,
  useGetApplicantMutation,
  useUpdateApplicantMutation,
} from "./redux/apis/crudAPI";

const App: React.FC = () => {
  const [data, setData] = useState<Applicant>({} as Applicant);
  const [getApplicant] = useGetApplicantMutation();
  const [updateApplicant] = useUpdateApplicantMutation();

  const fetchData = async () => {
    try {
      getApplicant("9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d")
        .unwrap()
        .then((data: any) => {
          setData(data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const saveData = (
    e: React.FormEvent<HTMLFormElement>,
    formData: Applicant
  ) => {
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>
      <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
        <PictureCard onClick={fetchData} data={data} />
        {Object.keys(data).length ? (
          <DataForm data={data} saveData={saveData} />
        ) : null}
      </div>
    </div>
  );
};

export default App;

// 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
