import React from "react";
import styles from '../styles/video.css';
import Image from 'next/image';

const Video = () => {
    return (
        <div className="w-100 h-25">
            <Image width={500} height={530} className="home-logo" src={"/img/CODESUBLIME2.png"} alt=""></Image>

            <iframe className="iframe-video" width="1800" height="1000" src="https://www.youtube.com/embed/CTw1VFeYnHM?autoplay=1&loop=1&mute=1&controls=0&playlist=CTw1VFeYnHM&showinfo=0&rel=0&enablejsapi=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>
        </div>
    );
};

export default Video;
