import * as React from 'react';
import styled from '../../styledComponents';
import ControllerItem from '../Controller/ControllerItem';
const newIcon = require('./assets/new.svg');
const searchIcon = require('./assets/search.svg');
const editIcon = require('./assets/edit.svg');
const sortIcon = require('./assets/sort.svg');
const deleteIcon = require('./assets/delete.svg');
const selectAllIcon = require('./assets/selectAll.svg');

interface Props {
  className?: string;
}

const Vl = styled.div`
  width: 1px;
  background-color: black;
  opacity: 0.1;
  height: 80%;
`;

class Controller extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={ this.props.className }>
        <ControllerItem svgSrc={ newIcon }>New</ControllerItem>
        <Vl />
        <ControllerItem svgSrc={ deleteIcon }>Delete</ControllerItem>
        <Vl />
        <ControllerItem svgSrc={ editIcon }>Edit</ControllerItem>
        <Vl />
        <ControllerItem svgSrc={ sortIcon }>Sort</ControllerItem>
        <Vl />
        <ControllerItem svgSrc={ searchIcon }>Search</ControllerItem>
        <Vl />
        <ControllerItem svgSrc={ selectAllIcon }>Select All</ControllerItem>
      </div>
    );
  }
}

const StyleController = styled(Controller)`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: ${ (props) => props.theme.mobileS };
  height: 50px;

`;

export default StyleController;



