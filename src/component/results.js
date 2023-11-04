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
      axios.get('https://degreeworks.netlify.app/.netlify/functions/api')
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

      axios.post('https://degreeworks.netlify.app/.netlify/functions/api/add/', newItem)
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

          axios.delete(`https://degreeworks.netlify.app/.netlify/functions/api/delete-item/${itemIdToRemove}`)
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
      if (object.length > 0){
        for(let i = 0; i < object.length;i++){
          let classObj = {
            name: object[i].name,
            info: object[i].info
          }
          array.push(classObj);
        }
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
        <div className="saved-items-container">
          <h1 id="saved-items-heading">Saved Items:</h1>
          {savedItems.map((item, index) => (
            <div key={index} className="float">
              <h3>{item.name}</h3>
              <p>{item.info}</p>
              <button className="remove-button" onClick={() => setTarget(item)}>✕</button>
            </div>
          ))}
        </div>
      );
    };

    if (!saveState) {
      let classes;
      if (search === "CISC. 3140 or 3142 or 3160 or 3171 or 3220") {
        classes = classList(["CISC 3140", "CISC 3142", "CISC 3160", "CISC 3171", "CISC 3220"]);
      } else if (search === "ECON. 2200 or FINC. 3310 or FINC 3330 or ECON 3400") {
        classes = classList(["ECON 2200", "FINC 3310", "FINC 3330", "ECON 3400"]);
      } else if (search === "BIOL 1002 or BIOL 3003 or BIOL 3004 or CHEM 2200 or CHEM 2201") {
        classes = classList(["BIOL 1002", "BIOL 3003", "BIOL 3004", "CHEM 2200", "CHEM 2201"]);
      }

      return (
        <div>
          {classes && classes.map((item, index) => (
            <Checkbox key={index} className={item.name} classInfo={item.info} onCheckChange={handleCheckChange} />
          ))}
        </div>
      );
    } else {
      return <Saved />;
    }

}

export default Results