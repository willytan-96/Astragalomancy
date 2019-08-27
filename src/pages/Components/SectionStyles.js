import StyledComponent from 'styled-components';
import Colors from '../../constants/colors';

export const Container = StyledComponent.div`
  margin: 16px 0px;
`

export const HeaderTitle = StyledComponent.h2`
  border-bottom: 1px solid ${Colors.primaryColor};
  color: ${Colors.primaryColor};
  margin: 0px 0px 16px 0px;
  padding: 0px 30px 8px 30px;
`;

export const ItemContainer = StyledComponent.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0px 16px;
`;

export const GroupContainer = StyledComponent.div`
  display: flex;
  flex-direction: column;
  padding: 8px;

  > label {
    color: ${Colors.primaryColor};
    padding: 0px 8px;
  }
`;

export const GroupItemContainer = StyledComponent.div`
  display: flex;
  flex-direction: row;
  padding: 4px;
`