import React from 'react'
import PdfViewer from './PdfViewer'

const Resume = () => {
    const pdfFile = "/Kieran_Khan_Resume_2024_Rev.pdf";
  return (
    <div>
        <PdfViewer className="w-2/3" file={pdfFile} />
    </div>
  )
}

export default Resume