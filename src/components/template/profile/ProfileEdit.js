import React from "react";
import styled from "styled-components";
import ProfileUpload from "../../module/profile/ProfileIUpload";
import ProfileForm from "../../module/form/ProfileForm";

export default function ProfileEdit() {
  return (
    <>
      {/* <Header></Header> */}
      <LayOut>
        <FormContainer>
          <ProfileUpload></ProfileUpload>
          <ProfileForm></ProfileForm>
        </FormContainer>
      </LayOut>
    </>
  );
}

const LayOut = styled.main`
  display: flex;
  justify-content: center;
  min-width: 390px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin-top: 48px;
`;

const FormContainer = styled.section`
  ${props => props.theme.common["flexCenterColumn"]}
  max-width: 390px;
  width: 100%;
  padding: 30px 34px 0;
`;
