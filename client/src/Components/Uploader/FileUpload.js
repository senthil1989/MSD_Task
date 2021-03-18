import React, { Fragment, useState, useCallback } from "react";
import Message from "./Message";
import axios from "axios";

const FileUpload = ({ pushFile }) => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const UploadCallback = useCallback((val) => {
    pushFile(val);
  });
  const onSubmit = async (e) => {
    e.stopPropagation();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
      setMessage("File Uploaded");
      UploadCallback({ fileName, filePath });
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <div style={{ padding: "20px" }}>
        <div className="custom-file mb-4">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>

        <button
          value="file"
          className="btn btn-primary btn-block mt-4"
          onClick={(e) => onSubmit(e)}
        >
          Upload
        </button>
      </div>
    </Fragment>
  );
};

export default FileUpload;
