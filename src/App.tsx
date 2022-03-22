import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOnOff, setSwitchOnOff] = useState<boolean>(false)

    return (
        <div className="App">
            <OnOff
                on={switchOnOff}
                onChange={setSwitchOnOff}/>
            {/*<Accordion
                titleValue={'Menu'}
                collapsed={accordionCollapsed}
                onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>*/}
            <Rating
                value={ratingValue}
                onClick={setRatingValue}/>
        </div>
    );
}


export default App;