import aditya from '../../assets/aditya.jpg'
import rahul from '../../assets/rahul.jpg'
import team4 from '../../assets/team4.jpg'
import akshay from '../../assets/akshay.jpg'
import himanshu from '../../assets/himanshu.jpg'
import suraj from '../../assets/suraj.jpg'
import gurinder from '../../assets/gurinder.jpg'

export default function TeamSection() {
  const teamData = [
    {
      imgUrl: aditya, // You can replace this with an actual image path or avatar
      name: "Aditya Seth",
      position: "3D and VFX Artist",
      city:"Chandigarh"
    },
    {
      imgUrl: rahul,
      name: "Rahul",
      position: "Founder ( VFX Compositing Artist)",
      city:"Himachal Pradesh"
    },
    {
      imgUrl: team4,
      name: "Simran Wahi",
      position: "Video Editor",
      city:"Chandigarh"
    },
    {
      imgUrl: akshay,
      name: "Akshay Salunkhe",
      position: "3D and VFX Artist",
      city:"Maharashtra"
    },
    {
      imgUrl: suraj, // You can replace this with an actual image path or avatar
      name: "Suraj Katule",
      position: "3D Animator",
      city:"Maharashtra"
    },
    {
      imgUrl: gurinder, // You can replace this with an actual image path or avatar
      name: "Gurinder",
      position: "Video Editor and Color Grading Artist",
      city:"Chandigarh"
    },
    {
      imgUrl: himanshu, // You can replace this with an actual image path or avatar
      name: "Himanshu Sharma",
      position: "Full Stack Developer",
      city:"Chandigarh"
    },
  ];

  return (
    <section className="pt-24 pb-20 bg-slate-950 px-6 text-white font-body">
      <h3 className="text-xl md:text-xl font-body font-semibold text-[#cccccc] mb-12 tracking-wide">
        Our Creative Team
      </h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
        {teamData.map((team, idx) => (
          <div
            key={idx}
            className="bg-gray-800/40 backdrop-blur-md border border-gray-600/30 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
          >
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-700">
              {team.imgUrl ? (
                <img
                  src={team.imgUrl}
                  alt={team.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 text-sm">No Image</div>
              )}
            </div>
            <h4 className="text-xl font-semibold">{team.name}</h4>
            <p className="text-sm text-gray-400">{team.position}</p>
            <p className="text-sm text-gray-400">{team.city}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
