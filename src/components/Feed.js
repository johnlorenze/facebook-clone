import React, { useState, useEffect } from 'react';
import '../styles/Feed.css';
import StoryReel from '../components/StoryReel';
import MessageSender from '../components/MessageSender';
import Post from '../components/Post';
import db from '../services/firebase';

function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts')
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setPosts(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                })))
            );
    }, []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map((post) => (
                <Post
                    keyId={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    // timestamp={post.data.timestamp}
                    timestamp={new Date(post.data.timestamp?.toDate()).toUTCString()}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
        </div>
    )
}

export default Feed
