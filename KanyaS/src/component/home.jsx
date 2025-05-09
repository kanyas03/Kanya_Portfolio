import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDocker,FaGithub } from 'react-icons/fa';
import { SiTypescript, SiNestjs, SiMongodb } from 'react-icons/si';
import Navbar from './Navbar';
import kanyaImage from '../assets/kanya.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import project1 from '../assets/inventory.png';
import project2 from '../assets/mylibaray.png';
import project3 from '../assets/trustvibe.png'

const Home = () => {
  return (
    <>
      <Navbar />

     {/* Home Section */}
<section
  id="home"
  style={{
    background: 'linear-gradient(135deg, #f8f9fa, #e0f7fa)',
    padding: '80px 0',
    minHeight: '100vh',
  }}
>
  <div className="container d-flex flex-column-reverse flex-md-row align-items-center justify-content-between gap-5 text-center text-md-start">
    {/* Text Content */}
    <div className="flex-fill">
      <h1 className="fw-bold" style={{ fontSize: '3rem', color: '#0d6efd' }}>
        Hi, I'm <span style={{ color: '#000' }}>Kanya S</span>
      </h1>
      <p className="lead text-muted mt-3" style={{ fontSize: '1.25rem' }}>
        A driven Computer Science graduate from SN College Cherthala with a passion for building innovative web
        solutions and a strong ambition to thrive in full stack development.
      </p>
      <a
  href="/KanyaS_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary btn-lg mt-4"
>
  View Resume
</a>

    </div>

    {/* Image */}
    <div className="flex-fill text-center">
      <img
        src={kanyaImage}
        alt="Kanya S"
        className="img-fluid rounded shadow"
        style={{
          maxWidth: '300px',
          height: '400px',
          objectFit: 'cover',
          transition: 'transform 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />
    </div>
  </div>
</section>


      {/* About Me Section */}
      <section id="about" className="py-5 bg-white text-center">
        <div className="container">
          <h2 className="text-primary mb-4">About Me</h2>
          <p className="lead text-muted">
          'I'm currently pursuing a PG Diploma in Blockchain from Kerala Blockchain Academy,
           where I'm deepening my knowledge in decentralized technologies and secure digital systems. 
           With a strong foundation in Computer Science and hands-on experience using the MERN stack, 
           I love building user-friendly, responsive web and mobile applications. 
           I work confidently with tools like React, Node.js, MongoDB, Docker, and NestJS. I'm a continuous learner with a passion for solving real-world problems through code, 
           and I thrive in collaborative environments that challenge me to grow. 
           My goal is to become a versatile full stack developer capable of delivering impactful solutions that combine creativity, efficiency, and innovation.'
          </p>
        </div>
      </section>
        
        {/* Projects Section */}
      <section id="Projects" className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="text-primary mb-5">Projects</h2>
          <div className="row g-4">
            {/* Project 1 */}
            <div className="col-md-4 bg"><div className="card h-100 shadow-sm">
              <img
                src={project1}
                className="card-img-top"
                alt="CareWare"
                style={{
                  height: '200px',
                  width: '100%',
                  objectFit: 'contain',
                  padding: '10px'
                }}
              />
              <div className="card-body" style={{ backgroundColor: ' #F7F4E5' }}>
                <h5 className="card-title text-dark">CareWare - Hospital Inventory</h5>
                <p className="card-text text-muted">
                  A MERN stack web app for hospital inventory management, containerized using Docker.
                </p>
                <a
                        href="https://github.com/kanyas03/CareWare_Inventory"
                        target="_blank"
                        rel="noreferrer"
                        className="text-dark"
                      >
                        <FaGithub size={20} />
                      </a>
              </div>
            </div>
          </div>

              {/* Project 2 */}
              <div className="col-md-4" >
                
                  <div className="card h-100 shadow-sm">
                    <img src={project2} className="card-img-top" alt="library" style={{ height: '150px', objectFit: 'cover' }} />
                    <div className="card-body" style={{ backgroundColor: ' #F7F4E5' }}>
                      <h5 className="card-title text-dark">My Library</h5>
                      <p className="card-text text-muted"> A full-stack web application where users can explore, collect, and read books online. Built using MERN stack with image upload and user collections.</p>
                      <a
                  href="https://github.com/kanyas03/CareWare_Inventory"
                  target="_blank"
                  rel="noreferrer"
                  className="text-dark"
                >
                  <FaGithub size={20} />
                </a>
                    </div>
                  </div>
                
              </div>

              {/* Project 3 */}
              <div className="col-md-4">
              
                  <div className="card h-100 shadow-sm">
                    <img src={project3} className="card-img-top" alt="TrustVibe" style={{ height: '200px', objectFit: 'cover' }} />
                    <div className="card-body" style={{ backgroundColor: ' #F7F4E5' }}>
                      <h5 className="card-title text-dark">TrustVibe - Review App</h5>
                      <p className="card-text text-muted">A mobile product review app built with React Native and NestJS. Features full CRUD.</p>
                      <a
                  href="https://github.com/kanyas03/CareWare_Inventory"
                  target="_blank"
                  rel="noreferrer"
                  className="text-dark"
                >
                  <FaGithub size={20} />
                </a>
                    </div>
                  </div>
            
              </div>

            </div>
          </div>
        </section>
      

      {/* Education Section */}
      <section id="education" className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="text-primary mb-4">Education</h2>
          <ul className="list-group">
            <li className="list-group-item">🎓 PG Diploma in Blockchain - Kerala Blockchain Academy (Ongoing)</li>
            <li className="list-group-item">🎓 BSc Computer Science - SN College Cherthala (2020–2023)</li>
            <li className="list-group-item">🎓 Higher Secondary - SNMGBHSS Cherthala (2020)</li>
          </ul>
        </div>
      </section>



      {/* Skills Section */}
      <section id="skills" className="py-5 bg-white text-center">
  <div className="container">
    <h2 className="text-primary mb-4">Skills</h2>
    <h5 className="fw-bold">Technical Skills</h5>

    <div className="d-flex flex-wrap justify-content-center gap-4">
  <FaHtml5 size={50} color="#E34F26" />       {/* HTML: orange */}
  <FaCss3Alt size={50} color="#1572B6" />      {/* CSS: blue */}
  <FaJs size={50} color="#F7DF1E" />           {/* JS: yellow */}
  <SiTypescript size={50} color="#3178C6" />   {/* TS: blue */}
  <FaReact size={50} color="#61DAFB" />        {/* React: cyan */}
  <FaNode size={50} color="#339933" />         {/* Node.js: green */}
  <SiNestjs size={50} color="#E0234E" />       {/* NestJS: red */}
  <SiMongodb size={50} color="#47A248" />      {/* MongoDB: green */}
  <FaDocker size={50} color="#2496ED" />       {/* Docker: blue */}
</div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="text-primary mb-4">Contact Me</h2>
          <p className="lead">Email: <a href="mailto:kanyas0395@gmail.com">kanyas0395@gmail.com</a></p>
          <p className="lead">Phone: <a href="tel:8891404862">8891404862</a></p>
          <p>
            <a href="https://github.com/kanyas03" target="_blank" rel="noreferrer" className="btn btn-dark m-2">GitHub</a>
            <a href="https://linkedin.com/in/kanya03" target="_blank" rel="noreferrer" className="btn btn-primary m-2">LinkedIn</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">&copy; 2025 Kanya S. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
