import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";
import PdfComp from "./PdfComp";
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function SendPdf() {
  const [title, setTitle] = useState("");
  const [file, saveFile] = useState("");
  const [allPdf, setAllPdf] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    const result = await axios.get("http://localhost:5000/getfile");
    console.log(result.data.data);
    setAllPdf(result.data.data);
  };

  const submitPdf = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);

    try {
      const result = await axios.post(
        "http://localhost:5000/uploadfile",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      console.log(result);

      if (result.data.status === 200) {
        alert("Upload Success");
        getPdf();
      } else {
        alert("Upload Error");
      }
    } catch (error) {
      console.error("Error Uploading: " + error.message);
      alert("Error Uploading");
    }
  };

  const showPdf = (pdf) => {
    setPdfFile(`http://localhost:5000/files/${pdf}`);
  };

  return (
    <div>
      <Nav />
      <h1>Send Pdf</h1> <br />
      <form onSubmit={submitPdf}>
        <label>Pdf Title</label> <br />
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          required
        ></input>{" "}
        <br />
        <br />
        <label>Select Pdf File</label> <br />
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => saveFile(e.target.files[0])}
          required
        ></input>{" "}
        <br />
        <br />
        <button>Submit</button>
      </form>
      <br/><br/>

      <div>
        <h3>Pdf Details</h3>
        {allPdf == null ? "" : allPdf.map((data)=> (
          <div key={(data._id)}>
            <h1>Title: {data.title}</h1>
            <button onClick={() => showPdf(data.pdf)}>Show Pdf</button>
          </div>
        ))}
      </div>
      <PdfComp pdfFile={pdfFile}/>
    </div>
  );
}

export default SendPdf;
