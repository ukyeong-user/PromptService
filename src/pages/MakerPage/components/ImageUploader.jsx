import React, { useRef } from "react";
import styled from "styled-components";

function ImageUploader() {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // 이미지 처리 로직
      console.log("Selected files:", files);
    }
  };

  return (
    <UploaderWrapper>
      <Divider />
      <UploadButton onClick={handleClick}>
        <PlusIcon>+</PlusIcon>
        <UploadText>이미지를 필요시 추가해 보세요</UploadText>
      </UploadButton>
      <HiddenInput
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
    </UploaderWrapper>
  );
}

export default ImageUploader;

const UploaderWrapper = styled.div`
  width: 100%;
  margin-top: 4vh;
  position: relative;
`;

const Divider = styled.div`
  width: 100%;
  max-width: 697px;
  height: 1px;
  background-color: #bcbcbc;
  margin-bottom: 2vh;
`;

const UploadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }
`;

const PlusIcon = styled.span`
  font-family: "Pretendard Variable", sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: #001e40;
  line-height: 1;
`;

const UploadText = styled.span`
  font-family: "Pretendard Variable", sans-serif;
  font-size: 1.75rem;
  font-weight: 400;
  color: #bcbcbc;
`;

const HiddenInput = styled.input`
  display: none;
`;
