import React from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search'

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

export default () => {
    return <div><Search /></div>
}