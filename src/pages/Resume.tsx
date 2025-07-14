
import { Navigation } from "@/components/Navigation";
import { Download, GraduationCap, Award, Book, Code, Target } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Resume
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Computer Science Student | Future IAS Officer | Tech Enthusiast
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              <Download className="inline mr-2" size={20} />
              Download PDF
            </button>
          </div>

          {/* Resume Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Personal Info */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                Yenumula Venkata Sai Pardhu
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-600">
                <div>
                  <p><strong>Email:</strong> yenumulavenkatasaipardhu@gmail.com</p>
                  <p><strong>Phone:</strong> 9374673890</p>
                </div>
                <div>
                  <p><strong>Location:</strong> NIAT, India</p>
                  <p><strong>Status:</strong> First-year CSE Student</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <GraduationCap className="text-purple-600 mr-3" size={24} />
                Education
              </h3>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Bachelor of Technology - Computer Science Engineering
                </h4>
                <p className="text-purple-600 font-medium mb-2">NIAT (Nizam Institute of Applied Technology)</p>
                <p className="text-gray-600 mb-2">2024 - Present (First Year)</p>
                <p className="text-gray-600">
                  Currently building a strong foundation in programming, algorithms, and computer science fundamentals.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Code className="text-blue-600 mr-3" size={24} />
                Skills & Interests
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Technical Skills</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Basic Programming (Python, Java)</li>
                    <li>• Web Development (HTML, CSS, JavaScript)</li>
                    <li>• UI/UX Design Principles</li>
                    <li>• Computer Science Fundamentals</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Personal Interests</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Gaming & Game Analysis</li>
                    <li>• Reading & Literature</li>
                    <li>• TV Series & Cinema</li>
                    <li>• Public Service & Governance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Award className="text-green-600 mr-3" size={24} />
                Services I Offer
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "UI/UX Design - Creative and user-friendly interfaces",
                  "Web Design - Modern, responsive websites",
                  "Tutoring - Academic support in CSE subjects",
                  "Writing - Essays, blogs, and creative content"
                ].map((service, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-700">{service}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Goals */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Target className="text-orange-600 mr-3" size={24} />
                Career Goals
              </h3>
              <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed">
                  My ultimate goal is to serve the nation as an IAS officer, using technology and innovation 
                  to bring positive change to society. While pursuing my Computer Science degree, I aim to 
                  develop strong technical skills and gain diverse experiences that will prepare me for both 
                  the civil services and contribute to the digital transformation of governance.
                </p>
              </div>
            </div>

            {/* Personal Statement */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Book className="text-pink-600 mr-3" size={24} />
                Personal Statement
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I am a passionate first-year Computer Science student with a unique combination of technical 
                interests and public service aspirations. While I may be early in my journey, I bring fresh 
                perspectives, boundless enthusiasm, and a commitment to continuous learning. My diverse interests 
                in gaming, literature, and entertainment give me a well-rounded approach to problem-solving and creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
