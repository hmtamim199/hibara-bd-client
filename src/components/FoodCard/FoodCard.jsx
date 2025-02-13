const FoodCard = ({ item }) => {
  const { name, price, recipe, image } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn ">Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
