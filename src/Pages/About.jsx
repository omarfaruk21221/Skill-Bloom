import React from "react";
import { FaGraduationCap, FaChalkboardTeacher, FaUsers, FaBookOpen, FaFlask, FaMedal } from "react-icons/fa";

const About = () => {
  return (
    <section className=" py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">
          About Our Institution
        </h2>
        <p className="text-gray-700 text-lg mb-12">
          We are committed to providing top-notch education and nurturing students to become responsible global citizens. Explore our programs, activities, and community engagement.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:scale-105 transform transition-all duration-300">
            <FaGraduationCap style={{ color: "var(--color-primary)" }} className="text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
            <p className="text-gray-600">
              We focus on high-quality education that encourages innovation, critical thinking, and creativity.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:scale-105 transform transition-all duration-300">
            <FaChalkboardTeacher style={{ color: "var(--color-secondary)" }} className="text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
            <p className="text-gray-600">
              Our experienced teachers provide personalized guidance and support to help each student succeed.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:scale-105 transform transition-all duration-300">
            <FaUsers style={{ color: "var(--color-accent)" }} className="text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
            <p className="text-gray-600">
              We promote teamwork, social responsibility, and a vibrant community life to develop well-rounded individuals.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:scale-105 transform transition-all duration-300">
            <FaBookOpen style={{ color: "var(--color-info)" }} className="text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Library & Resources</h3>
            <p className="text-gray-600">
              Our library is equipped with thousands of books, journals, and digital resources for students and faculty.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:scale-105 transform transition-all duration-300">
            <FaFlask style={{ color: "var(--color-success)" }} className="text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Laboratory Facilities</h3>
            <p className="text-gray-600">
              State-of-the-art labs for science, computer, and research projects foster hands-on learning.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:scale-105 transform transition-all duration-300">
            <FaMedal style={{ color: "var(--color-warning)" }} className="text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Achievements & Awards</h3>
            <p className="text-gray-600">
              Our students and faculty have received numerous awards for academic, sports, and cultural excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
