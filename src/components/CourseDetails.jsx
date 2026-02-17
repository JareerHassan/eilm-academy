"use client";
import { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { useParams } from "next/navigation";
import axios from "axios";

const CourseDetails = () => {
  const params = useParams();
  const { id } = params;

  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);

  // ✅ Image URL handler (FULL FIX)
  const getImageUrl = (path) => {
    if (!path) return null;

    // agar already full URL hai (Cloudinary ya uploaded link)
    if (path.startsWith("http")) return path;

    // agar backend se relative path aa raha hai
    return `https://eilmbackend.oxmite.com${path}`;
  };

  useEffect(() => {
    const fetchCourseAndLessons = async () => {
      try {
        const courseRes = await axios.get(
          `https://eilmbackend.oxmite.com/api/courses/${id}`
        );
        setCourse(courseRes.data);

        const lessonsRes = await axios.get(
          `https://eilmbackend.oxmite.com/api/courses/${id}/lessons`
        );
        setLessons(lessonsRes.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseAndLessons();
  }, [id]);

  if (loading)
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>;

  if (!course)
    return (
      <p style={{ textAlign: "center", marginTop: "50px" }}>
        Course not found
      </p>
    );

  // ✅ First image from lessons OR course image OR fallback
  let firstImage = null;
  for (let lesson of lessons) {
    const imageContent = lesson.contents?.find(
      (content) => content.type === "image"
    );
    if (imageContent) {
      firstImage = imageContent.value;
      break;
    }
  }

  const courseImage =
    getImageUrl(firstImage) ||
    getImageUrl(course.imageLink) ||
    "/assets/images/thumbs/course-details-img.webp";

  return (
    <section className="course-details py-60">
      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-8">
            <div className="course-details__content border border-neutral-30 rounded-12 bg-main-25 p-12">
              <img
  src={courseImage}
  alt={course.title}
  className="rounded-8 "
  style={{
    width: "100%",
    height: "900px",
    borderRadius: "12px"
  }}
/>


              <div className="p-20">
                <h2 className="mt-24 mb-24">{course.title}</h2>
                <p className="text-neutral-700">{course.description}</p>
              </div>
            </div>

        
          </div>

          {/* Sidebar */}
          <div className="col-xl-4">
            <div className="course-details__sidebar border border-neutral-30 rounded-12 bg-white p-8">
              <div className="border border-neutral-30 rounded-12 bg-main-25 p-24">
                <div className="border-bottom border-neutral-40 pb-24 mb-24 flex-between">
                  <span>Course Title</span>
                  <span>{course.title}</span>
                </div>

                <div className="flex-between">
                  <span>Lessons</span>
                  <span>{lessons.length} Videos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
