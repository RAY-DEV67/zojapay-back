import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface ScrollToTopProps {
  children: ReactNode;
}

export function ScrollToTop(props: ScrollToTopProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
}
