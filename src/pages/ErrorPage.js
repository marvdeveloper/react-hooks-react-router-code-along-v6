// src/pages/ErrorPage.js

import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Whoops! Something went wrong!</h1>
      <p>{error.message}</p>
    </div>
  );
}

export default ErrorPage;
