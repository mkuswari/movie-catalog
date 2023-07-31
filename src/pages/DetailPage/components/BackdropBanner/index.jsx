import BackdropImage from "../../../../assets/backdrop.jpg";
import MovieImage from "../../../../assets/movie.jpg";
import { FiPlayCircle } from "react-icons/fi";

const BackdropBanner = () => {
  return (
    <div className="h-[34rem] md:h-[50rem] relative">
      <div className="container flex justify-center">
        <div className="flex gap-10 items-center absolute z-40 translate-y-1/2">
          <div className="w-64 h-96 rounded-xl overflow-hidden shadow-2xl hidden md:flex">
            <img
              src={MovieImage}
              alt="Movie Image"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="max-w-xl p-5 md:p-0">
            <button className="px-3 py-2 bg-red-600 shadow-xl text-white font-semibold mb-3 rounded-sm flex gap-2 items-center">
              <FiPlayCircle size={24} />
              Watch Trailer
            </button>
            <h2 className="text-white drop-shadow-2xl text-5xl font-extrabold">
              The Flash
            </h2>
            <div className="flex gap-2 my-3">
              <span className="bg-red-600 px-2 rounded-lg text-white text-sm">
                Action
              </span>
              <span className="bg-red-600 px-2 rounded-lg text-white text-sm">
                Adventure
              </span>
              <span className="bg-red-600 px-2 rounded-lg text-white text-sm">
                Science Fiction
              </span>
            </div>
            <p className="text-white leading-relaxed drop-shadow-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquid exercitationem quisquam non doloribus vitae
              blanditiis architecto. Tempore, sed laborum modi voluptatibus
              deserunt corrupti nisi alias eius error dolorem ullam.
            </p>
          </div>
        </div>
      </div>
      <img
        src={BackdropImage}
        alt="Backdrop Image"
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-slate-800 to-slate-800/70"></div>
    </div>
  );
};

export default BackdropBanner;
