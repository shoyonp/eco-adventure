const FeedbackCard = ({ feedback }) => {
  const { name, image, rating, location, comment } = feedback;
  return (
    <div>
      <div className="card bg-base-100 w-80 shadow-xl">
        <div className="card-body">
          <div className="flex items-center gap-5">
            <img
              className="rounded-full w-[50px] h-[50px] object-cover "
              src={image}
              alt=""
            />
            <h2 className="card-title">{name}</h2>
          </div>
          <div className="font-medium text-base">
            Location: <span className="italic text-green-700">{location}</span>
          </div>
          <p className="text-black/60 text-sm">{comment}</p>
          <div className="flex items-center gap-5">
            Rating: {rating}{" "}
            <div className="">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
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
