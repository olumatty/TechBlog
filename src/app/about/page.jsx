'use client'
import { useEffect, useState } from "react";
import Loading from "./loading";


const about = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return <div>About</div>;
};

export default about;
