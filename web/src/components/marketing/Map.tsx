import React from 'react';
import GoogleMapReact from 'google-map-react';

export const Map: React.FC = () => {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
                }}
                defaultCenter={{ lat: 51.51, lng: -0.2 }}
                defaultZoom={14}
                options={{
                    zoomControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                }}
            ></GoogleMapReact>
        </div>
    );
};
