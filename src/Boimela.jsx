// import React from 'react';

import { useEffect, useState } from "react";

// const Boimela = () => {
//   return (
//     <div>
      
//     </div>
//   );
// };

// export default Boimela;

const Boimela = () => {
  const [boimela, Setboimela] = useState('')

  useEffect( () =>{
    console.log("useeffect is the important thing in react")
  },{})
  return (
    <div>
      <h4>bangladesh natinal boimel in near shahbagh</h4>
    </div>
  );
};

export default Boimela;