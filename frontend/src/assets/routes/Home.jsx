// import React from 'react'
// import { SOCIAL_LINKS } from '../../utils/data.'

// const Home = () => {
//     return (
//         <div className="flex flex-col items-center text-gray-800">
//             {/* ===== Hero / Introduce Section ===== */}
//             <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-slate-900 to-slate-700 text-white w-full text-center px-5">
//                 <h1 className="text-5xl font-bold mb-4">Hi, I'm Nuttamon Malakan</h1>
//                 <p className="text-xl max-w-2xl mb-6">
//                     A 4th-year Computer Engineering student at Sripatum University
//                     Passionate about Cybersecurity and Learning new technologies.
//                 </p>
//                 <a
//                     href="#projects"
//                     className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition"
//                 >
//                     View My Projects
//                 </a>
//             </section>

//             {/* ===== Projects Section ===== */}
//             <section
//                 id="projects"
//                 className="min-h-screen flex flex-col justify-center items-center bg-gray-100 w-full py-20 px-6"
//             >
//                 <h2 className="text-4xl font-bold mb-10 text-slate-800">Projects</h2>

//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
//                     {/* === Project 1 === */}
//                     <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition transform">
//                         <img
//                             src="https://static.wixstatic.com/media/eb3c37_54e10accb341442eb6da2fa2679dfd64~mv2.png/v1/fit/w_772,h_330,q_90,enc_avif,quality_auto/eb3c37_54e10accb341442eb6da2fa2679dfd64~mv2.png"
//                             alt="Portfolio Website"
//                             className="w-full h-90 object-cover"
//                         />
//                         <div className="p-6">
//                             <h3 className="text-2xl font-semibold mb-2">SAKDEE CARE+</h3>
//                             <p className="text-gray-600 text-sm mb-4">
//                                 An application designed to make laundry easier and more convenient.  
//       Sakdee Care+ offers comprehensive features with an intuitive interface,  
//       serving as the perfect assistant to care for your clothes without any worries.
//                             </p>
//                             <a
//                                 href="https://northsnx.github.io/SAKDEE.App/index.html"
//                                 target="_blank"
//                                 className="text-blue-500 hover:text-blue-700 font-medium"
//                             >
//                                 View Project →
//                             </a>
//                         </div>
//                     </div>   
//                     {/* === Project 2 === */}
//                     <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition transform">
//                         <img
//                             src="/src/assets/images/image.png"
//                             className="w-full h-90 object-cover"
//                         />
//                         <div className="p-6">
//                             <h3 className="text-2xl font-semibold mb-2">CPE243 Mini project หุ่นยนต์เดินตามแสง</h3>
//                             <p className="text-gray-600 text-sm mb-4">
//                                 A mini project for the CPE243 course where we designed and built a robot
//       that follows light sources. The robot uses light sensors and microcontroller
//       to detect light direction and move accordingly.
//                             </p>
//                             <a
//                                 href="https://youtu.be/hkUiAg1u5mA?si=NYvLYBH1_BcBcQ8Q"
//                                 target="_blank"
//                                 className="text-blue-500 hover:text-blue-700 font-medium"
//                             >
//                                 View Project →
//                             </a>
//                         </div>
//                     </div>   
//                     {/* === Project  === */}
//                     <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition transform">
//                         <img
//                             src="/src/assets/images/image2.png"
//                             className="w-full h-90 object-cover"
//                         />
//                         <div className="p-6">
//                             <h3 className="text-2xl font-semibold mb-2">CPE212 Miniproject Voltmeter
// </h3>
//                             <p className="text-gray-600 text-sm mb-4">
//                                 A mini project for the CPE212 course where we designed and built a digital voltmeter.  
//       The device measures voltage accurately using a microcontroller and displays results clearly,  
//       helping students understand electronics measurement concepts practically.
//                             </p>
//                             <a
//                                 href="https://youtu.be/ZEtX5ULLwTc?si=M0m-0o9Ksq1AU5Gx"
//                                 target="_blank"
//                                 className="text-blue-500 hover:text-blue-700 font-medium"
//                             >
//                                 View Project →
//                             </a>
//                         </div>
//                     </div>   

//                 </div>
//             </section>


//             {/* ===== Contact Section ===== */}
//     <section
//       id="contact"
//       className="min-h-screen flex flex-col justify-center items-center bg-slate-900 text-white py-20 px-6"
//     >
//       <h2 className="text-4xl font-bold mb-8">Contact</h2>

