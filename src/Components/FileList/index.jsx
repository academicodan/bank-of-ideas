import React from "react";
import { Container, FileInfo } from "./styles";

const FileList = ({ files, onDelete }) => (

  <Container>
    {
      files.map(uploadedFile => (
        <li key={uploadedFile.id} >
          <FileInfo>
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>
                {uploadedFile.readableSize}
                  <button onClick={() => onDelete(uploadedFile.id)}>
                    Excluir
                  </button>
              </span>
            </div>
          </FileInfo>
        </li>
      ))
    }
  </Container >
);

export default FileList;