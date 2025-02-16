import React from 'react';

const MapEmbed = () => {
  return (
    <div className="map-container my-8">
      <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Los%20Angeles+()&amp;t=k&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
  );
};

export default MapEmbed;
