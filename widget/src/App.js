import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate'

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is favourite JS library amongst engineers'
    },
    {
        title: 'How do you use React?',
        content: 'One uses react by creating components.'
    },
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }
];

/*FOR DROPDOWN */
/*export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);
    return (<div>
        <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
        {showDropdown?
        <Dropdown
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
        /> : null
        }
    </div>
    );
};*/

export default () => {
    return (<div>
        <Translate/>
    </div>
    );
};