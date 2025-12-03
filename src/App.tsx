import { createBrowserRouter } from "react-router";
import { ClientsFees } from "./pages/ClientsFees";
import { CompanyFees } from "./pages/CompanyFees";
import { FeeRegistration } from "./pages/FeeRegistration";
import { Home } from "./pages/Home";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/clients-fees", element: <ClientsFees /> },
  { path: "/company-fees", element: <CompanyFees /> },
  { path: "fee-registration", element: <FeeRegistration /> },
]);

export { router };
