import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');  // Setting initial state to empty
    const [emails, setEmails] = useState([]);
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');
    const caesarCipher = (str, shift) => {
        return str.split('').map(char => {
            if (/[a-z]/i.test(char)) {
                const code = char.charCodeAt(0);
                const base = code >= 65 && code <= 90 ? 65 : 97; // A-Z or a-z
                return String.fromCharCode(((code - base + shift) % 26) + base);
            }
            return char; // Non-alphabetic characters are unchanged
        }).join('');
    };

    const handleEncrypt = () => {
        const encrypted = caesarCipher(text, 3); // Encrypt with a shift of 3
        setEncryptedText(encrypted);
    };

    const handleDecrypt = () => {
        const decrypted = caesarCipher(text, -3); // Decrypt with a shift of -3
        setDecryptedText(decrypted);
    };

    const handleUpClick = () => {
        setText(text.toUpperCase());
    };

    const handleLoClick = () => {
        setText(text.toLowerCase());
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleLoCopy = () => {
        navigator.clipboard.writeText(text);
    };

    const handleExtractEmails = () => {
        const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const extractedEmails = text.match(emailPattern) || [];  // Extract emails or set empty array
        setEmails(extractedEmails);
    };

    const handleCountWords = () => {
        // Ensure text is a string before calling trim()
        const currentText = String(text);
        const count = currentText.trim().split(/\s+/).filter((word) => word.length > 0).length;
        setWordCount(count);
    };

    const handleCountCharacters = () => {
        const currentText = String(text); // Ensure text is a string
        const count = currentText.length; // Count all characters including whitespace
        setCharCount(count);
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
                <button className="btn btn-primary me-2" type="button" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary me-2" type="button" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary me-2" type="button" onClick={handleLoCopy}>Copy</button>
                <button className="btn btn-primary me-2" type="button" onClick={handleExtractEmails}>Extract Emails</button>
                <button className="btn btn-primary me-2" type="button" onClick={handleCountWords}>Count Words</button>
                <button className="btn btn-primary me-2" type="button" onClick={handleCountCharacters}>Count Characters</button>
                <div className="my-3">
                    <button className="btn btn-primary me-2" type="button" onClick={handleEncrypt} style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>Encrypt</button>
                    <button className="btn btn-secondary me-2" type="button" onClick={handleDecrypt} style={{ backgroundColor: '#0069d9', borderColor: '#0069d9' }}>Decrypt</button>
                </div>
            </div>

            <div className="my-3">
                <h3>Results</h3>
                <div className="mb-3">
                    <h4>Encrypted Text</h4>
                    <div className="form-control" style={{ height: '100px', overflowY: 'auto' }}>
                        {encryptedText}
                    </div>
                </div>
                <div className="mb-3">
                    <h4>Decrypted Text</h4>
                    <div className="form-control" style={{ height: '100px', overflowY: 'auto' }}>
                        {decryptedText}
                    </div>
                </div>
            </div>

            <div className="my-3">
                <h3>Text Analysis</h3>
                <p>Word Count: {wordCount}</p>
                <p>Character Count (including spaces): {charCount}</p>
            </div>

            {/* Separate div for extracted emails */}
            {emails.length > 0 && (
                <div className="mb-3 mt-3">
                    <h3>Extracted Emails:</h3>
                    <textarea
                        className="form-control"
                        id="emailTextarea"
                        rows="3"
                        readOnly
                        value={emails.join('\n')}
                    ></textarea>
                </div>
            )}
        </div>
    );
}
