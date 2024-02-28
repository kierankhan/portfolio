  const PdfViewer = ({ file }) => {
    return (
      <div className="flex justify-center items-center">
        <iframe
          src={file}
          className="lg:w-2/3 sm:11/12 h-screen"
        ></iframe>
      </div>
    );
  };
  
  export default PdfViewer;