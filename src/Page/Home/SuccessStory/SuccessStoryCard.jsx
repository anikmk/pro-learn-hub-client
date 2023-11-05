import PropTypes from "prop-types";

const SuccessStoryCard = ({ data }) => {
  const { title, description, image, name, jobName, places } = data || "";
  return (
    <div className=" max-w-full lg:max-w-[390px]">
      <div className="card md:w-9/12 lg:w-full w-10/12 mx-auto bg-white rounded-3xl shadow-xl">
        <div className="card-body p-7">
          <h2 className="card-title  border-b-gray-300 border-b-2 text-base font-bold mb-3 pb-3 text-[#222]">
            {title}
          </h2>
          <p className="mb-8 text-justify text-[14px] text-[#444]">
            {description}..more
          </p>
          <div className="card-actions items-center flex gap-4">
            <div>
              <img src={image} alt="" />
            </div>
            <div>
              <h2 className="text-[#222] font-bold mb-1 text-base">{name}</h2>
              <p className="text-[#444] text-[14px]">{jobName}</p>
              <p className="text-[#444] text-[14px]">{places}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SuccessStoryCard.propTypes = {
  data: PropTypes.object,
};

export default SuccessStoryCard;
