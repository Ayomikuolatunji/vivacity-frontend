import Gravatar from "react-gravatar";
import { Applicant } from "./redux/apis/crudAPI";

const PictureCard: React.FC<{ onClick: () => void; data: Applicant }> = ({
  onClick,
  data,
}) => {
      console.log(data);
  return (
    <div className="bg-gray-100 p-4">
      <div
        className="relative w-24 h-24 rounded-full overflow-hidden cursor-pointer"
        onClick={onClick}
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
