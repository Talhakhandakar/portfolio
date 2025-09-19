export const Skills = () => {
    return (
      <div className="px-6 sm:px-4 container max-w-screen-xl mx-auto mt-16 ">
        <div className="flex items-end gap-1">
        <p className="text-5xl font-black mb-12">
        Skills<span className="w-2.5 h-2.5 rounded-full bg-black mb-0.5 block"></span>
        </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Web Design */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Web Design</h3>
            <ul className="space-y-2 text-gray-600">
              <li>UI/UX Design</li>
              <li>Responsive Design</li>
              <li>Wireframing</li>
              <li>User Research</li>
            </ul>
          </div>
  
          {/* Frontend */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>CSS3</li>
            </ul>
          </div>
  
          {/* Backend */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Backend</h3>
            <ul className="space-y-2 text-gray-600">
              <li>NodeJS</li>
              <li>MongoDB</li> {/* Corrected spelling from "MondoDB" */}
              <li>ExpressJS</li>
              <li>Vercel</li>
            </ul>
          </div>
  
          {/* Soft Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Soft Skills</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Effective communication</li>
              <li>Collaboration</li>
              <li>Commitment</li>
              <li>Leadership</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  