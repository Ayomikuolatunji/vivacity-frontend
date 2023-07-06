import Gravatar from "react-gravatar";
import { Applicant, useGetApplicantMutation } from "../../redux/apis/crudAPI";

interface PictureCardProps {
  setData: React.Dispatch<React.SetStateAction<Applicant>>;
  data: Applicant;
}

const PictureCard: React.FC<PictureCardProps> = ({ setData, data }) => {
  const [getApplicant] = useGetApplicantMutation();

  const fetchData = async () => {
    try {
      getApplicant("9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d")
        .unwrap()
        .then((data) => {
          setData(data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-100 p-4">
      <div
        className="relative w-24 h-24 rounded-full overflow-hidden cursor-pointer"
        onClick={fetchData}
        data-testid="picture-card"
      >
        <Gravatar
          email="mathews.kyle@gmail.com"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-5">
        {Object.keys(data).length ? (
          <div className="relative  flex items-start justify-start">
            <div className="">
              <h3 className="text-xl font-semibold mb-2 text">
                {data.firstName} {data.lastName}
              </h3>
              <p className="text-sm text-red-500">{data.email}</p>
              <p className="text-sm mt-3">{data.phone}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PictureCard;
