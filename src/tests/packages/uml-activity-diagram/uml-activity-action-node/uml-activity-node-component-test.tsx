import * as React from 'react';
import { render } from '@testing-library/react';
import { UMLActivityActionNode } from '../../../../main/packages/uml-activity-diagram/uml-activity-action-node/uml-activity-action-node';
import { UMLActivityActionNodeComponent } from '../../../../main/packages/uml-activity-diagram/uml-activity-action-node/uml-activity-action-node-component';
import { Multiline } from '../../../../main/utils/svg/multiline';
import { CSSProperties } from 'react';

// override getStringWidth, because it uses by jsdom unsupported SVGElement methods
Multiline.prototype.getStringWidth = (str: string, style?: CSSProperties) => {
  return 0;
};

it('render the uml-activity-action-node-component', () => {
  const actionNode: UMLActivityActionNode = new UMLActivityActionNode({ name: 'TestActivityComponent' });
  const { getByText } = render(
    <svg>
      <UMLActivityActionNodeComponent element={actionNode} scale={1.0} />
    </svg>,
  );
  expect(getByText(actionNode.name)).toBeInTheDocument();
});
