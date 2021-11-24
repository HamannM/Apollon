import React, { FunctionComponent } from 'react';
import { MarkedGraphNode } from './marked-graph-node';
import { Multiline } from '../../../utils/svg/multiline';

export const MarkedGraphNodeComponent: FunctionComponent<Props> = ({ element, scale }) => (
  <g>
    <circle cx="50%" cy="50%" r={50} stroke={element.strokeColor || 'black'} />
    <Multiline
      x={element.bounds.width / 2}
      y={element.bounds.height / 2}
      width={20}
      height={20}
      fontWeight="bold"
      fontSizeAdjust={1 *scale}
      fill={element.textColor}
      lineHeight={10 * scale}
      capHeight={10 * scale}
    >
      {element.name}
    </Multiline>
    {element.marking && (
      <g>
        <circle
          cx={13}
          cy={13}
          r={10}
          stroke="black"
          fill="red"
          strokeWidth={1}
          markerEnd={`url(#marker-${element.id})`}
        />
      </g>
    )}
  </g>
);

interface Props {
  element: MarkedGraphNode;
  scale: number;
}