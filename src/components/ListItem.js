import styled from 'styled-components';

const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 0.75em;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.rowHoverBackgroundColor}
  }

  span:last-of-type {
    color: ${props => props.theme.labelTextColor}
  }
`;

export default ListItem;
