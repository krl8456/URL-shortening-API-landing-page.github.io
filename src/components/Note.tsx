interface NoteContent {
  imageSrc: string;
  title: string;
  content: string;
}

function Note({ imageSrc, title, content } : NoteContent) {
  return (
    <div className="Note">
        <div className="Note--image-container">
            <img src={imageSrc} alt="note logo" className="Note--logo"/>
        </div>
        <h4 className="Note--title">{title}</h4>
        <p className="Note--content">{content}</p>
    </div>
  )
}

export default Note