import ReactMarkdown from "react-markdown";
import { useText } from "../context/TextContext";


const Result = () => {

    const { text } = useText();

    return (
        <div className='result'>
            <ReactMarkdown children={text} />
        </div>
    )
}

export default Result