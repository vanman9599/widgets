import React, {useState} from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const options = [
    {
        label: 'Afrikaans', 
        value: 'af'
    }, 
    {
        label: 'Arabic', 
        value: 'ar'
    }, 
    {
        label: 'Hindi', 
        value: 'hi'
    }, 
    {
        label: 'Spanish', 
        value: 'es'
    }, 
    {
        label: 'Tagalog', 
        value: 'tl'
    }, 
    {
        label: 'Vietnamese', 
        value: 'vi'
    }, 
    {
        label: 'Igbo', 
        value: 'ig'
    }
]

const Translate = () =>{

const [language, setLanguage] = useState(options[0])
const [text,setText] = useState('')

return(
    <div>
        <div className="ui form">
            <div className="field">
                <label>Enter Text</label>
                <input value={text} onChange={(e)=> setText(e.target.value)} />
            </div>
        </div>
        
        <Dropdown label="Select a language" selected={language} onSelectedChange={setLanguage} options={options}/>
   <hr />
   <h3 className="ui header">output</h3>
   <Convert language={language} text={text} />
    </div>
)
}
export default Translate;