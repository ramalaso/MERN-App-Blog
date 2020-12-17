import React, { useState } from 'react';

function AddCommentForm({ articleName, setArticleInfo }) {
  const [username, setUsername] = useState('');
  const [commentText, setCommentText] = useState('');

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: 'post',
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const body = await result.json();
    setArticleInfo(body);
    setUsername('');
    setCommentText('');
  };
  return (
    <div id="add-comment-form">
      <h3>Add a comment</h3>
      <label htmlFor="">
        Name:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label htmlFor="">
        Comment:
        <textarea
          id=""
          cols="4"
          rows="5"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        ></textarea>
      </label>
      <button onClick={() => addComment()}>Add Comment</button>
    </div>
  );
}
export default AddCommentForm;
