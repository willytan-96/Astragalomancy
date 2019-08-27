import React from 'react';
import {
  Container,
  GroupContainer,
  HeaderTitle,
  ItemContainer,
} from '../SectionStyles';
import Input from './../../../components/Reuseable/Input/';

function InputSection() {
  return (
    <Container>
      <HeaderTitle>Input</HeaderTitle>
      <ItemContainer>
        <GroupContainer>
          <Input/>
        </GroupContainer>
      </ItemContainer>
    </Container>
  );
}

export default InputSection;