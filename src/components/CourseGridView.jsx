"use client";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { FaInfoCircle, FaArrowRight, FaTag, FaCalendarAlt, FaSearch, FaFilter, FaSortAmountDown, FaSortAmountUp, FaTimesCircle } from "react-icons/fa"; // Added FaTimesCircle
import { useRouter } from "next/navigation";
import { ENDPOINTS } from "@/http/endpoints";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  // 'asc' for oldest first, 'desc' for newest first, 'none' for no sorting
  const [dateSortOrder, setDateSortOrder] = useState("none");

  const router = useRouter();

  const primaryBlue = "#002366";
  const secondaryBlue = "#00a5e5";
  const dangerRed = "#00a5e5"; // Define a color for the reset button

  // Check if any filter is currently active
  const isFilterActive = searchTerm || selectedCategory !== "All" || dateSortOrder !== "none";

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courseRes = await axios.get(ENDPOINTS.courses);
        setCourses(courseRes.data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };
    fetchCourses();
  }, []);

  // --- Filter and Sort Logic ---

  // 1. Extract unique categories for the filter dropdown
  const categories = useMemo(() => {
    const uniqueCategories = new Set(courses.map(course => course.category));
    return ["All", ...Array.from(uniqueCategories)];
  }, [courses]);

  // 2. Filter and sort courses based on state
  const filteredCourses = useMemo(() => {
    let currentCourses = [...courses];

    // Filter by Search Term (Title or Description)
    if (searchTerm) {
      const lowerCaseSearch = searchTerm.toLowerCase();
      currentCourses = currentCourses.filter(course =>
        course.title.toLowerCase().includes(lowerCaseSearch) ||
        course.description.toLowerCase().includes(lowerCaseSearch)
      );
    }

    // Filter by Category
    if (selectedCategory !== "All") {
      currentCourses = currentCourses.filter(course => course.category === selectedCategory);
    }

    // Sort by Date (newest first or oldest first)
    if (dateSortOrder !== "none") {
      currentCourses.sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();

        if (dateSortOrder === "desc") { // Newest first
          return dateB - dateA;
        } else { // 'asc' - Oldest first
          return dateA - dateB;
        }
      });
    }

    return currentCourses;
  }, [courses, searchTerm, selectedCategory, dateSortOrder]);

  // --- Handler Functions ---

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleDateSort = () => {
    // Cycle through 'none' -> 'desc' (Newest) -> 'asc' (Oldest)
    setDateSortOrder(prevOrder => {
      if (prevOrder === 'none') return 'desc';
      if (prevOrder === 'desc') return 'asc';
      return 'none'; // Revert to no sorting
    });
  };

  // New function to reset all filters
  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setDateSortOrder("none");
  };


  // --- Component Render ---

  return (
    <div className="container-fluid" style={{ padding: "60px 20px", background: "#f5f8fb" }}>
      <h1
        className="text-start "
        style={{
          fontSize: "2.5rem",
          fontWeight: "900",
          color: primaryBlue,
          letterSpacing: "1px",
          textShadow: "0 4px 10px rgba(0,0,0,0.15)",
          marginBottom: '30px'
        }}
      >
        Islamic Courses Catalog
      </h1>

      {/* --- Filters Section --- */}
      <div className="row g-3 mb-32 px-3 align-items-center">

        {/* Search Input */}
        <div className="col-12 col-md-5 col-lg-4">
          <div className="input-group shadow-sm rounded-pill" style={{ transition: "all 0.3s" }}>
            <span className="input-group-text  border-0 bg-white rounded-start-pill" style={{ color: secondaryBlue }}>
              <FaSearch />
            </span>
            <input
              type="text"
              className="form-control border-0 rounded-end-pill py-8"
              placeholder="Search by course title or description..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        {/* Category Dropdown */}
        <div className="col-12 col-md-4 col-lg-3">
          <div className="input-group  shadow-sm rounded-pill">
            <label className="input-group-text  border-0 bg-white rounded-start-pill" htmlFor="category-select" style={{ color: secondaryBlue }}>
              <FaFilter />
            </label>
            <select
              className="form-select border-0   rounded-end-pill py-8"
              id="category-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
              style={{ minWidth: '150px' }}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === "All" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Reset Filters Button (Conditional Rendering) */}
        {isFilterActive && (
          <div className="col-12 col-md-4 col-lg-3">
            <button
              className="btn w-100 shadow-sm d-flex align-items-center justify-content-center py-8 reset-btn"
              onClick={handleResetFilters}
              style={{
                background: dangerRed,
                color: '#fff',
                fontWeight: 600,
                borderRadius: '25px',
                transition: 'all 0.3s',
              }}
            >
              <FaTimesCircle className="me-2" style={{ fontSize: "1.2rem" }} />
              Reset Filters
            </button>
          </div>
        )}
      </div>
      {/* --- End Filters Section --- */}

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-3">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <div
              key={course._id}
              className="col d-flex animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Card Code (Rest of the component remains the same) */}
              <div
                className="card premium-card d-flex flex-column w-100"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.08) translateY(-6px)";
                  e.currentTarget.style.boxShadow = `0 25px 50px rgba(0,35,102,0.25), 0 0 30px ${secondaryBlue}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,35,102,0.12), 0 8px 15px rgba(0,165,229,0.15)";
                }}
                onClick={() => router.push(`/course-details/${course._id}`)}
              >
                {/* Top Gradient Ribbon */}
                <div
                  style={{
                    height: "10px",
                    width: "100%",
                    background: `linear-gradient(90deg, ${primaryBlue}, ${secondaryBlue})`,
                    borderRadius: "15px 15px 0 0",
                    marginBottom: "20px",
                  }}
                ></div>

                <div className="card-body d-flex flex-column flex-grow-1" style={{ padding: "25px" }}>
                  <h2
                    className="card-title mb-5"
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 900,
                      color: primaryBlue,
                    }}
                  >
                    {course.title}
                  </h2>

                  <p className="card-text mb-3" style={{ fontSize: "1rem", color: "#444", lineHeight: "1.6", paddingLeft: "5px" }}>
                    <FaInfoCircle style={{ color: secondaryBlue, marginRight: "10px", fontSize: "1.3rem" }} />
                    {course.description}
                  </p>

                  <p className="card-text mb-3" style={{ fontSize: "1rem", color: primaryBlue, fontWeight: 700, paddingLeft: "5px" }}>
                    <FaTag className="me-2" style={{ fontSize: "1.3rem" }} /> {course.category}
                  </p>

                  <div className="mb-3 mt-5" style={{ paddingLeft: "5px" }}>
                    <p className="text-muted small mb-1" style={{ fontSize: "0.9rem" }}>
                      <FaCalendarAlt style={{ color: secondaryBlue, marginRight: "6px", fontSize: "1.2rem" }} />
                      Created: {new Date(course.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-muted small" style={{ fontSize: "0.9rem" }}>
                      <FaCalendarAlt style={{ color: secondaryBlue, marginRight: "6px", fontSize: "1.2rem" }} />
                      Updated: {new Date(course.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Enroll Button */}
                <div className="card-footer bg-transparent border-0 pt-3 px-3 d-flex justify-content-end">
                  <a
                    href="/apply-admission"
                    onClick={(e) => { e.preventDefault(); router.push("/apply-admission"); }}
                    className="enroll-btn d-flex align-items-center gap-3"
                  >
                    Enroll Now <FaArrowRight style={{ fontSize: "1.3rem" }} />
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <h3 style={{ color: primaryBlue }}>No Courses Found</h3>
            <p className="text-muted">Try adjusting your search term or filters.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        /* ... (Your original CSS styles are included below) ... */
        .premium-card {
          background: linear-gradient(145deg, #ffffff 0%, #e9f0fb 100%);
          border-radius: 25px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 12px 25px rgba(0,35,102,0.12), 0 8px 15px rgba(0,165,229,0.15);
          transition: all 0.4s ease;
          min-height: 450px;
          max-height: 480px;
          display: flex;
          flex-direction: column;
          padding: 20px;
          width: 100%;
        }

        /* Animated Islamic geometric pattern (classic star grid) */
        .premium-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background-image:
            repeating-conic-gradient(
              rgba(0,35,102,0.02) 0deg 30deg,
              transparent 30deg 60deg
            );
          animation: rotatePattern 40s linear infinite;
          pointer-events: none;
        }

        @keyframes rotatePattern {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .premium-card:hover::before {
          opacity: 0.08;
        }

        .enroll-btn {
          background: linear-gradient(90deg, ${primaryBlue}, ${secondaryBlue});
          color: #fff;
          border-radius: 25px;
          font-weight: 700;
          font-size: 1.05rem;
          padding: 10px 35px;
          transition: all 0.3s ease;
        }

        .enroll-btn:hover {
          box-shadow: 0 8px 20px rgba(0,35,102,0.4);
          opacity: 0.9;
        }
        
        .reset-btn:hover {
          filter: brightness(1.1);
          box-shadow: 0 8px 20px rgba(220,53,69,0.4);
        }
      `}</style>
    </div>
  );
}