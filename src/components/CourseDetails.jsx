"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const CourseDetails = () => {
  const params = useParams();
  const slug = params?.slug?.toLowerCase(); // always lowercase

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sample courses data
  const sampleCourses = [
    {
      _id: "1",
      title: "Tafseer",
      category: "Qur'an",
      status: "Launched",
             imageLink: "https://res.cloudinary.com/dx0naofle/image/upload/v1771492980/Untitled-2-01.jpg_o8quto.jpg",

      slug: "tafseer",
       description: `
      Tafseer course offers an in-depth understanding of the Qur'an, explaining the meaning, context, and wisdom behind each verse. 
      Students will learn:
      - Detailed interpretation of Qur'anic verses
      - Historical context and revelation background (Asbab al-Nuzul)
      - Key themes, morals, and lessons for daily life
      - Tafseer methodology from classical and contemporary scholars
      - Practical application of Qur'anic guidance in personal and social life
      Ideal for beginners and advanced learners, this course strengthens both knowledge and practice of Islam.
    `,
  },
    {
      _id: "2",
      title: "Fiqh",
      category: "Fiqh",
      status: "Coming Soon",
        imageLink: "https://res.cloudinary.com/dx0naofle/image/upload/v1771492979/Untitled-2-03.jpg_qpffqv.jpg",

      slug: "fiqh",
        description: `
      Fiqh course introduces students to the fundamentals of Islamic jurisprudence, focusing on daily worship, personal conduct, and community obligations.
      Students will learn:
      - Basic principles of Fiqh according to the Hanafi school
      - Rules of prayer (Salah), fasting (Sawm), zakat, and hajj
      - Ethical conduct and social responsibilities
      - Understanding of permissible (Halal) and forbidden (Haram) actions
      Suitable for beginners seeking to practice Islam correctly and gain a strong foundation in Islamic law.
    `,
  },
    {
      _id: "3",
      title: "Arabic",
      category: "Arabic",
      status: "Coming Soon",
          imageLink: "https://res.cloudinary.com/dx0naofle/image/upload/v1771399360/WhatsApp_Image_2026-02-18_at_12.18.36_PM_1_p0au1l.jpg",

      slug: "arabic",
        description: `
      Arabic language course is designed to help students read, write, and communicate effectively in Arabic.
      Students will learn:
      - Arabic grammar and sentence structure
      - Vocabulary for daily conversation and Islamic studies
      - Reading comprehension of texts, including Qur'an and Hadith
      - Writing skills for practical communication
      - Conversational exercises to improve fluency
      This course is ideal for beginners and intermediate learners aiming to understand classical and modern Arabic.
    `,
  },
  ];

  useEffect(() => {
    if (!slug) return;

    const normalizedSlug = decodeURIComponent(slug).toLowerCase();

    const selectedCourse = sampleCourses.find(
      (c) => c.slug && c.slug.toLowerCase() === normalizedSlug
    );

    setCourse(selectedCourse);
    setLoading(false);
  }, [slug]);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (!course) return <p style={{ textAlign: "center" }}>Course not found</p>;

  return (
    <section className="course-details py-60">
      <div className="container">
        <div className="row gy-4">
          {/* Main Content */}
          <div className="col-xl-8">
            <div className="course-details__content border border-neutral-30 rounded-12 bg-main-25 p-12">
              <div
                style={{
                  width: "100%",
                  height: "800px",
                  overflow: "hidden",
                  borderRadius: "12px",
                }}
              >
                <img
                  src={course.imageLink}
                  alt={course.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // maintain aspect ratio
                  }}
                />
              </div>

              <div className="p-20">
                <h1 className="mt-24 mb-24 fs-2">{course.title}</h1>
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

                <div className="flex-between mb-24">
                  <span>Status</span>
                  <span>{course.status}</span>
                </div>

                {/* Apply Now button only if status is Launched */}
                {course.status.toLowerCase() === "launched" && (
                     <Link
                href="/apply-admission"
                className="btn d-none d-lg-inline-flex py-12"
                style={{
                  background: "#066AC9",
                  color: "#fff",
                  borderRadius: "999px",
                  padding: "10px 22px",
                  fontWeight: 600,
                  letterSpacing: "0.3px",
                  textTransform: "uppercase",
                }}
              >
                Apply Now
              </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
