import React from 'react';
import './PhotoGrid.css'; // Import the CSS file

const photos = [
    { id: 1, src: '/path/to/photo1.jpg', alt: 'Photo 1' },
    { id: 2, src: '/path/to/photo2.jpg', alt: 'Photo 2' },
    { id: 3, src: '/path/to/photo3.jpg', alt: 'Photo 3' },
    { id: 4, src: '/path/to/photo4.jpg', alt: 'Photo 4' },
    { id: 5, src: '/path/to/photo5.jpg', alt: 'Photo 5' },
    { id: 6, src: '/path/to/photo6.jpg', alt: 'Photo 6' },
    // Add more photos as needed
];

const PhotoGrid = () => {
    return (
        <div className="photo-grid">
            {photos.map(photo => (
                <div key={photo.id} className="photo-item">
                    <img src={photo.src} alt={photo.alt} />
                </div>
            ))}
        </div>
    );
};

export default PhotoGrid;
