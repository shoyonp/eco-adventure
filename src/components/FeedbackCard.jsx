const FeedbackCard = ({ feedback }) => {
  const { name, image, rating, location, comment } = feedback;
  return (
    <div>
      <div className="card bg-[#FAFAF5] hover:bg-[#DCE9DC] shadow-md">
        <div className="card-body">
          <div className="flex items-center gap-5">
            <img
              className="rounded-full w-[50px] h-[50px] object-cover "
              src={image}
              alt=""
            />
            <h2 className="card-title text-[#333333]">{name}</h2>
          </div>
          <div className="font-medium text-base text-[#1B5E20]">
            Location: <span className="italic">{location}</span>
          </div>
          <p className="text-[#555555] text-sm">{comment}</p>
          <div className="flex items-center gap-3">
             {rating}{" "}
            <div className="">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-[#FBC02D]"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-[#FBC02D]"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-[#FBC02D]"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-[#FBC02D]"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-[#FBC02D]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
