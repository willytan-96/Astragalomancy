import React, { Fragment } from "react";
import StyledComponent from "styled-components";
import Button from "./../../../components/Reuseable/Button";
import Colors from "./../../../constants/colors";

export default () => {
  const GroupButton = [
    {
      title: "PRIMARY",
      groupItems: [
        { style: "PRIMARY", size: "SMALL" },
        { style: "PRIMARY", size: "MEDIUM" },
        { style: "PRIMARY", size: "LARGE" },
        { style: "PRIMARY", size: "SMALL", isEnable: false }
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
    <Fragment>
      <Container>
        <HeaderTitle>Buttons</HeaderTitle>
        <ItemContainer>
          {GroupButton.map(Group => (
            <GroupContainer>
              <label>{Group.title}</label>
              <GroupItemContainer>
                {
                  Group.groupItems.map( GroupItem => (
                    <ButtonContainer>
                      <label>
                        {GroupItem.size}
                      </label>
                      <Button
                        text="Button 1"
                        buttonStyle={GroupItem.style}
                        buttonSize={GroupItem.size}
                        isEnable={GroupItem.isEnable}
                      />
                    </ButtonContainer>
                  ))
                }
              </GroupItemContainer>
            </GroupContainer>
          ))}
        </ItemContainer>
      </Container>
    </Fragment>
  )
};

const Container = StyledComponent.div`
  margin: 16px 0px;
`

const HeaderTitle = StyledComponent.h2`
  border-bottom: 1px solid ${Colors.primaryColor};
  color: ${Colors.primaryColor};
  margin: 0px 0px 16px 0px;
  padding: 0px 30px 8px 30px;
`;

const ItemContainer = StyledComponent.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0px 16px;
`;

const GroupContainer = StyledComponent.div`
  display: flex;
  flex-direction: column;
  padding: 8px;

  > label {
    color: ${Colors.primaryColor};
    padding: 0px 8px;
  }
`;

const GroupItemContainer = StyledComponent.div`
  display: flex;
  flex-direction: row;
  padding: 4px;
`

const ButtonContainer = StyledComponent.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  
  > label {
    margin-bottom: 8px;
  }
`;
