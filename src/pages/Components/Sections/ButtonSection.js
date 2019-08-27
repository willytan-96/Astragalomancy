import React, { Fragment } from "react";
import StyledComponent from "styled-components";
import Button from "./../../../components/Reuseable/Button";
import {
  Container,
  GroupContainer,
  GroupItemContainer,
  HeaderTitle,
  ItemContainer,
} from '../SectionStyles';

export default () => {
  const GroupButton = [
    {
      title: "PRIMARY",
      groupItems: [
        { style: "PRIMARY", size: "SMALL" },
        { style: "PRIMARY", size: "MEDIUM" },
        { style: "PRIMARY", size: "LARGE" },
      ]
    },
    {
      title: "SECONDARY",
      groupItems: [
        { style: "SECONDARY", size: "SMALL" },
        { style: "SECONDARY", size: "MEDIUM" },
        { style: "SECONDARY", size: "LARGE" }
      ]
    },
    {
      title: "DISABLED",
      groupItems: [
        { style: "PRIMARY", size: "SMALL", isEnable: true },
        { style: "PRIMARY", size: "MEDIUM", isEnable: true },
        { style: "PRIMARY", size: "LARGE", isEnable: true }
      ]
    }
  ]
  return (
    <Container>
      <HeaderTitle>Buttons</HeaderTitle>
      <ItemContainer>
        {GroupButton.map((Group, groupKey) => (
          <GroupContainer key={groupKey}>
            <label>{Group.title}</label>
            <GroupItemContainer>
              {
                Group.groupItems.map(
                  ({size, style, isEnable = false}, itemKey) => (
                    <ButtonContainer key={itemKey}>
                      <label>{size}</label>
                      <Button text="Button 1" buttonStyle={style} buttonSize={size} isEnable={isEnable} />
                    </ButtonContainer>
                  )
                )
              }
            </GroupItemContainer>
          </GroupContainer>
        ))}
      </ItemContainer>
    </Container>
  );
};

const ButtonContainer = StyledComponent.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  
  > label {
    margin-bottom: 8px;
  }
`;
