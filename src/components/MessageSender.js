import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import '../styles/MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../components/StateProvider';
import firebase from 'firebase';
import db from '../services/firebase';

function MessageSender() {
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [{ user }, dispatch] = useStateValue();

    const handleSubmit = (e) => {
        // e.preventDefault();
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: "https://qph.fs.quoracdn.net/main-qimg-220cbc8eee555db1048c5ed1870430f5",
            username: user,
            image: imageUrl

        })
        setInput("");
        setImageUrl("");
    };

    const handleKeypress = (e) => {
        //it triggers by pressing the enter key
        if (e.code === "Enter") {
            // e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src="https://qph.fs.quoracdn.net/main-qimg-220cbc8eee555db1048c5ed1870430f5" />
                <form>
                    <input
                        className="messageSender__input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={`What's on your mind ${user}?`}
                        onKeyPress={handleKeypress}
                    />
                    <input
                        placeholder="image URL (Optional)"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        onKeyPress={handleKeypress}
                    />
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Activity</h3>
                </div>
            </div>

        </div >
    )
}

export default MessageSender
