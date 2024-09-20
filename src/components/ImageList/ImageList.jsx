import { Link } from 'react-router-dom';
import './ImageList.scss';

function ImageList({ images, addNewPhoto }) {
  return (
    <div className="image-list">
      <div className="image-list__header">
        <h1 className="image-list__title">Image Gallery</h1>
        <button className="image-list__add-button" onClick={addNewPhoto}>Add New Photo</button>
      </div>
      <div className="image-list__grid">
        {images.map(image => (
          <Link 
            key={image.id} 
            to={`/image/${image.id}`} 
            className="image-list__item"
          >
            <img 
              src={image.memoizedUrl} 
              alt={image.title} 
              className="image-list__thumbnail"
            />
            <p className="image-list__image-title">{image.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ImageList;
