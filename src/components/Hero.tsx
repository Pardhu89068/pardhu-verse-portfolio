
import { ArrowDown, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 relative">
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full animate-spin-slow p-1">
                <div className="w-full h-full bg-white rounded-full p-2">
                  <img
                    src="https://i.postimg.cc/9QDygBcW/Screenshot-6.png"
                    alt="Yenumula Venkata Sai Pardhu"
                    className="w-full h-full object-cover rounded-full shadow-xl"
                  />
                </div>
              </div>
              
              {/* Floating sparkles */}
              <Sparkles className="absolute -top-4 -right-4 text-yellow-400 animate-pulse" size={24} />
              <Sparkles className="absolute -bottom-4 -left-4 text-pink-400 animate-pulse delay-300" size={20} />
              <Sparkles className="absolute top-1/2 -left-8 text-blue-400 animate-pulse delay-700" size={16} />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Yenumula Venkata
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Sai Pardhu
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-purple-600">CSE Student</span> | 
            <span className="font-semibold text-pink-600"> Future IAS Officer</span> | 
            <span className="font-semibold text-blue-600"> Gamer</span> | 
            <span className="font-semibold text-green-600"> Book Lover</span> | 
            <span className="font-semibold text-orange-600"> TV Enthusiast</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              Explore My World
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300">
              Get to Know Me
            </button>
          </div>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-purple-600" size={32} />
        </div>
      </div>
    </section>
  );
};
