import { ILayer } from '../../services/layouter/layer';
import { UMLElement } from '../../services/uml-element/uml-element';
import { ComposePreview } from '../compose-preview';
import { MarkedGraphNode } from './marked-graph-node/marked-graph-node';

export const composeMarkedGraphPreview: ComposePreview = (
  layer: ILayer,
  translate: (id: string) => string,
): UMLElement[] => {
  const elements: UMLElement[] = [];

  const markedGraphNode = new MarkedGraphNode({
    name: translate('packages.MarkedGraph.MarkedGraphNode'),
  });

  elements.push(markedGraphNode);

  return elements;
};