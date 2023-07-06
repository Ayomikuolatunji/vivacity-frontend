import React, { useState } from "react";
import DataForm from "./components/DetaForms/DataForm";
import PictureCard from "./components/Profile/Profile";
import { Applicant } from "./redux/apis/crudAPI";
import Header from "./components/Header"
import Footer from "./components/Footer"

const App: React.FC = () => {
  const [data, setData] = useState<Applicant>({} as Applicant);

  return (
    <>
    <Header/>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">My Profile</h1>
        <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
          <PictureCard data={data} setData={setData} />
          {Object.keys(data).length ? (
            <DataForm data={data} setData={setData} />
          ) : null}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default App;

// 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