//       {/* ===== Contact Info ===== */}
//       <div className="flex flex-col gap-5 mb-10">
//         {SOCIAL_LINKS.map((item, index) => (
//           <div
//             key={index}
//             className="flex items-center gap-4 text-lg hover:text-sky-300 transition"
//           >
//             <item.icon className="w-6 h-6" />
//             <span>
//               <strong>{item.label}:</strong> {item.value}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* ===== Social Links ===== */}
//       <div className="flex gap-6 mt-6">
//         {SOCIAL_LINKS.map((social, index) => {
//           const Icon = social.icon
//           return (
//             <a
//               key={index}
//               href={social.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`p-3 rounded-full border border-gray-700 transition ${social.color} ${social.bgColor}`}
//             >
//               <Icon className="w-6 h-6" />
//             </a>
//           )
//         })}
//       </div>
//     </section>
//         </div>
//     )
// }

// export default Home

import React from 'react'
import { CONTACT_INFO, SOCIAL_LINKS } from '../../utils/data.'
import { SiC, SiCplusplus, SiReact, SiFirebase, SiMysql, SiMongodb, SiNodedotjs, SiLinux, SiFigma, SiBlender, SiPostman } from 'react-icons/si'

const Home = () => {
    return (

        <div className="h-screen w-full overflow-y-scroll scroll-smooth scrollbar-hide">

            {/* ===== Hero Section ===== */}
            <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-slate-900 to-slate-700 text-white w-full text-center px-5 snap-start">
                <h1 className="text-5xl font-bold mb-4">Hi, I'm Nuttamon Malakan</h1>
                <p className="text-xl max-w-2xl mb-6">
                    A 4th-year Computer Engineering student at Sripatum University.
                    Passionate about Cybersecurity and Learning new technologies.

                    Currently seeking a Website Developer or Cybersecurity role for a Co-op position from January 5 to April 24, 2026.
                </p>

                {/* Button Scroll to Projects */}
                <a
                    href="#projects"
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition"
                >
                    View Projects
                </a>
            </div>

            {/* ===== Technical Skills Section ===== */}
            <div
                id="skills"
                name="skills"
                className="min-[50vh] flex flex-col justify-center items-center bg-gray-50 text-gray-800 w-full py-20 px-6 snap-start"
            >
                <h2 className="text-4xl font-bold mb-10">Technical Skills</h2>

                <p className="text-lg max-w-3xl text-center mb-6">
                    Here are some of the technologies and tools I have experience with:
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    <span className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                        <SiC className="w-5 h-5" /> C
                    </span>
                    <span className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                        <SiCplusplus className="w-5 h-5" /> C++
                    </span>
                    <span className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                        <SiReact className="w-5 h-5" /> React
                    </span>
                    <span className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                        <SiFirebase className="w-5 h-5" /> Firebase
                    </span>
                    <span className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                        <SiMysql className="w-5 h-5" /> MySQL
                    </span>
                    <span className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                        <SiMongodb className="w-5 h-5" /> MongoDB
                    </span>
                    <span className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                        <SiNodedotjs className="w-5 h-5" /> NodeJS
                    </span>
                    <span className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                        <SiLinux className="w-5 h-5" /> Linux
                    </span>
                    <span className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                        <SiFigma className="w-5 h-5" /> Figma
                    </span>
                    <span className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                        <SiBlender className="w-5 h-5" /> Blender
                    </span>
                    <span className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                        <SiPostman className="w-5 h-5" /> Postman
                    </span>
                </div>
            </div>




            {/* ===== Projects Section ===== */}
            <div
                id="projects"
                name="projects"
                className="min-[50vh] flex flex-col justify-start items-center bg-gray-100 w-full py-20 px-6 snap-start"
            >
                <h2 className="text-4xl font-bold mb-10 text-slate-800">Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">

                    {/* Project 1 */}
                    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition transform">
                        <img
                            src="https://static.wixstatic.com/media/eb3c37_54e10accb341442eb6da2fa2679dfd64~mv2.png"
                            alt="SAKDEE CARE+"
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2">SAKDEE CARE+</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                An application designed to make laundry easier and more convenient.
                            </p>
                            <a
                                href="https://northsnx.github.io/SAKDEE.App/index.html"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-700 font-medium"
                            >
                                View Project →
                            </a>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition transform">
                        <img
                            src="/src/assets/images/image.png"
                            alt="CPE243 Mini Project"
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2">CPE243 Mini project Light Following Robot</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                A mini project where we designed and built a robot that follows light sources.
                                The robot uses light sensors and microcontroller to detect light direction and move accordingly.
                            </p>
                            <a
                                href="https://youtu.be/hkUiAg1u5mA?si=NYvLYBH1_BcBcQ8Q"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-700 font-medium"
                            >
                                View Project →
                            </a>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition transform">
                        <img
                            src="/src/assets/images/image2.png"
                            alt="CPE212 Miniproject Voltmeter"
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2">CPE212 Miniproject Voltmeter</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                A mini project for CPE212 where we designed and built a digital voltmeter.
                                Measures voltage accurately using microcontroller.
                            </p>

                            <a
                                href="https://youtu.be/ZEtX5ULLwTc?si=M0m-0o9Ksq1AU5Gx"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-700 font-medium"
                            >
                                View Project →
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== Certificate Section ===== */}
            <div
                id="certificates"
                name="certificates"
                className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 w-full py-20 px-6"
            >
                <h2 className="text-4xl font-bold mb-10">Certificates</h2>

                <p className="text-lg max-w-3xl text-center mb-12">
                    Here are some of the certificates I have earned to strengthen my skills:
                </p>

                {/* --- Certificates Grid --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">

                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                        <img
                            src="/src/assets/images/Basic_Cybersecurity_certificate_page.jpg"
                            alt="Basic Cybersecurity"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2">Basic Cybersecurity</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Learn about basic knowledge of Cybersecurity.
                            </p>
                            <a
                                href="https://media.mooc.ncsa.or.th/certificate/E9UYB8YEW5L8M.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 font-medium"
                            >
                                View →
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                        <img
                            src="/src/assets/images/Problem_Solving.png"
                            alt="Problem Solving (Basic)"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2">Problem Solving (Basic)</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Focuses on algorithms, data structures, and logical thinking to solve programming problems effectively.
                            </p>
                            <a
                                href="https://www.hackerrank.com/certificates/iframe/84a1b6ea60a0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 font-medium"
                            >
                                View →
                            </a>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                        <img
                            src="/src/assets/images/Sql.png"
                            alt="Problem Solving (Basic)"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2">SQL (Basic)</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Focuses on commands used to communicate with a database to retrieve, manage, and modify data.
                            </p>
                            <a
                                href="https://www.hackerrank.com/certificates/iframe/46c1ea50d860"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 font-medium"
                            >
                                View →
                            </a>
                        </div>
                    </div>

                </div>
            </div>


            {/* ===== Learning Section ===== */}
            {/* <div
                id="learning"
                className="h-[50vh] flex flex-col justify-center items-center bg-gray-200 text-gray-800 w-full py-20 px-6 snap-start"
            >
                <h2 className="text-4xl font-bold mb-10">Learning</h2>

                <p className="text-lg max-w-3xl text-center mb-6">
                    I am currently learning the following technologies and certifications:
                </p>

                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>CEH (Certified Ethical Hacker)</li>
                    <li>Forensic</li>
                    <li>OSCP (Offensive Security Certified Professional)</li>
                    <li>Security+ (CompTIA)</li>
                    <li>Web Penetration Testing</li>
                </ul>

                <a
                    href="#infoSec"
                    className="mt-10 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition"
                >
                    My Lecture
                </a>
            </div> */}

            {/* ===== Contact Section ===== */}
            <div
                id="contact"
                name="contact"
                className="h-[50vh] flex flex-col justify-center items-center bg-slate-900 text-white w-full py-20 px-6 snap-start"
            >
                <h2 className="text-4xl font-bold mb-12">Contact</h2>

                {/* ===== Email & Phone ===== */}
                <div className="flex flex-col gap-4 mb-8 items-center text-lg">
                    {CONTACT_INFO.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <item.icon className="w-6 h-6" />
                            <span>
                                <strong>{item.label}:</strong>{' '}
                                {Array.isArray(item.value) ? item.value.join(' or ') : item.value}
                            </span>
                        </div>
                    ))}
                </div>

                {/* ===== Social Links ===== */}
                <div className="flex gap-6 items-center text-lg">
                    {SOCIAL_LINKS.map((social, index) => {
                        const Icon = social.icon
                        return (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 p-3 rounded-full border border-gray-700 transition ${social.color} ${social.bgColor} hover:scale-110`}
                            >
                                <Icon className="w-6 h-6" />
                                <span>{social.name}</span>
                            </a>
                        )
                    })}
                </div>

                <p className="text-gray-400 text-sm mt-6">
                    © 2025 Nuttamon Malakan. All rights reserved.
                </p>
            </div>


        </div>
    )
}

export default Home

