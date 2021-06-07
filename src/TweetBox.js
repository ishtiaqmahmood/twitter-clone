import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from "./firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = (e) => {
        e.preventDefault();
    
        db.collection("posts").add({
          displayName: "Ishtiaq Mahmood",
          username: "ishtiaqmahmood",
          verified: true,
          text: tweetMessage,
          image: tweetImage,
          avatar:
            "https://avatars.githubusercontent.com/u/22867601?v=4",
        });
    
        setTweetMessage("");
        setTweetImage("");
      };
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src="https://avatars.githubusercontent.com/u/22867601?v=4"/>
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        placeholder="What's happening?" 
                        type="text">
                            
                    </input>
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox_imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />
                <Button 
                onClick={sendTweet}
                type="submit"
                className="tweetBox_tweetButton"
                >Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
