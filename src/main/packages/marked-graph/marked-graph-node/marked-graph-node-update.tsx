import React, { Component, ComponentClass } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Button } from '../../../components/controls/button/button';
import { TrashIcon } from '../../../components/controls/icon/trash';
import { Textfield } from '../../../components/controls/textfield/textfield';
import { I18nContext } from '../../../components/i18n/i18n-context';
import { localized } from '../../../components/i18n/localized';
import { ModelState } from '../../../components/store/model-state';
import { styled } from '../../../components/theme/styles';
import { UMLElementRepository } from '../../../services/uml-element/uml-element-repository';
import { MarkedGraphNode } from './marked-graph-node';
import { Divider } from '../../../components/controls/divider/divider';

interface OwnProps {
  element: MarkedGraphNode;
}

type StateProps = {};

interface DispatchProps {
  update: typeof UMLElementRepository.update;
  delete: typeof UMLElementRepository.delete;
}

type Props = OwnProps & StateProps & DispatchProps & I18nContext;

const enhance = compose<ComponentClass<OwnProps>>(
  localized,
  connect<StateProps, DispatchProps, OwnProps, ModelState>(null, {
    update: UMLElementRepository.update,
    delete: UMLElementRepository.delete,
  }),
);

const Flex = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

class MarkedGraphNodeUpdateComponent extends Component<Props> {
  render() {
    const { element } = this.props;

    return (
      <div>
        <section>
          <Flex>
            <Textfield value={element.name} onChange={this.rename(element.id)} autoFocus />
          </Flex>
          <Divider />
        </section>
        <section>
          <label htmlFor="toggleMarking">
            <input
              id="toggleMarking"
              type="checkbox"
              checked={element.marking}
              onChange={this.toggleMarking(element.id)}
            />
            {this.props.translate('packages.MarkedGraph.MarkedGraphMark')}
          </label>
        </section>
      </div>
    );
  }

  private rename = (id: string) => (value: string) => {
    this.props.update(id, { name: value });
  };

  private toggleMarking = (id: string) => (event: React.FormEvent<HTMLInputElement>) => {
    this.props.update<MarkedGraphNode>(id, { marking: event.currentTarget.checked });
  };

  private delete = (id: string) => () => {
    this.props.delete(id);
  };
}

export const MarkedGraphNodeUpdate = enhance(MarkedGraphNodeUpdateComponent);