
import { GraduationCap, Target, Heart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a first-year Computer Science Engineering student at NIAT with big dreams and diverse interests. 
            My journey is just beginning, but my passion is boundless!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            <GraduationCap className="text-purple-600 mb-4" size={48} />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Academic Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              Currently pursuing Computer Science Engineering at NIAT, building a strong foundation in technology and innovation.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Target className="text-blue-600 mb-4" size={48} />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Future Aspirations</h3>
            <p className="text-gray-600 leading-relaxed">
              Aspiring to become an IAS officer to serve the nation and make a positive impact on society through public service.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Heart className="text-pink-600 mb-4" size={48} />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Personal Interests</h3>
            <p className="text-gray-600 leading-relaxed">
              Gaming enthusiast, avid book reader, and TV series lover. I believe in work-life balance and continuous learning.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">My Philosophy</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            "Every expert was once a beginner. I'm excited to grow, learn, and contribute to the world 
            through technology and public service. My diverse interests keep me creative and motivated!"
          </p>
        </div>
      </div>
    </section>
  );
};
