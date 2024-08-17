import React from 'react';
import CartItem from '../Cart/CartItem';

const ImageComponent = () => {
  // Replace this with your Unsplash image URL
  const imageUrl = 'https://source.unsplash.com/random';

  return (
    <div>
      <h2>Displaying an Image from Unsplash</h2>
      {/* Using the image URL directly in an <img> tag */}
      <img src={imageUrl} alt="Unsplash Image" style={{ width: '100%', maxWidth: '500px' }} />

      {/* If using the image URL as a background image in CSS */}
      {/* <div style={{ backgroundImage: `url(${imageUrl})`, width: '100%', height: '300px', backgroundSize:
      
      'cover', backgroundPosition: 'center' }}></div> */}
      <CartItem/>
    </div>
  );
}

export default ImageComponent;


