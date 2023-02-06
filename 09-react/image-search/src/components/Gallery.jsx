import React from 'react';

// Functional components behave just like render()
const Gallery = function (props) {
    return (
        <div>
            { props.images.map((url) => <img src={url} key={ url } />) }
        </div>
    );
}

export default Gallery;