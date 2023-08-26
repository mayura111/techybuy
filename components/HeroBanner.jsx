import React, { useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import { urlFor } from '../lib/client';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroBanner = ({ banner: { image } }) => {
  const [index] = useState(0);
  return (
        <Carousel 
        showThumbs={false} 
        autoPlay
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        >
          
            <div className="hero-banner-card">
              <div key={image._id}>
                <img src={urlFor(image && image[index])} className='hero-banner-image'/>
              </div>
            
            <button className="hero-banner-button">Shop Now</button>
          </div>
         
          
        </Carousel>
  )
}


// import { Carousel } from "react-responsive-carousel";
// import { items } from "../public/Items.json";
// import styles from "../styles/Responsive.module.css";

// export default function ResponsiveCarousel() {
//   const { swiper } = items;
//   return (
//     <div className={styles.container}>
//       <Carousel
//         showArrows={true}
//         // autoPlay={true}
//         showIndicators={true}
//         infiniteLoop={true}
//         dynamicHeight={false}
//         className={styles.mySwiper}
//       >
//         {swiper.map((item) => (
//           <div key={item.id} className={styles.swipItem}>
//             <div className={styles.imgBox}>
//               <img src={item.imageUrl} alt="slides" />
//             </div>
//             <div className={styles.detail}>
//               <h2>{item.title}</h2>
//               <p>{item.text}</p>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// }

export default HeroBanner