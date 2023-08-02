import { useNavigate, useParams } from "react-router-dom";
import { useSearchMoviesQuery } from "../../services/moviesApi";
import { HashLoader } from "react-spinners";
import { CardMovie } from "../../components";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const [nextPage, setNextPage] = useState(false);
  const [prevPage, setPrevPage] = useState(false);

  const { query, page } = useParams();
  const navigate = useNavigate();

  const { data, error, isLoading } = useSearchMoviesQuery({
    query: query,
    page: page,
  });

  useEffect(() => {
    page <= 1 ? setPrevPage(false) : setPrevPage(true);
    data?.results.length < 20 ? setNextPage(false) : setNextPage(true);
  }, [data, page]);

  const handleNextPage = () => {
    navigate(`/search/${query}/${parseInt(page) + 1}`);
  };

  const handlePrevPage = () => {
    navigate(`/search/${query}/${parseInt(page) - 1}`);
  };

  return (
    <>
      {/* Section search result */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl text-white font-bold">
            Search Result for {query}
          </h2>
          {error ? (
            <p className="text-center text-xl text-red-600">
              Something went error
            </p>
          ) : isLoading ? (
            <div className="flex justify-center my-6">
              <HashLoader color="#ff3600" size={80} />
            </div>
          ) : data ? (
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-8">
              {data.total_results > 0 ? (
                data.results.map((item) => (
                  <CardMovie key={item.id} item={item} isFullWidth />
                ))
              ) : (
                <p>Not Found</p>
              )}
            </div>
          ) : null}

          {/* Pagination Component */}
          <div className="flex justify-center">
            <div className="flex gap-4 mt-10">
              <button
                className="border border-red-700 text-white hover:bg-red-700 rounded-md px-6 py-1 disabled:border-slate-600 disabled:bg-transparent"
                onClick={handlePrevPage}
                disabled={!prevPage}
              >
                Previous Page
              </button>
              <button
                className="border border-red-700 text-white hover:bg-red-700 rounded-md px-6 py-1 disabled:border-slate-600 disabled:bg-transparent"
                onClick={handleNextPage}
                disabled={!nextPage}
              >
                Next Page
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchPage;
