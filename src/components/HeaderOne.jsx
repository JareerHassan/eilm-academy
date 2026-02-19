"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import $ from "jquery";
import { usePathname } from "next/navigation";

const HeaderOne = () => {
  let pathname = usePathname();
  const [scroll, setScroll] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("select2").then(() => {
        const selectElement = $(".js-example-basic-single");
        if (selectElement.length > 0) {
          selectElement.select2();
        }
      });
    }

    window.onscroll = () => {
      if (window.pageYOffset < 150) setScroll(false);
      else setScroll(true);
      return () => (window.onscroll = null);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    if (!isMenuActive) document.body.classList.add("scroll-hide-sm");
    else document.body.classList.remove("scroll-hide-sm");
  };

  const closeMenu = () => {
    setIsMenuActive(false);
    document.body.classList.remove("scroll-hide-sm");
  };

  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmenuClick = (index) => {
    if (windowWidth < 992) {
      setActiveSubmenu((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Courses", href: "/course" },
    { label: "Donation", href: "/donation " },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div className={`side-overlay ${isMenuActive ? "show" : ""}`}></div>
      <header className={`header ${scroll ? "fixed-header" : ""}`}>
        <div className="container container--xl">
          <nav className="header-inner flex-between gap-8">
            <div className="header-content-wrapper flex-align flex-grow-1">
              {/* Logo Start */}
              <div className="logo">
                <Link href="/" className="link">
                  <img
                    src="/assets/images/logo/logo5.png"
                    alt="Logo"
                    style={{ height: "100px" }}
                  />
                </Link>
              </div>
              {/* Logo End  */}

              {/* Menu Start  */}
              <div
                className="header-menu d-lg-block d-none"
                style={{ flex: 1, display: "flex", justifyContent: "center" }}
              >
                <ul
                  className="nav-menu  flex-align"
                  style={{ justifyContent: "center", gap: "50px",  }}
                >
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className={`nav-menu__item ${pathname === item.href ? "activePage" : ""
                        }`}
                    >
                      <Link href={item.href} className="nav-menu__link" style={{fontSize:'25px !important'}}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Menu End */}
            </div>

            {/* Header Right start */}
            <div className="header-right flex-align gap-18">
              {/* Register Now Button */}
              <Link
                href="/apply-admission"
                className="btn btn-main d-none rounded-pill d-lg-inline-flex py-12"

              >
                Apply Now
                <i className='ph-bold ms-3 ph-arrow-up-right d-flex text-lg' />
              </Link>

              {/* User Icon */}
              <div className="flex flex-col me-2">
                <Link
                  href="/sign-in"
                  className="info-action w-52 h-52 bg-main-25 hover-bg-main-600 
                  border border-neutral-500 rounded-circle flex-center text-3xl 
                  text-neutral-500 hover-text-white hover-border-main-600"
                >
                  <i className="ph ph-user-circle" />
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                className="toggle-mobileMenu d-lg-none text-neutral-200 flex-center"
                onClick={toggleMenu}
              >
                <i className="ph ph-list" />
              </button>
            </div>
            {/* Header Right End */}
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu scroll-sm d-lg-none d-block ${isMenuActive ? "active" : ""
          }`}
      >
        <button type="button" className="close-button" onClick={closeMenu}>
          <i className="ph ph-x" />{" "}
        </button>
        <div className="mobile-menu__inner">
          <Link href="/" className="mobile-menu__logo">
            <img src="assets/images/logo/logo5.png" alt="Logo" />
          </Link>
          <div className="mobile-menu__menu">
            <ul className="nav-menu  flex-align nav-menu--mobile">
              {menuItems.map((item, index) => (
                <li
                  className={`nav-menu__item ${pathname === item.href ? "activePage" : ""
                    }`}
                  key={index}
                >
                  <Link href={item.href} className="nav-menu__link">
                    {item.label}
                  </Link>
                </li>
              ))}
              {/* Register Now for mobile */}
              <li className="nav-menu__item mt-32">
                <Link
                  href="/apply-admission"
                  className="btn w-100 text-center"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    background: " #066AC9",
                    color: "#fff",
                    borderRadius: "999px",
                    padding: "12px 0",
                    fontWeight: 600,
                    letterSpacing: "0.3px",
                    textTransform: "uppercase",
                    fontSize: "14px",
                    transition: "all 0.3s ease",
                  }}
                >
                  Apply Now
                  <i className="ph-bold ph-arrow-up-right text-lg" />
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderOne;
