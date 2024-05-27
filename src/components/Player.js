import React from 'react';

function Player() {
  return (
    <div className='container-fluid' style={{backgroundColor:"#F5EEF8 ", textAlign: "center", maxWidth: "800px", margin: "0 auto", padding:"100px"}}>
      <h5 style={{ marginBottom: "1rem", fontWeight: "normal" }}>
      This project is a web-based music player application designed using HTML, CSS, and JavaScript to provide users with a seamless and enjoyable music listening experience. With its intuitive interface and rich features, this application aims to cater to music enthusiasts of all genres.

The user interface is designed to be clean, modern, and easy to navigate. Upon landing on the homepage, users are greeted with a visually appealing header showcasing the "Login" and "Signup" options, facilitating easy access to account management features. The central focus of the page is the prominent title "MUSIC PLAYER," capturing the essence of the application.

The title section features a dynamic animation using the Typed.js library, which dynamically displays various words associated with music, such as "love," "life," "harmony," and more. This animation not only adds a visually captivating element but also reflects the emotive and expressive nature of music.

To enhance user convenience, the application includes a search bar allowing users to quickly search for their favorite songs. The search bar is prominently positioned, featuring a responsive design and an intuitive search icon powered by the Font Awesome library.

The heart of the application lies in its extensive catalog of songs, each represented by a visually appealing card. These cards display relevant information such as the song title, artist name, and thumbnail image. Users can browse through the catalog and select their desired songs to listen to.

The application features a responsive design, ensuring compatibility across various devices and screen sizes. Whether accessed on a desktop, tablet, or mobile device, users can enjoy a consistent and optimized music listening experience.

Each song card is accompanied by a thumbnail image, providing users with a visual preview of the song. Additionally, clicking on a song card redirects users to a dedicated page where they can further explore details about the song and enjoy uninterrupted playback.

Overall, this music player application combines aesthetic appeal with functionality, offering users a delightful platform to discover, explore, and enjoy their favorite music tracks. Whether users seek relaxation, inspiration, or entertainment, this application aims to be their go-to destination for a soulful musical journey.
      </h5>
      <a href="https://jimapp.netlify.app/">To see my project click the link</a>
    </div>
  );
}

export default Player;
