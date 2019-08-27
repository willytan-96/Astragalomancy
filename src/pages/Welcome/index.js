import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 16px;
`;

const ProfileTextTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 3px;
`;

const PersonalProfileContainer = styled.div`
  background-color: red;
`;

const PersonalProfilePictureContainer = styled.div`
  display: flex;
  flex: 0 1 auto;
`;

const PersonalProfilePicture = styled.img`
  background-color: black;
  border-radius: 50%;
  height: 250px;
  margin: 8px;
  object-fit: cover;
  width: 250px;
`;

export default () => {
  return (
    <Container>
      {/* <ProfileTextTitle>Profile</ProfileTextTitle>
      <PersonalProfileContainer>
        <PersonalProfilePictureContainer>
          <PersonalProfilePicture />
        </PersonalProfilePictureContainer>
      </PersonalProfileContainer> */}
    </Container>
  );
};
