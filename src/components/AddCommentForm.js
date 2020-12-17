import React from 'react';

function AddCommentForm() {
  return (
    <div id="add-comment-form">
      <h3>Add a comment</h3>
      <label htmlFor="">
        Name:
        <input type="text" />
      </label>
      <label htmlFor="">
        <textarea id="" cols="4" rows="50"></textarea>
      </label>
      <button>Add Comment</button>
    </div>
  );
}
export default AddCommentForm;
