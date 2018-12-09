import * as React from "react";
import { ConnectDropTarget, DropTarget, DropTargetCollector, DropTargetSpec } from "react-dnd";
import { connect } from "react-redux";
import styled from "styled-components";
import Entity from "./../LayoutedElement";
import Grid from "./Grid";
import EntityDetailsPopup from "./Popups/EntityDetailsPopup";
import RelationshipDetailsPopup from "./Popups/RelationshipDetailsPopup";
import RelationshipConnectors from "./RelationshipConnectors";
import * as DragDrop from "./../../gui/components/dnd";
import { createEntity, getAllEntities, getAllInteractiveElementIds, getAllLayoutedRelationships, moveEntities, ReduxState, toggleInteractiveElements, updateEntityWidth } from "./../../gui/redux";
import { ApollonMode, DiagramType, EditorMode, ElementSelection, InteractiveElementsMode } from "./../../gui/types";
import * as UML from "./../../core/domain";
import { Size, snapPointToGrid } from "./../../core/geometry";
import { UUID } from "./../../core/utils";
import RelationshipMarkers from "./../../rendering/renderers/svg/defs/RelationshipMarkers";
import Relationship from "./../LayoutedRelationship";

const StyledCanvas = styled.div`
    width: ${(props: any) => props.width}px;
    height: ${(props: any) => props.height}px;
    position: relative;
` as any;

const GridLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
`;

const CanvasObjectsLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
`;

class Canvas extends React.Component<Props, State> {
    canvas: HTMLDivElement | null = null;

    state: State = {
        doubleClickedElement: { type: "none" },
        userIsHoldingEntity: false,
        userIsResizingEntity: false,
        displayRelationships: false,
    };

    displayRelationships = () => {
        this.setState({ displayRelationships: true });
    };

    selectEntity = (entityId: UUID, e: React.MouseEvent<HTMLDivElement>) => {
        this.onStartHoldEntity();
    };

    onStartHoldEntity = () => this.setState({ userIsHoldingEntity: true });
    onStopHoldEntity = () => this.setState({ userIsHoldingEntity: false });

    render() {
        const {
            canvasSize,
            gridSize,
            entities,
            relationships,
            connectDropTarget,
            diagramType,
            apollonMode,
            editorMode,
            interactiveElementsRenderMode
        } = this.props;

        const { selection } = this.props;

        const canvasStyles: React.CSSProperties = {
            width: canvasSize.width,
            height: canvasSize.height,
            position: "relative",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)"
        };

        const style: React.CSSProperties = {
            position: "absolute",
            top: 0,
            left: 0
        };

        return connectDropTarget(
            <div
                ref={ref => {
                    this.canvas = ref;
                    this.props.innerRef(ref);
                }}
                style={canvasStyles}
                onMouseDown={() => {
                    const { entityIds, relationshipIds } = selection;
                    if (entityIds.length + relationshipIds.length > 0) {
                        // this.props.unselectAllElements();
                    }
                }}
            >
                <StyledCanvas width={canvasSize.width} height={canvasSize.height}>
                    <GridLayer>
                        <Grid gridSize={gridSize} />
                    </GridLayer>

                    <CanvasObjectsLayer>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={canvasSize.width}
                            height={canvasSize.height}
                            style={style}
                        >
                            <defs>
                                <RelationshipMarkers onComponentDidMount={this.displayRelationships} />
                            </defs>
                            {this.state.displayRelationships && relationships.map(relationship => {
                                const relationshipId = relationship.relationship.id;
                                return (
                                    <Relationship
                                        key={relationshipId}
                                        relationship={relationship}
                                        apollonMode={this.props.apollonMode}
                                        editorMode={this.props.editorMode}
                                        interactiveElementsMode={interactiveElementsRenderMode}
                                        isSelected={selection.relationshipIds.includes(relationshipId)}
                                        onSelect={() => {}}
                                        onToggleSelection={() => {}}
                                        isInteractiveElement={this.props.interactiveElementIds.has(relationshipId)}
                                        onToggleInteractiveElements={() => {
                                            this.props.toggleInteractiveElements();
                                        }}
                                        openDetailsPopup={() => {
                                            this.setState({
                                                doubleClickedElement: {
                                                    type: "relationship",
                                                    relationshipId
                                                }
                                            });
                                        }}
                                    />
                                );
                            })}
                        </svg>

                        {apollonMode !== ApollonMode.ReadOnly && (
                            <RelationshipConnectors
                                diagramType={diagramType}
                                editorMode={editorMode}
                                selection={selection}
                                showConnectors={
                                    this.state.doubleClickedElement.type === "none" &&
                                    !this.state.userIsHoldingEntity &&
                                    !this.state.userIsResizingEntity
                                }
                            />
                        )}

                        {entities.map(entity => (
                            <Entity
                                key={entity.id}
                                entity={entity}
                                apollonMode={apollonMode}
                                editorMode={editorMode}
                                selection={selection}
                                gridSize={gridSize}
                                updateEntityWidth={newWidth =>
                                    this.props.updateEntityWidth(entity.id, newWidth)
                                }
                                openDetailsPopup={() => {
                                    this.setState({
                                        doubleClickedElement: {
                                            type: "entity",
                                            entityId: entity.id
                                        }
                                    });
                                }}
                                onChangeIsResizing={isResizing =>
                                    this.setState({ userIsResizingEntity: isResizing })
                                }
                                onMouseDown={e => this.selectEntity(entity.id, e)}
                                onMouseUp={this.onStopHoldEntity}
                                onStartDragging={this.onStartHoldEntity}
                                onEndDragging={this.onStopHoldEntity}
                                interactiveElementIds={this.props.interactiveElementIds}
                                interactiveElementsMode={interactiveElementsRenderMode}
                                onToggleInteractiveElements={this.props.toggleInteractiveElements}
                            />
                        ))}

                        {this.renderDetailsPopup()}
                    </CanvasObjectsLayer>
                </StyledCanvas>
            </div>
        );
    }

    renderDetailsPopup() {
        const { doubleClickedElement } = this.state;

        switch (doubleClickedElement.type) {
            case "entity": {
                const doubleClickedEntity = this.props.entities.find(
                    entity => entity.id === doubleClickedElement.entityId
                );

                return doubleClickedEntity ? (
                    <EntityDetailsPopup
                        entity={doubleClickedEntity}
                        onRequestClose={() => {
                            this.setState({ doubleClickedElement: { type: "none" } });
                        }}
                        canvasScrollContainer={this.props.canvasScrollContainer}
                    />
                ) : null;
            }

            case "relationship": {
                const doubleClickedRelationship = this.props.relationships.find(
                    rel => rel.relationship.id === doubleClickedElement.relationshipId
                );

                return (
                    doubleClickedRelationship && (
                        <RelationshipDetailsPopup
                            diagramType={this.props.diagramType}
                            relationship={doubleClickedRelationship}
                            onRequestClose={() => {
                                this.setState({ doubleClickedElement: { type: "none" } });
                            }}
                            canvasScrollContainer={this.props.canvasScrollContainer}
                        />
                    )
                );
            }

            default:
                return null;
        }
    }
}

