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
            <div style={{ display: "flex", justifyContent: "space-between", padding: "0.3em" }}>
                <p>Result</p>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <CopyToClipboard text={text}>
                        <button onClick={handleCopied}>Copy</button>
                    </CopyToClipboard>
                    {copied &&
                        <span>
                            <img style={{ width: "50px" }} src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"
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