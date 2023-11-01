import {useState,React} from 'react';
import Checkbox from './checkbox'
import Classes from '../data';

function Results({search, saveState}) {
  const [savedItems, setSavedItems] = useState([]);

  const handleCheckChange = (classLabel, isChecked) => {
    if (isChecked) {
      // Add the item to the list
      console.log("entered");
      setSavedItems([...savedItems, classLabel]);
    } else {
      // Remove the item from the list
      setSavedItems(savedItems.filter(item => item !== classLabel));
    }
  };

    //dummy inputs/outputs
    //Input examples: (following degreeworks format)
    //Example #1 “CISC. 3140 or 3142 or 3160 or 3171 or 3220”
    //Example #2 “ECON. 2200 or FINC. 3310 or FINC 3330 or ECON 3400”
    //Example #3 “BIOL 1002 or BIOL 3003 or BIOL 3004 or CHEM 2200 or CHEM 2201

    function addItem(item){
      const newItem = { name: 'Example Item' };

      axios.post('http://localhost:3000/api/saved-items', newItem)
        .then((response) => {
          console.log('Item saved:', response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    function removeItem(){
      const itemIdToRemove = '123'; // Replace with the actual ID of the item you want to remove

      axios.delete(`http://localhost:3000/api/saved-items/${itemIdToRemove}`)
        .then((response) => {
          console.log('Item removed:', response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    function getSavedItems(){
      axios.get('http://localhost:3000/api/saved-items')
        .then((response) => {
          const savedItems = response.data;
          console.log('Saved Items:', savedItems);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    var classList = (names) =>{
      var result = [];
      for (const [key, value] of Classes) {
        for (var x of names){
          if(key === x){
            let classObj = {
              name: String,
              info: String
            }
            classObj.name = key;
            classObj.info = value;
            result.push(classObj);
          }
        }
      }
      return result;
    }

    const Saved = () => {
      console.log(savedItems)
        return (
          <div>
            <h1>Checked Items:</h1>
              <ul>
                {savedItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
          </div>
        );
      }

      //classList(Classes, ["CISC 3140", "CISC 3142", "CISC 3160", "CISC 3171", "CISC 3220"]);
    if(!saveState){
      if(search === "CISC. 3140 or 3142 or 3160 or 3171 or 3220"){
        const classes = classList(["CISC 3140", "CISC 3142", "CISC 3160", "CISC 3171", "CISC 3220"]);
        return(
          <div>
          {classes.map((item, index) => (
            <Checkbox key={index} className={item.name} classInfo={item.info} onCheckChange={handleCheckChange}></Checkbox>
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