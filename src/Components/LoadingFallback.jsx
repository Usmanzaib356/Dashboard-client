import React from 'react';
import { RingLoader } from 'react-spinners';

function LoadingFallback() {
  return (
    <div
      className="d-flex align-items-center justify-content-center "
      style={{ height: '70vh' }}
    >
      <div className="align-self-center">
        <RingLoader size={120} color="#6495ED" speedMultiplier={1.5} />
      </div>
    </div>
  );
}

export default LoadingFallback;
