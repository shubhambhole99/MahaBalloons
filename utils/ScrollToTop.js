import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const { pathname } = usePathname();

  let updatepath = pathname.split("/");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
