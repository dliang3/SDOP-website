import './imagePreview.css';

const ImagePreview = ({ handleCloseImage, handleImageClick, selectedImage }) => {

  return (
    <div className="imagePreviewOverlay" onClick={handleCloseImage}>
      <div className="imagePreview" onClick={handleImageClick}>
        <img src={selectedImage} alt="preview" />
      </div>
    </div>
  );
};

export default ImagePreview;
