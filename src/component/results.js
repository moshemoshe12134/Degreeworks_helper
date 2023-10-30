import {useState,React} from 'react';

function Results({search, saveState}) {
    //1. make a database that holds the data for each class referenced in dummy data
    //2. be able to diplay the data 
    //3. format the data into checkboxes and create save feature

    //dummy inputs/outputs
    //Input examples: (following degreeworks format)
    //Example #1 “CISC. 3140 or 3142 or 3160 or 3171 or 3220”
    //Example #2 “ECON. 2200 or FINC. 3310 or FINC 3330 or ECON 3400”
    //Example #3 “BIOL 1002 or BIOL 3003 or BIOL 3004 or CHEM 2200 or CHEM 2201
    
    const Saved = ({ data }) => {
        return (
          <div>
            The data is: {data}
          </div>
        );
      }

    if(!saveState){
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
    }else{
      return(
        <Saved></Saved>
      );
    }
 
    return(
        <div></div>
    );

}

export default Results