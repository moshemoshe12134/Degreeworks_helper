import {useEffect,useState,React} from 'react';
import axios from 'axios';
import Checkbox from './checkbox'
import Classes from '../data';
    //dummy inputs/outputs
    //Input examples: (following degreeworks format)
    //Example #1 “CISC. 3140 or 3142 or 3160 or 3171 or 3220”
    //Example #2 “ECON. 2200 or FINC. 3310 or FINC 3330 or ECON 3400”
    //Example #3 “BIOL 1002 or BIOL 3003 or BIOL 3004 or CHEM 2200 or CHEM 2201

function Results({search, saveState}) {
  const [savedItems, setSavedItems] = useState([]);
  const [target, setTarget] = useState();


  useEffect(() => {
    if(saveState){
      axios.get('http://localhost:3001/api/saved-items')
        .then((response) => {
          const receivedItems = response.data;

          setSavedItems(createArray(receivedItems));
          console.log('Saved Items:', receivedItems);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [saveState]);

  useEffect(()=>{
    removeItem(target);
  }, [target, removeItem]);

    function addItem(item){
      const newItem = item;

      axios.post('http://localhost:3001/api/saved-items', newItem)
        .then((response) => {
          console.log('Item saved:', response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    function removeItem(classLabel){
      if(classLabel){
        const itemIdToRemove = classLabel.name; // Replace with the actual ID of the item you want to remove

          axios.delete(`http://localhost:3001/api/saved-items/${itemIdToRemove}`)
            .then((response) => {
              const receivedItems = response.data;
              console.log('Item removed:', response.data);
              setSavedItems(createArray(receivedItems));
            })
            .catch((error) => {
              console.error('Error:', error);
            });
      }
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

    function createArray(object){
      let array = [];
      for(let i = 0; i < object.length;i++){
        let classObj = {
          name: object[i].name,
          info: object[i].info
        }
        array.push(classObj);
      }
      return array;  
    }

    const handleCheckChange = (classLabel, isChecked) => {
      if (isChecked) {
        // Add the item to the list
        console.log("entered");
        setSavedItems([...savedItems, classLabel]);
        addItem(classLabel);
      } else {
        // Remove the item from the list
        setSavedItems(savedItems.filter(item => item !== classLabel));
        removeItem(classLabel);
      }
    };

    const Saved = () => {
        return (
          <div>
            <h1>Saved Items:</h1>
                {savedItems.map((item, index) => (
                    <div key={index}>
                      <div class="float">
                        <h3>{item.name}</h3>
                        <p> {item.info}</p>
                      </div>
                      <button class="remove-button" onClick={()=>{setTarget(item)}}>Remove</button>
                    </div>
                ))}
          </div>
        );
      }

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