import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useShowNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const router = useRouter();

  useEffect(() => {
    window.onscroll = function () {
      handleNavbar();
    };

    function handleNavbar() {
      if (router.pathname === "/") {
        const offset = document.getElementById("main")?.offsetTop;
        setShowNavbar((offset as number) <= window.pageYOffset);
      }
    }
  });

  return showNavbar;
};
