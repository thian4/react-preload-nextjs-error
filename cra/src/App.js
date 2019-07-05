import React from "react";
import "./App.css";
import { Preload } from "react-preload";

function App() {
  var loadingIndicator = <div>Loading...</div>;
  var images = [
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_l_002.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_k_002.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_l_015.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_ro_036.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_l_007.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_ro_033.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_a_007.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_l_001.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_l_006.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_ro_030.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_ro_010.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_ro_023.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_ro_032.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_r_001.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_k_004.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_ro_035.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_ro_031.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_a_008.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_l_013.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_k_003.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_ro_022.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_k_001.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_a_006.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_ro_034.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_r_002.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_l_003.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_l_014.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_ro_028.jpg",
    "http://photos.hotelbeds.com/giata/original/38/386602/386602a_hb_ro_029.jpg"
  ];

  return (
    <div className="App">
      <Preload
        loadingIndicator={loadingIndicator}
        images={images}
        resolveOnError={true}
        mountChildren={true}
      >
        {images.map(o => (
          <img alt="" style={{ width: "20%" }} src={o} />
        ))}
      </Preload>
    </div>
  );
}

export default App;
