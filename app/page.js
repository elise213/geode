"use client"
import Image from 'next/image';
import React from 'react';
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css';
import Video from "../app/components/Video";
import styles from './globals.css';
import { useEffect } from "react";


const Home = () => {
  // useEffect(() => {
  //   require("bootstrap/dist/js/bootstrap.bundle.min.js");
  // }, []);
  return (
    <main className={styles.main}>
      <div className="home-body">
        <div className="welcome">
          <Video />
          {/* <Image width={2000} height={2000} className="home-logo" src={"/img/CODESUBLIME.png"} alt=""></Image> */}
        </div>
        <div className="page-container">
          {/* <h3>CAPITAL REALTY SERVICES, INC.</h3> */}
          <p className="about">
            As a full-service software engineering and design collective, we offer a comprehensive range of services. Our dedicated team is passionate about providing the highest level of service to ensure your satisfaction.
            <div className="d-flex justify-content-center w-100">
              <div className=" service">
                Web design: We create stunning and user-friendly websites that leave a lasting impression.
              </div>
              <div className="service">
                Full-stack software development: Our team of experts develops robust and scalable software solutions tailored to your requirements.
              </div>
            </div>
            <div className="d-flex justify-content-center w-100">
              <div className="service">
                Custom software and applications: We craft custom software and applications that align perfectly with your business goals.
              </div>
              <div className=" service">
                E-commerce solutions: Drive your online business forward with our e-commerce expertise and tailored solutions.
              </div>
            </div>
            {/* <div className="d-flex justify-content-center w-100">
              <div className=" service">
                Video editing and Motion Graphics: From professional editing to captivating effects, we bring your videos and websites to life.
              </div>
              <div className="service">
                Search Engine Optimization (SEO): Increase your online visibility and attract more visitors with our effective SEO strategies.
              </div>
            </div>
            <div className="d-flex justify-content-center w-100">
              <div className=" service">
                3D Modeling and 3D Animation: ...CAD programs Maya etc... character rigging... Motion Capture
              </div>
              <div className="service">
                Something else...
              </div>
            </div> */}

          </p>
          <Link href={"/services"} className="btn bio-btn float">
            Learn More About Our Services
          </Link>
        </div>
      </div>
    </main >
  )
}

export default Home;