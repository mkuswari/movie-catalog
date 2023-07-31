import MovieImage from "../../assets/movie.jpg";

const CardMovie = () => {
  return (
    <div className="group">
      <div className="w-72 h-96 bg-red-600 group-hover:shadow-2xl group-hover:shadow-red-600/25 rounded-xl mb-3 overflow-hidden transition-all ease-in-out duration-200">
        <img
          src={MovieImage}
          alt="Movie Image"
          className="w-full h-full object-cover object-center group-hover:scale-125 transition-all ease-in-out duration-300"
        />
      </div>
      <h2 className="text-lg font-medium text-white">Movie Title</h2>
      <p className="text-base text-slate-200">15 May, 2023</p>
    </div>
  );
};

export default CardMovie;
