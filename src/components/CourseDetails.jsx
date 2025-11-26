"use client";
import { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

const CourseDetails = () => {
  const params = useParams();
  const { id } = params;
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const fetchCourseAndLessons = async () => {
      try {
        const courseRes = await axios.get(`http://192.168.100.60:5000/api/courses/${id}`);
        setCourse(courseRes.data);
        const lessonsRes = await axios.get(`http://192.168.100.60:5000/api/courses/${id}/lessons`);
        setLessons(lessonsRes.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourseAndLessons();
  }, [id]);

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>;
  if (!course) return <p style={{ textAlign: "center", marginTop: "50px" }}>Course not found</p>;

  return (
    <section className='course-details py-60'>
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-xl-8'>
            <div className='course-details__content border border-neutral-30 rounded-12 bg-main-25 p-12'>
              {(() => {
                let firstImage = null;
                for (let lesson of lessons) {
                  const imageContent = lesson.contents.find(content => content.type === "image");
                  if (imageContent) {
                    firstImage = imageContent.value;
                    break;
                  }
                }
                return (
                  <img
                    src={firstImage ? `http://192.168.100.60:5000${firstImage}` : 'assets/images/thumbs/course-details-img.webp'}
                    alt={course.title}
                    className='rounded-8 cover-img'
                  />
                );
              })()}

              <div className='p-20'>
                <h2 className='mt-24 mb-24'>{course.title}</h2>
                <p className='text-neutral-700'>{course.description}</p>
              </div>
            </div>

            <div className='border border-neutral-30 rounded-12 bg-main-25 p-32 mt-24'>
              <h5 className='mb-0'>Curriculum</h5>
              <span className='d-block border border-neutral-30 my-24 border-dashed' />

              <div className='accordion common-accordion style-three' id='accordionExampleTwo'>
                {lessons.map((lesson, index) => (
                  <div className='accordion-item' key={lesson._id}>
                    <h2 className='accordion-header'>
                      <button
                        className={`accordion-button ${false ? '' : 'collapsed'}`} // sab items collapsed initially
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${index}`}
                        aria-expanded="false" // initially false
                        aria-controls={`collapse-${index}`}
                      >
                        {lesson.heading}
                      </button>

                    </h2>

                    <div
                      id={`collapse-${index}`}
                      className="accordion-collapse collapse" // remove `${index === 0 ? 'show' : ''}`
                      data-bs-parent="#accordionExampleTwo"
                    >

                      <div className='accordion-body p-0'>
                        {lesson.youtubeLink && (
                          <div
                            className='curriculam-item flex-between mt-5 gap-16 text-neutral-500 fw-medium hover-text-main-600'
                            style={{ cursor: "pointer" }}
                            onClick={() => setActiveVideo(lesson.youtubeLink)}
                          >
                            <span className='flex-align gap-12'>
                              <i className='text-xl d-flex ph-bold ph-video-camera' />
                              <span className='text-line-1'>Watch Video</span>
                            </span>
                          </div>
                        )}

                        {activeVideo === lesson.youtubeLink && (
                          <div className='mt-20 mb-20'>
                            {lesson.youtubeLink && (() => {
                              let videoId = null;

                              // Standard YouTube link
                              if (lesson.youtubeLink.includes("v=")) {
                                videoId = lesson.youtubeLink.split("v=")[1]?.split("&")[0];
                              }
                              // Shortened youtu.be link
                              else if (lesson.youtubeLink.includes("youtu.be/")) {
                                videoId = lesson.youtubeLink.split("youtu.be/")[1]?.split("?")[0];
                              }

                              if (!videoId) return null;

                              return (
                                <iframe
                                  width="100%"
                                  height="400"
                                  src={`https://www.youtube.com/embed/${videoId}`}
                                  title="YouTube video player"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                ></iframe>
                              );
                            })()}

                          </div>
                        )}

                        <div className='m-30'>
                          <p className='text-gray-400'>{lesson.description}</p>
                        </div>

                        <div className='m-30 flex flex-col gap-4'>
                          {lesson.contents && lesson.contents.map((content, idx) => {
                            if (content.type === "image") {
                              return (
                                <img
                                  key={idx}
                                  src={`http://192.168.100.60:5000${content.value}`}
                                  alt={lesson.heading}
                                  className='rounded-8 cover-img'
                                />
                              );
                            }
                            if (content.type === "pdf") {
                              return (
                                <a
                                  key={idx}
                                  href={`http://192.168.100.60:5000${content.value}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className='text-blue-600 underline mt-20 hover:text-blue-800'
                                >
                                  <FaFilePdf className="text-xl" /> Download PDF
                                </a>
                              );
                            }
                            return null;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='col-xl-4'>
            <div className='course-details__sidebar border border-neutral-30 rounded-12 bg-white p-8'>
              <div className='border border-neutral-30 rounded-12 bg-main-25 p-24 bg-main-25'>
                <div className='border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16'>
                  <div className='flex-align gap-12'>
                    <span className='text-neutral-700 text-2xl d-flex'>
                      <i className='ph ph-watch' />
                    </span>
                    <span className='text-neutral-700 text-lg fw-normal'>Courses Title</span>
                  </div>
                  <span className='text-lg fw-medium text-neutral-700'>
                    {course?.title || "Course Title Dummy"}
                  </span>
                </div>

                <div className='border-bottom border-neutral-40 pb-24 mb-24 flex-between flex-wrap gap-16'>
                  <div className='flex-align gap-12'>
                    <span className='text-neutral-700 text-2xl d-flex'>
                      <i className='ph ph-video-camera' />
                    </span>
                    <span className='text-neutral-700 text-lg fw-normal'>Lessons</span>
                  </div>
                  <span className='text-lg fw-medium text-neutral-700'>
                    {course?.lessons?.length || 0} Videos
                  </span>
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
