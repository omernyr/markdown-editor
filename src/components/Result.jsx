import ReactMarkdown from "react-markdown";
import { useText } from "../context/TextContext";


const Result = () => {

    const { text } = useText();

    return (
        <div className="resultdiv">
            <p>Result</p>
            <div className='result'>
                <ReactMarkdown children={text} />
            </div>
        </div>
    )
}

export default Result