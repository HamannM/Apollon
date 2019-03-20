import React, { SFC } from 'react';
import ClassAssociation from './ClassAssociation';
import Point from '../../../geometry/Point';
import Port from '../../../Port';
import { RelationshipKind } from '..';

const Marker = {
  Arrow: (id: string) => (
    <marker
      id={id}
      viewBox="0 0 30 30"
      markerWidth="22"
      markerHeight="30"
      refX="30"
      refY="15"
      orient="auto"
      markerUnits="strokeWidth"
      strokeDasharray="1,0"
    >
      <path d="M0,29 L30,15 L0,1" fill="none" stroke="black" />
    </marker>
  ),
  Rhombus: (id: string) => (
    <marker
      id={id}
      viewBox="0 0 30 30"
      markerWidth="30"
      markerHeight="30"
      refX="30"
      refY="15"
      orient="auto"
      markerUnits="strokeWidth"
    >
      <path d="M0,15 L15,22 L30,15 L15,8 z" fill="white" stroke="black" />
    </marker>
  ),
  RhombusFilled: (id: string) => (
    <marker
      id={id}
      viewBox="0 0 30 30"
      markerWidth="30"
      markerHeight="30"
      refX="30"
      refY="15"
      orient="auto"
      markerUnits="strokeWidth"
    >
      <path d="M0,15 L15,22 L30,15 L15,8 z" fill="black" />
    </marker>
  ),
  Triangle: (id: string) => (
    <marker
      id={id}
      viewBox="0 0 30 30"
      markerWidth="22"
      markerHeight="30"
      refX="30"
      refY="15"
      orient="auto"
      markerUnits="strokeWidth"
      strokeDasharray="1,0"
    >
      <path d="M0,1 L0,29 L30,15 z" fill="white" stroke="black" />
    </marker>
  ),
};

const ClassAssociationComponent: SFC<Props> = ({ element }) => {
  const marker = (type => {
    switch (type) {
      case RelationshipKind.ClassDependency:
      case RelationshipKind.ClassUnidirectional:
        return Marker.Arrow;
      case RelationshipKind.ClassAggregation:
        return Marker.Rhombus;
      case RelationshipKind.ClassComposition:
        return Marker.RhombusFilled;
      case RelationshipKind.ClassInheritance:
      case RelationshipKind.ClassRealization:
        return Marker.Triangle;
    }
  })(element.kind);

  const stroke = (type => {
    switch (type) {
      case RelationshipKind.ClassDependency:
      case RelationshipKind.ClassRealization:
        return 7;
    }
  })(element.kind);

  const computeTextPosition = (
    path: Point[],
    marker: boolean = false
  ): Point => {
    const distance = marker ? 31 : 8;
    const vector = path[1].subtract(path[0]);
    return path[0].add(vector.normalize().scale(distance));
  };

  const layoutText = (
    location: Port['location'],
    position: 'TOP' | 'BOTTOM'
  ) => {
    switch (location) {
      case 'N':
        return {
          dx: position === 'TOP' ? -5 : 5,
          dominantBaseline: 'text-after-edge',
          textAnchor: position === 'TOP' ? 'end' : 'start',
        };
      case 'E':
        return {
          dy: position === 'TOP' ? -10 : 5,
          dominantBaseline:
            position === 'TOP' ? 'text-after-edge' : 'text-before-edge',
          textAnchor: 'start',
        };
      case 'S':
        return {
          dx: position === 'TOP' ? -5 : 5,
          dominantBaseline: 'text-before-edge',
          textAnchor: position === 'TOP' ? 'end' : 'start',
        };
      case 'W':
        return {
          dy: position === 'TOP' ? -10 : 5,
          dominantBaseline:
            position === 'TOP' ? 'text-after-edge' : 'text-before-edge',
          textAnchor: 'end',
        };
    }
  };

  const path = element.path.map(point => new Point(point.x, point.y));
  const source: Point = computeTextPosition(path);
  const target: Point = computeTextPosition(path.reverse(), !!marker);
  const id = `marker-${element.id}`;

  return (
    <g>
      {marker && marker(id)}
      <polyline
        points={element.path.map(point => `${point.x} ${point.y}`).join(',')}
        stroke="black"
        fill="none"
        strokeWidth={1}
        markerEnd={`url(#${id})`}
        strokeDasharray={stroke}
      />
      <text
        x={source.x}
        y={source.y}
        {...layoutText(element.source.location, 'BOTTOM')}
      >
        {element.multiplicity.source}
      </text>
      <text
        x={target.x}
        y={target.y}
        {...layoutText(element.target.location, 'BOTTOM')}
      >
        {element.multiplicity.target}
      </text>
      <text
        x={source.x}
        y={source.y}
        {...layoutText(element.source.location, 'TOP')}
      >
        {element.role.source}
      </text>
      <text
        x={target.x}
        y={target.y}
        {...layoutText(element.target.location, 'TOP')}
      >
        {element.role.target}
      </text>
    </g>
  );
};

interface Props {
  element: ClassAssociation;
}

export default ClassAssociationComponent;