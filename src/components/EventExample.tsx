import React, { useState } from "react"
import { useRef } from "react"

const EventExample = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const InputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(InputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log(e)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }
    return (
        <div>
            <input type="text" onChange={changeHandler} placeholder='Управляемый'/>
            <input type='text' ref={InputRef} placeholder='Ref'/>

            <button onClick={clickHandler}>Click</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red', margin: 10}}></div>
            
            <div 
                style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red', margin: 10}}
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
            >
            </div>

        </div>        
    )

}

export default EventExample