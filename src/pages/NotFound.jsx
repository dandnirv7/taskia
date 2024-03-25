import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center justify-center w-1/2 mx-auto text-center translate-y-1/3">
      <h1 className="font-bold text-9xl">Oops!</h1>
      <h2 className="mt-8 text-2xl font-bold uppercase">
        404 - Page Not Found
      </h2>
      <p className="text-lg">
        We can&rsquo;t find what you&rsquo;re looking for.
        <span className="block mt-3">
          The page{" "}
          <span className="italic text-gray-500">{location.pathname}</span> may
          have been moved or deleted. It is also possible that you made a small
          typo when entering the address - this happens even with us, so
          double-check it carefully.
        </span>
      </p>
      <Link
        to="/dashboard"
        className="bg-[#977FFF] uppercase text-white px-5 py-3 rounded-full mt-5"
      >
        Back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
