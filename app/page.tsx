import { Suspense } from "react";
import Discover from "./components/Discover";
import Navbar from "./components/Navbar";
const format = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<p>Loading feed...</p>}>
        <Discover />
      </Suspense>
    </div>
  );
};

export default format;