interface OwnProps {
    innerRef: (canvas: HTMLDivElement | null) => void;
    diagramType: DiagramType;
    apollonMode: ApollonMode;
    editorMode: EditorMode;
    interactiveElementsRenderMode: InteractiveElementsMode;
    selection: ElementSelection;
    canvasScrollContainer: HTMLDivElement | null;
}

interface StateProps {
    entities: UML.Entity[];
    relationships: UML.LayoutedRelationship[];
    canvasSize: Size;
    gridSize: number;
    interactiveElementIds: ReadonlySet<UUID>;
}

interface DispatchProps {
    moveEntities: typeof moveEntities;
    createEntity: typeof createEntity;
    updateEntityWidth: typeof updateEntityWidth;
    toggleInteractiveElements: typeof toggleInteractiveElements;
}

interface DragDropProps {
    connectDropTarget: ConnectDropTarget;
}

type Props = OwnProps & StateProps & DispatchProps & DragDropProps;

interface State {
    doubleClickedElement:
        | { type: "entity"; entityId: UUID }
        | { type: "relationship"; relationshipId: UUID }
        | { type: "none" };
    userIsHoldingEntity: boolean;
    userIsResizingEntity: boolean;
    displayRelationships: boolean;
}

function mapStateToProps(state: ReduxState): StateProps {
    return {
        entities: getAllEntities(state),
        relationships: getAllLayoutedRelationships(state),
        canvasSize: state.editor.canvasSize,
        gridSize: state.editor.gridSize,
        interactiveElementIds: getAllInteractiveElementIds(state)
    };
}

const dropTargetSpec: DropTargetSpec<Props> = {
    drop(props, monitor, component) {
        if (monitor === undefined || component === undefined) {
            // Should never happen, but let's be defensive
            return;
        }

        const { canvas } = component as Canvas;

        if (canvas === null) {
            // Should never happen, but let's be defensive
            return;
        }

        const item = monitor.getItem() as DragDrop.DragItem;

        if (item.type === DragDrop.ItemTypes.NewEntity) {
            const xyCoordOffset = monitor.getSourceClientOffset();
            if (xyCoordOffset != null) {
                const x = xyCoordOffset.x;
                const y = xyCoordOffset.y;
                const canvasRect = canvas.getBoundingClientRect();
                const positionOnCanvas = {
                    x: x - canvasRect.left,
                    y: y - canvasRect.top
                };
                const actualPosition = snapPointToGrid(positionOnCanvas, props.gridSize);
                props.createEntity(actualPosition, item.kind);
            }
        } else if (item.type === DragDrop.ItemTypes.ExistingEntities) {
            const diffFromOffset = monitor.getDifferenceFromInitialOffset();
            if (diffFromOffset != null) {
                const snappedDifference = snapPointToGrid(
                    diffFromOffset,
                    props.gridSize
                );

                const delta = { dx: snappedDifference.x, dy: snappedDifference.y };

                if (delta.dx !== 0 || delta.dy !== 0) {
                    props.moveEntities(item.entityIds, delta);
                }
            }
        }
    }
};

const dropTargetCollector: DropTargetCollector<any> = connector => ({
    connectDropTarget: connector.dropTarget()
});

export default connect<StateProps, DispatchProps, OwnProps, ReduxState>(mapStateToProps, {
    createEntity,
    moveEntities,
    updateEntityWidth,
    toggleInteractiveElements
})(DropTarget(
    [DragDrop.ItemTypes.NewEntity, DragDrop.ItemTypes.ExistingEntities],
    dropTargetSpec,
    dropTargetCollector
)(Canvas) as any);
