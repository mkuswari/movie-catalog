import MovieImage from "../../assets/movie.jpg";

const CardTopMovie = () => {
  return (
    <div className="group">
      <div className="w-72 h-96 bg-red-600 rounded-xl mb-3 overflow-hidden relative">
        <div className="z-10 absolute top-0 left-0 bottom-0 w-32 bg-white/5 backdrop-blur-lg flex">
          <h2 className="m-auto text-[150px] font-black text-red-600 drop-shadow-2xl group-hover:scale-90 transition-all ease-in-out duration-300">
            2
          </h2>
        </div>
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

export default CardTopMovie;
