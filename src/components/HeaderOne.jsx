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
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    if (!isMenuActive) {
      document.body.classList.add("scroll-hide-sm");
    } else {
      document.body.classList.remove("scroll-hide-sm");
    }
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
    {
      label: "Home",
      href: "/",
      icon: true,
    },
      {
      label: "About",
      href: "/about",
      icon: true,
    },
    {
      label: "Courses",
      href: "/course",
      icon: true,
    },
    {
      label: "Donor",
      href: "/donor",
      icon: true,
    },

    // Pages dropdown hidden for now – can be reactivated later if needed
    // {
    //   label: "Pages",
    //   links: [
    //     { href: "/about", label: "About" },
    //     { href: "/about-two", label: "About Two" },
    //     { href: "/about-three", label: "About Three" },
    //     { href: "/about-four", label: "About Four" },
    //     { href: "/product", label: "Product" },
    //     { href: "/product-details", label: "Product Details" },
    //     { href: "/cart", label: "Cart" },
    //     { href: "/checkout", label: "Checkout" },
    //     { href: "/pricing-plan", label: "Pricing Plan" },
    //     { href: "/instructor", label: "Instructor" },
    //     { href: "/instructor-two", label: "Instructor Two" },
    //     { href: "/instructor-details", label: "Instructor Details" },
    //     { href: "/tutor", label: "Premium Tutors" },
    //     { href: "/tutor-details", label: "Premium Tutors Details" },
    //     { href: "/faq", label: "FAQ" },
    //     { href: "/tuition-jobs", label: "Tuition Jobs" },
    //     { href: "/events", label: "Events" },
    //     { href: "/event-details", label: "Event Details" },
    //     { href: "/apply-admission", label: "Apply Admission" },
    //     { href: "/gallery", label: "Gallery" },
    //     { href: "/privacy-policy", label: "Privacy Policy" },
    //     { href: "/favorite-course", label: "Favorite Course" },
    //     { href: "/find-tutors", label: "Find Best Tutors" },
    //     { href: "/book-online-class", label: "Book Online Class" },
    //   ],
    // },

    // Directly showing About in main menu
  

    // {
    //   label: "Blog",
    //   href: "/blog",
    //   icon: true,
    // },

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
                    src="/assets/images/logo/logo3.png"
                    alt="Logo"
                    style={{ height: "100px" }}
                  />
                </Link>
              </div>
              {/* Logo End  */}
              {/* Select Start */}

              {/* Select End */}
              {/* Menu Start  */}
              <div
                className="header-menu d-lg-block d-none"
                style={{ flex: 1, display: "flex", justifyContent: "center" }}
              >
                <ul
                  className="nav-menu fs-5 flex-align"
                  style={{ justifyContent: "center", gap: "50px" }}
                >
                  {menuItems.map((item, index) =>
                    item.links ? (
                      <li
                        key={`menu-item-${index}`}
                        className="nav-menu__item has-submenu"
                      >
                        <Link href="#" className="nav-menu__link">
                          {item.label}
                        </Link>
                        <ul className={`nav-submenu scroll-sm`}>
                          {item.links.map((link, linkIndex) => (
                            <li
                              key={`submenu-item-${linkIndex}`}
                              className={`nav-submenu__item ${pathname == link.href && "activePage"
                                }`}
                            >
                              <Link
                                href={link.href}
                                className="nav-submenu__link hover-bg-neutral-30"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li
                        key={`menu-contact-${index}`}
                        className={`nav-menu__item ${pathname == item.href && "activePage"
                          }`}
                      >
                        <Link href={item.href} className="nav-menu__link">
                          {item.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Menu End  */}
            </div>
            {/* Header Right start */}
            <div className="header-right flex-align">
              {/* <form
                action="#"
                className="search-form position-relative d-xl-block d-none"
              >
                <input
                  type="text"
                  className="common-input rounded-pill bg-main-25 pe-48 border-neutral-30"
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className="w-36 h-36 bg-main-600 hover-bg-main-700 rounded-circle flex-center text-md text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
                >
                  <i className="ph-bold ph-magnifying-glass" />
                </button>
              </form> */}
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



              <button
                type="button"
                className="toggle-mobileMenu d-lg-none text-neutral-200 flex-center"
                onClick={toggleMenu}
              >
                <i className="ph ph-list" />
              </button>
            </div>
            {/* Header Right End  */}
          </nav>
        </div>
      </header>

      <div
        className={`mobile-menu scroll-sm d-lg-none d-block ${isMenuActive ? "active" : ""
          }`}
      >
        <button type="button" className="close-button" onClick={closeMenu}>
          <i className="ph ph-x" />{" "}
        </button>
        <div className="mobile-menu__inner">
          <Link href="/" className="mobile-menu__logo">
            <img src="assets/images/logo/logo3.png" alt="Logo" />
          </Link>
          <div className="mobile-menu__menu">
            <ul className="nav-menu flex-align nav-menu--mobile">
              {menuItems.map((item, index) =>
                item.links ? (
                  <li
                    key={`menu-item-${index}`}
                    className={`nav-menu__item has-submenu ${activeSubmenu === index ? "activePage" : ""
                      }`}
                    onClick={() => handleSubmenuClick(index)}
                  >
                    <Link href="#" className="nav-menu__link">
                      {item.label}
                    </Link>
                    <ul className={`nav-submenu scroll-sm`}>
                      {item.links.map((link, linkIndex) => (
                        <li key={linkIndex} className="nav-submenu__item">
                          <Link
                            href={link.href}
                            className="nav-submenu__link hover-bg-neutral-30"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li
                    className={`nav-menu__item ${pathname == item.href && "activePage"
                      }`}
                    key={index}
                  >
                    <Link href={item.href} className="nav-menu__link">
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderOne;
