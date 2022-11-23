import ReactMarkdown from "react-markdown";
import { useText } from "../context/TextContext";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";


const Result = () => {

    const { text } = useText();

    const [copied, setCopied] = useState(false);

    const handleCopied = () => {
        setCopied(true)
        setInterval(() => {
            setCopied(false)
        }, 2000);
    }

    return (
        <div className="resultdiv">
            <div style={{ display: "flex", alignItems: "center", lineHeight: "10px", justifyContent: "space-between", padding: "0.3em" }}>
                <p>Result</p>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <CopyToClipboard text={text}>
                        <button style={{ borderRadius: "3px", padding: "0.5em 0.67em", border: "1px solid #767651", backgroundColor: "transparent"}} onClick={handleCopied}>Copy</button>
                    </CopyToClipboard>
                    {copied &&
                        <span>
                            <img style={{ width: "50px", borderRadius: "3px", transition: "0.3s" }} src="https://media.tenor.com/oCJsYj0GcEkAAAAM/copy-paste.gif"
                                alt="" />
                        </span>
                    }
                </div>
            </div>
            <div className='result'>
                <ReactMarkdown children={text} />
            </div>
        </div>
    )
}

export default Result