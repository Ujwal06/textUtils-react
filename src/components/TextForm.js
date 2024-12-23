import React, { useState } from 'react';


export default function TextForm(props , mode) {
    const [text, setText] = useState('');
    const [emails, setEmails] = useState([]);
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    const caesarCipher = (str, shift) => {
        return str.split('').map(char => {
            if (/[a-z]/i.test(char)) {
                const code = char.charCodeAt(0);
                const base = code >= 65 && code <= 90 ? 65 : 97;
                return String.fromCharCode(((code - base + shift) % 26) + base);
            }
            return char;
        }).join('');
    };

    const handleEncrypt = () => setEncryptedText(caesarCipher(text, 3));
    const handleDecrypt = () => setDecryptedText(caesarCipher(text, -3));
    const handleUpClick = () => setText(text.toUpperCase());
    const handleLoClick = () => setText(text.toLowerCase());
    const handleLoCopy = () => navigator.clipboard.writeText(text);

    const handleExtractEmails = () => {
        const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        setEmails(text.match(emailPattern) || []);
    };

    const handleOnChange = (event) => {
        const newText = event.target.value;
        setText(newText);
        setWordCount(newText.trim().split(/\s+/).filter(word => word.length > 0).length);
        setCharCount(newText.length);
    };

    return (
        <div className="container">
            <h2>{props.heading}</h2>
            <textarea
                id="text"
                rows="8"
                className="form-control"
                value={text}
                onChange={handleOnChange}
            ></textarea>

            <div className="d-grid gap-3 d-md-block my-3">
                <button className="btn btn-primary me-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary me-2" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary me-2" onClick={handleLoCopy}>Copy</button>
                <button className="btn btn-primary me-2" onClick={handleExtractEmails}>Extract Emails</button>
                <button className="btn btn-primary me-2" onClick={handleEncrypt}>Encrypt</button>
                <button className="btn btn- me-2" onClick={handleDecrypt}>Decrypt</button>
            </div>

            <div className="my-3">
                <h3>Text Analysis</h3>
                <p>Word Count: {wordCount}</p>
                <p>Character Count: {charCount}</p>
            </div>

            {emails.length > 0 && (
                <div className="mb-3">
                    <h3>Extracted Emails</h3>
                    <textarea
                        className="form-control"
                        rows="3"
                        readOnly
                        value={emails.join('\n')}
                    ></textarea>
                </div>
            )}

{encryptedText && (
                <div
                    className="my-3 p-3"
                    style={{
                        backgroundColor: mode === 'dark' ? '#e9ecef':'#333' ,
                        color: mode === 'dark' ? 'white' : 'black',
                        borderRadius: '5px'
                    }}
                >
                    <h4>Encrypted Text</h4>
                    <p>{encryptedText}</p>
                </div>
            )}

            {decryptedText && (
                <div
                    className="my-3 p-3"
                    style={{
                        backgroundColor: mode === 'dark' ? '#444' : '#e9ecef',
                        color: mode === 'dark' ? 'white' : 'black',
                        borderRadius: '5px'
                    }}
                >
                    <h4>Decrypted Text</h4>
                    <p>{decryptedText}</p>
                </div>
            )}
        </div>
    );
}
