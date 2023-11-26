import { useState } from 'react';
import { ImageItem, Image } from './ImageGallery.style';
import { Modal } from 'components/Modal_image/Modal';

export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const openModal = () => {
    setisModalOpen(true);
  };
  const closeModal = () => {
    setisModalOpen(false);
  };

  return (
    <>
      <ImageItem onClick={openModal}>
        <Image src={webformatURL} alt="" />
      </ImageItem>
      {isModalOpen && (
        <Modal
          imageUrl={largeImageURL}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}
    </>
  );
};
