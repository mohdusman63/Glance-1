import React, {Component, useState} from 'react';

const Forms = () => {
    const [course, setCourse] = useState()
    const [inputList, setInputList] = useState(
        [{firstName: '', lastName: ''}])

    const handleChange = (e, index) => {

        const {value, name} = e.target
        const list = [...inputList]
        list[index][name] = value
        setInputList(list)

    }
    const addInput = () => {
        setInputList([...inputList, {firstName: '', lastName: ''}])
    }
    const removeInput=(index)=>{
        const list=[...inputList]
        list.splice(index,1)
        setInputList(list)

    }

    return (
        <div>
            {inputList.map((element, index) => {
                return (
                    <>
                        <input type="text"
                               value={element.firstName}
                               placeholder={element.firstName}
                               name="firstName"
                               onChange={e => handleChange(e, index)}/>


                        <input type="text"
                               value={element.lastName}
                               placeholder={element.lastName}
                               name="lastName"
                               onChange={e => handleChange(e, index)}/>

                         <input type="button" value="add" onClick={addInput}/>
                        <input type="button" value="remove" onClick={()=>removeInput(index)}/>


                    </>
                )
            })}


            <pre>{JSON.stringify(inputList)}</pre>
        </div>
    );
}

export default Forms;