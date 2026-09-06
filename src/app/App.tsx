import { RouterProvider } from "react-router/dom";
import { router } from "./providers";
import { Toaster } from "@/shared/toaster";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
