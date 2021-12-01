import { predefinedConnectivityModel, predefinedCutVertexModel, predefinedPlanarityModel } from './sageAssessmentPredefinedModels';

const taskDescriptionPlanarity = 'This task assesses your knowledge about the <em>planarity</em> of graphs. ' +
  'The graph is currently planar. Add <em>exactly one edge</em> to make the graph non-planar.';
const taskDescriptionConnectivity = 'This task assesses your knowledge about the <em>connectivity</em> of graphs. ' +
  'Remove <em>exactly one</em> edge whose removal disconnects the graph.';
const taskDescriptionCutVertex = 'This task assesses your knowledge about <em>cut vertices</em>. ' +
  'This graph has exactly one cut vertex. Your task is to mark the correct vertex.';
const taskPlanarity = 'PLANARITY';
const taskConnectivity = 'CONNECTIVITY';
const taskCutVertex = 'CUT_VERTEX';
export const taskDescriptionMap = new Map([
  [taskPlanarity, taskDescriptionPlanarity],
  [taskConnectivity, taskDescriptionConnectivity],
  [taskCutVertex, taskDescriptionCutVertex],
]);
export const taskModelMap = new Map([
  [taskPlanarity, predefinedPlanarityModel],
  [taskConnectivity, predefinedConnectivityModel],
  [taskCutVertex, predefinedCutVertexModel],
]);