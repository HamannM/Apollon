import React from 'react';
import { findDOMNode } from 'react-dom';
import DropEvent from './DropEvent';
import { Consumer, Context } from './Context';

class Draggable extends React.Component<Props> {
  context: Context | null = null;

  onDrop = (event: DropEvent) => this.props.onDrop && this.props.onDrop(event);

  componentDidMount() {
    const node = findDOMNode(this) as HTMLElement;
    node.addEventListener('mousedown', this.context!.onMouseDown(this));
  }

  componentWillUnmount() {
    const node = findDOMNode(this) as HTMLElement;
    node.removeEventListener('mousedown', this.context!.onMouseDown(this));
  }

  render() {
    return (
      <Consumer
        children={context => {
          this.context = context;
          return context && this.props.children;
        }}
      />
    );
  }
}

interface Props {
  children: React.ReactElement<any>;
  onDrop?: (event: DropEvent) => void;
}

export default Draggable;
