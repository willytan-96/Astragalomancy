import React from 'react';
import {
  Container,
  GroupContainer,
  HeaderTitle,
  ItemContainer,
  GroupItemContainer,
} from '../SectionStyles';
import Input from './../../../components/Reuseable/Input/';

function InputSection() {
  return (
    <Container>
      <HeaderTitle>Input</HeaderTitle>
      <ItemContainer>
        <GroupContainer>
          <GroupItemContainer>
            <Input/>
          </GroupItemContainer>
        </GroupContainer>
      </ItemContainer>
    </Container>
  );
}

export default InputSection;