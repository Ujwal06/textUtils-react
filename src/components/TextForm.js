import React,{useState} from 'react';


export default function TextForm(props) {
    const [text, setText] = useState('');  // Setting initial state to empty
    const [emails, setEmails] = useState([]);

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();  // Fixing the undefined variable issue
        setText(newText);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleLoCopy = () => {
        var textArea = document.getElementById('text');
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
    };

    const handleExtractEmails = () => {
        const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const extractedEmails = text.match(emailPattern) || [];  // Extract emails or set empty array
        setEmails(extractedEmails.join('\n'));
    };

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
            <label htmlFor="exampleFormControlTextarea1" className="form-label" ></label>
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    id="text"
                    rows="2" style={{ caretColor: 'white' }}
                ></textarea>
            </div>
            <div class="d-grid gap-3  d-md-block" >
                <button className="btn btn-primary me-2" type="button" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary me-2" type="button" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary me-2" type="button" onClick={handleLoCopy}>Copy</button>
                <button className="btn btn-primary me-2" type="button" onClick={handleExtractEmails}>Extract Emails</button>
            </div>
            {emails && (
                <div className="mb-3 mt-3">
                    <label htmlFor="emailTextarea" className="form-label">Extracted Emails:</label>
                    <textarea
                        className="form-control"
                        id="emailTextarea"
                        rows="3"
                        readOnly
                        value={emails}
                    ></textarea>
                </div>
            )}
        </div>
    );
}
