import { DeepPartial } from 'redux';
import { ILayer } from '../../../services/layouter/layer';
import { ILayoutable } from '../../../services/layouter/layoutable';
import { UMLElement } from '../../../services/uml-element/uml-element';
import { Direction, IUMLElementPort } from '../../../services/uml-element/uml-element-port';
import { IUMLRelationship, UMLRelationship } from '../../../services/uml-relationship/uml-relationship';
import { assign } from '../../../utils/fx/assign';
import { computeBoundingBoxForRelationship, IBoundary } from '../../../utils/geometry/boundary';
import { IPath } from '../../../utils/geometry/path';

export interface IUMLAssociation extends IUMLRelationship {
  source: IUMLElementPort & {
    multiplicity: string;
    role: string;
  };
  target: IUMLElementPort & {
    multiplicity: string;
    role: string;
  };
}

export abstract class UMLAssociation extends UMLRelationship implements IUMLAssociation {
  source: IUMLAssociation['source'] = {
    direction: Direction.Up,
    element: '',
    multiplicity: '',
    role: '',
  };
  target: IUMLAssociation['target'] = {
    direction: Direction.Up,
    element: '',
    multiplicity: '',
    role: '',
  };

  constructor(values?: DeepPartial<IUMLAssociation>) {
    super();
    assign<IUMLAssociation>(this, values);
  }

  // render(canvas: ILayer, source?: UMLElement, target?: UMLElement): ILayoutable[] {
  //   super.render(canvas, source, target);

  //   const bounds = computeBoundingBoxForRelationship(canvas.layer, this);
  //   this.path = this.path.map(point => ({
  //     x: point.x + this.bounds.x - bounds.x,
  //     y: point.y + this.bounds.y - bounds.y,
  //   })) as IPath;
  //   this.bounds = bounds;

  //   return [this];
  // }
}
