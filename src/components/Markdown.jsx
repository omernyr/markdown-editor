import React, { useEffect } from 'react'
import { useText } from '../context/TextContext';

const Markdown = () => {

    const { text, setText } = useText();

    useEffect(() => {
        console.log(text);
    }, [text])

    return (
        <div className='markdiv'>
            <p>Editor</p>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className='markdown'>
            </textarea>
        </div>
    )
}

export default Markdown