import { ILayer } from '../../../services/layouter/layer';
import { ILayoutable } from '../../../services/layouter/layoutable';
import { UMLElement } from '../../../services/uml-element/uml-element';
import { UMLElementType } from '../../uml-element-type';
import * as Apollon from '../../../typings';
import { MarkedGraphElementType } from '..';
import { DeepPartial } from 'redux';
import { IBoundary } from '../../../utils/geometry/boundary';

export class MarkedGraphNode extends UMLElement {
  type: UMLElementType = MarkedGraphElementType.MarkedGraphNode;
  bounds: IBoundary = { ...this.bounds, width: 100, height: 100 };
  marking: boolean;

  constructor(values?: DeepPartial<MarkedGraphNode>) {
    super(values);
    this.marking = values?.marking || false;
  }

  serialize(children?: UMLElement[]): Apollon.MarkedGraphNode {
    return {
      ...super.serialize(),
      type: this.type as keyof typeof MarkedGraphElementType,
      marking: this.marking,
    };
  }

  deserialize<T extends Apollon.UMLModelElement>(values: T, children?: Apollon.UMLModelElement[]) {
    const assert = (v: Apollon.UMLModelElement): v is Apollon.MarkedGraphNode =>
      v.type === MarkedGraphElementType.MarkedGraphNode;
    if (!assert(values)) {
      return;
    }

    super.deserialize(values, children);
    this.marking = values.marking;
  }

  render(canvas: ILayer): ILayoutable[] {
    return [this];
  }
}