
export const GifGridItem = ({ title,url,id }) => {
  return (
    <ol className="card">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </ol>
  )
}
