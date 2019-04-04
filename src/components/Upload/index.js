import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if(!isDragActive) return <UploadMessage> Arraste arquivos aqui ou clique -- Max: 50 mb</UploadMessage>
    if(isDragReject) return <UploadMessage type="error">Arquivo não suportado...</UploadMessage>

    return <UploadMessage type="success">Solte seus arquivos aqui... </UploadMessage>
  }

  render() {
    const { onUpload } = this.props;
    return (
      <Dropzone accept=".jpg, .jpeg, .png, .pdf, .cdr, .rar, .psd" onDropAccepted={onUpload}>
        { ({ getRootProps, getInputProps, isDragReject, isDragActive }) => (
          <DropContainer 
            { ...getRootProps() }
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input { ...getInputProps() }/>
            { this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        ) }
      </Dropzone>
    );
  }
}
