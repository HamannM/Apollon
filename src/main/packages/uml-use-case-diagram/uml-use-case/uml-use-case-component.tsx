import React, { SFC } from 'react';
import { UMLUseCase } from './uml-use-case';

export const UMLUseCaseComponent: SFC<Props> = ({ element }) => (
  <g>
    <ellipse cx="50%" cy="50%" rx="50%" ry="50%" stroke="black" />
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontWeight="bold" pointerEvents="none">
      {element.name}
    </text>
  </g>
);

interface Props {
  element: UMLUseCase;
}
