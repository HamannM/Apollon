import React, { SFC } from 'react';
import { UMLUseCaseActor } from './uml-use-case-actor';

export const UMLUseCaseActorComponent: SFC<Props> = ({ element }) => (
  <g>
    <rect width="100%" height="100%" fill="none" />
    <g stroke="black" strokeWidth={2}>
      <circle cx="45" cy="25" r="15" />
      <line x1="45" y1="40" x2="45" y2="80" />
      <line x1="15" y1="55" x2="75" y2="55" />
      <line x1="45" y1="80" x2="15" y2="110" />
      <line x1="45" y1="80" x2="75" y2="110" />
    </g>
    <text x="45" y="130" dominantBaseline="middle" textAnchor="middle" fontWeight="bold" pointerEvents="none">
      {element.name}
    </text>
  </g>
);

interface Props {
  element: UMLUseCaseActor;
}
