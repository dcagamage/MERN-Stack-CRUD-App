import { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

function PdfComp(props) {
  const [numPages, setNumPages] = useState();
  const [pageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      {props.pdfFile ? (
        <Document file={props.pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))}

          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      ) : (
        <p>Pdf File Not Available.</p>
      )}

      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default PdfComp;
