import React from 'react'

function Results({search}) {
    



    const saved = ({ data }) => {
        return (
          <div>
            The data is: {data}
          </div>
        );
      }

    if(search === "CISC. 3140 or 3142 or 3160 or 3171 or 3220")
        return(
            <div>1</div>  
    );
    if(search === "ECON. 2200 or FINC. 3310 or FINC 3330 or ECON 3400")
        return(
            <div>2</div>  
    );
    if(search === "BIOL 1002 or BIOL 3003 or BIOL 3004 or CHEM 2200 or CHEM 2201")
        return(
            <div>3</div>  
    );
 
    return(
        <div></div>
    );

}

export default Results