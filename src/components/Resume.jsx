import React from 'react'
import PdfViewer from './PdfViewer'

const Resume = () => {
    const pdfFile = "/Kieran_Khan_Resume_2024_Rev (11).pdf";
  return (
    <div>
        <PdfViewer className="lg:w-2/3 sm:w-5/6" file={pdfFile} />
    </div>
  )
}

export default Resume