import React,  {useState}  from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate';
import Route from './components/Route'
import Header from './components/Header'

const options = [
    {
        label: 'Red',
        value: 'red'
    }, 
    {
        label: 'Green', 
        value: 'green',
    }, 
    {
        label: 'Blue', 
        value: 'blue'
    }
]

const items = [
    { 
        title: "What is React?", 
        content: "React is a frontend javascript framework"
    }, 
    {
        title: "Why use React?", 
        content: "React is a favorite library among engineers"
    },
    {
        title: "How do you use react?", 
        content: "You create components"
    }
]

const showAccordion = () =>{
    if(window.location.pathname === '/'){
        return <Accordion items={items} />   
    }
}

const showList = () =>{
    if(window.location.pathname === '/list'){
        return <Search />   
    }
}

const showDropdown = () =>{
    if(window.location.pathname === '/dropdown'){
        return <Dropdown />   
    }
}

const showTranslate = () =>{
    if(window.location.pathname === '/translate'){
        return <Translate />   
    }
}


const App = () => {
    const [selected, setSelected] = useState(options[0])
   
    return (
        <div>
            <Header />
           <Route path="/">
            <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown label="Select a color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
       
} 

export default App;