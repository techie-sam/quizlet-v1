import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">{error.status}</h1>
        <p className="mt-4 text-lg text-gray-600">
          {error.status === 404
            ? "This page could not be found."
            : "An error occurred."}
        </p>
      </div>
    </div>
  );
}
