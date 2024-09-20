import { useParams, useNavigate } from 'react-router-dom';
import './Image.scss';

function Image({ images }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const image = images.find(img => img.id === id);

  if (!image) {
    return <div className="image-view image-view--not-found">Image not found</div>;
  }

  return (
    <div className="image-view" onClick={() => navigate('/')}>
        <h1 className="image-view__title">{image.title}</h1>
      <img className="image-view__img" src={image.memoizedUrl} alt={image.title} />
      <p className="image-view__id">Image ID: {image.id}</p>

    </div>
  );
}

export default Image;
