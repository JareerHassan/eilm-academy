"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const InstructorAll = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await axios.get(
          "https://eilmbackend.oxmite.com/api/teachers"
        );

        // Fixed student counts
        const studentCounts = [165, 140, 90, 75];

        // Map instructors and assign fixed student counts
        const instructorsWithStudents = response.data.map((instructor, index) => ({
          ...instructor,
          students: new Array(studentCounts[index] || 0), // Agar index zyada ho to 0 students
        }));

        setInstructors(instructorsWithStudents);
      } catch (error) {
        console.error("Error fetching instructors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstructors();
  }, []);

  if (loading) {
    return <p className="text-center py-20">Loading instructors...</p>;
  }

  return (
    <section className="instructor py-120 position-relative z-1">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="mb-24">Course Instructors</h2>
          <p>
            Join us on this journey of discovery, growth, and transformation.
            Together, let's shape a brighter future
          </p>
        </div>

        <div className="row gy-4">
          {instructors.map((instructor) => (
            <div key={instructor._id} className="col-lg-4 col-sm-6">
              <div className="instructor-item scale-hover-item bg-white rounded-16 p-12 h-100 border border-neutral-30">
                <div className="rounded-12 overflow-hidden position-relative bg-dark-yellow" style={{ width: "100%", height: "400px" }}>
                  <img
                    src={
                      instructor.imageLink
                        ? instructor.imageLink
                        : `https://ui-avatars.com/api/?name=${instructor.name}&background=ffd700&color=000`
                    }
                    alt={instructor.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                <div className="p-24 position-relative">
                  <h4 className="mb-28 pb-24 border-bottom border-neutral-50 mb-24 border-dashed border-0">
                    {instructor.name}
                  </h4>

                  <div className="flex-between gap-8 flex-wrap mb-16">
                    <div className="flex-align gap-8">
                      <span className="text-neutral-700 text-2xl d-flex">
                        <i className="ph-bold ph-lightbulb" />
                      </span>
                      <span className="text-neutral-700 text-lg fw-medium">
                        Instructor
                      </span>
                    </div>
                    <div className="flex-align gap-8">
                      <span className="text-neutral-700 text-2xl d-flex">
                        <i className="ph-bold ph-users" />
                      </span>
                      <span className="text-neutral-700 text-lg fw-medium">
                        {instructor.students.length} Students
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorAll;
