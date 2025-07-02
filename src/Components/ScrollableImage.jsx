
const ScrollableImage = ({ src, alt }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="overflow-auto w-96 h-96 border-2 border-gray-300 rounded-lg">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ScrollableImage;
