import { Gallery } from './Image.style';
import { ImageGalleryItem } from 'components/ImageGalleryItem/GalleryItem';

export const ImageGallery = ({ imagesList }) => {
  return (
    <Gallery>
      {imagesList.map(item => (
        <ImageGalleryItem
          key={item.id}
          webformatURL={item.webformatURL}
          largeImageURL={item.largeImageURL}
        />
      ))}
    </Gallery>
  );
};
