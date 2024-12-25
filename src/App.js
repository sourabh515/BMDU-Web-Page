import React, { useState } from 'react';
import PlanCard from './components/PlanCards';

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const handleVideoPlay = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="app-container flex items-center justify-center w-full h-screen bg-red-300">
      <div className='main w-[400px] h-[700px] bg-white rounded-xl '>

        {/* Video card */}
        <div className="video-player-container h-[300px] flex flex-col items-center p-10 bg-[#fc9f4e] rounded-t-xl">
          {/* skip button */}
          <div className='skip-btn ml-[16rem] mb-3'>
            <button className='w-[100px] h-[40px] rounded-lg bg-[#67CEC7] text-white'>Skip</button>
          </div>


          <div className='video-play w-[360px] h-[180px] p-5 rounded-xl'>

            <div className='w-full h-full bg-white rounded-xl flex items-center justify-center'><button onClick={handleVideoPlay} className="video-play-button text-2xl text-[#ce4853]">
              {isVideoPlaying ? 'Pause' : 'Video Play'}
            </button>
              {isVideoPlaying && (
                <video id="video" src="https://youtu.be/9qjG_LumuBY" controls autoPlay />
              )}</div>

          </div>
        </div>

        <div className="plans-container bg-[#67CEC7] p-3 overflow-y-auto h-[400px] rounded-b-xl "> 
    <PlanCard /> 
    {/* Add more PlanCard components here */}
</div>

      </div>
    </div>
  );
}

export default App;