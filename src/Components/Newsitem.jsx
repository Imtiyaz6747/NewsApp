import '../App.css';
import image from '../assets/istockphoto-1311148884-612x612.jpg';
export const Newsitem = ({title, description, src, url}) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card d-inline-block mb-3 my-2 mx-2 px-2 py-2" style={{maxWidth: "270px"}} >
  <img src={src?src:image} style={{height: "100%", width:"100%", }} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90): "News apps provide quick access to a variety of information. The ease of scrolling through the news on your smartphone is much better than buying a newspaper and cluttering up your bag or office desk"}</p>
    <a href={url} className="btn btn-primary">Read more...</a>
  </div>
</div>
</a>
  )
}

export default Newsitem
