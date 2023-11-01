import {useState,React} from 'react';
import Checkbox from './checkbox'
import Classes from '../data';

function Results({search, saveState}) {
    //2. be able to diplay the data 
    //3. create save feature

    //dummy inputs/outputs
    //Input examples: (following degreeworks format)
    //Example #1 “CISC. 3140 or 3142 or 3160 or 3171 or 3220”
    //Example #2 “ECON. 2200 or FINC. 3310 or FINC 3330 or ECON 3400”
    //Example #3 “BIOL 1002 or BIOL 3003 or BIOL 3004 or CHEM 2200 or CHEM 2201
    
    //make a function that returns a list of the classes
    //make a function that maps the list of classes to the checkbox
    //style checkbox to look decent

    const classObj = {
      name: String,
      info: String
    }

    var classList = (list, names) =>{
      var result = [];
      for (const [key, value] of list) {
        for (var x of names){
          if(key === x){
            var object = classObj;
            object.name = key;
            object.name = value;
            result.push(object)
          }
        }
      }
      return result;
    }

    const Saved = ({ data }) => {
        return (
          <div>
            The data is: {}
          </div>
        );
      }

      //classList(Classes, ["CISC 3140", "CISC 3142", "CISC 3160", "CISC 3171", "CISC 3220"]);
    if(!saveState){
      if(search === "CISC. 3140 or 3142 or 3160 or 3171 or 3220"){
        const classes = classList(Classes, ["CISC 3140", "CISC 3142", "CISC 3160", "CISC 3171", "CISC 3220"]);
        return(
          <div>
          {classes.map((item, index) => (
            <Checkbox key={index} className={item.name} classInfo={item.info}></Checkbox>
          ))}
          </div>
        );
      }
        
      if(search === "ECON. 2200 or FINC. 3310 or FINC 3330 or ECON 3400"){
        return(
          <div>2</div>  
        );
      }
        
      if(search === "BIOL 1002 or BIOL 3003 or BIOL 3004 or CHEM 2200 or CHEM 2201"){
        return(
          <div>3</div>  
        );
      }
        
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