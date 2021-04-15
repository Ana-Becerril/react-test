import React from 'react'
import './App.css';

// Componente de clase
class CommentBox extends React.Component {
  render() {
    return <div className="commentBox">Hello World, I'm a comment box</div>;
  }
}

// Componente funcional
const CommentBox = () => (
  <> 
  <div className="commentBox">
  Hello World, I'm a comment box
  </div>
  </>
)

export default CommentBox;