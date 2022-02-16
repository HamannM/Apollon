import { MarkedGraphRelationshipType } from '..';
import { IUMLRelationship, UMLRelationship } from '../../../services/uml-relationship/uml-relationship';
import { DeepPartial } from 'redux';
import { UMLRelationshipCenteredDescription } from '../../../services/uml-relationship/uml-relationship-centered-description';

export class MarkedGraphEdge extends UMLRelationshipCenteredDescription {
  static features = { ...UMLRelationship.features };
  static transition = '';

  type = MarkedGraphRelationshipType.MarkedGraphEdge;
  name = MarkedGraphEdge.transition;

  constructor(values?: DeepPartial<IUMLRelationship>) {
    super(values);
    this.name = (values && values.name) || this.name;
    MarkedGraphEdge.features.straight = true;
    MarkedGraphEdge.features.connectable = false;
    MarkedGraphEdge.features.reconnectable = false;
  }
}