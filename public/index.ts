import * as Apollon from '../src/main';
import './styles.css';

const container = document.getElementById('apollon')!;
let editor: Apollon.ApollonEditor | null = null;
let options: Apollon.ApollonOptions = {
  model: JSON.parse(window.localStorage.getItem('apollon')!),
  colorEnabled: false,
  scale: 0.75,
  type: 'MarkedGraph',
};

export const onChange = (event: MouseEvent) => {
  const { name, value } = event.target as HTMLSelectElement;
  options = { ...options, [name]: value };
  render();
};

export const onSwitch = (event: MouseEvent) => {
  const { name, checked: value } = event.target as HTMLInputElement;
  options = { ...options, [name]: value };
  render();
};

export const save = () => {
  if (!editor) return;

  const model: Apollon.UMLModel = editor.model;
  localStorage.setItem('apollon', JSON.stringify(model));
  options = { ...options, model };
  return options;
};

export const clear = () => {
  localStorage.removeItem('apollon');
  options = { ...options, model: undefined };
};

export const draw = (mode?: 'include' | 'exclude') => {
  if (!editor) return;
  const elem = window.document.createElement('a');
  const JsonBlob = new Blob([JSON.stringify(editor.model)], { type: 'application/json' });
  elem.href = URL.createObjectURL(JsonBlob);
  elem.download = 'model.json';
  elem.style.display = 'none';
  document.body.appendChild(elem);
  elem.click();        
  document.body.removeChild(elem);
  
  /*
  const filter: string[] = [...editor.model.interactive.elements, ...editor.model.interactive.relationships];

  const { svg }: Apollon.SVG = editor.exportAsSVG(mode && { [mode]: filter, scale: 0.5 });
  const svgBlob = new Blob([svg], { type: 'image/svg+xml' });
  const svgBlobURL = URL.createObjectURL(svgBlob);
  window.open(svgBlobURL);
  */
};

const render = () => {
  save();
  if (editor) {
    editor.destroy();
  }
  editor = new Apollon.ApollonEditor(container, options);
};
render();

export const getModelAsJson = () => {
  if (!editor) return { };
  return editor.model;
};

import { predefinedConnectivityModel, predefinedCutVertexModel, predefinedPlanarityModel } from './predefinedModels';
import { UMLModel } from '../lib';
function loadDemoModel(taskKey: string){
  if(editor != null){
    // @ts-ignore
    const newModel : UMLModel = taskModelMap.get(taskKey);
    editor.model = newModel;
  }
}

const taskDescriptionPlanarity = 'Assesses whether the given graph is planar.';
const taskDescriptionConnectivity = 'This task assesses your knowledge about the <em>connectivity</em> of graphs. ' +
  'Remove <em>exactly one</em> edge whose removal disconnects the graph.';
const taskDescriptionCutVertex = 'This task assesses your knowledge about <em>cut vertices</em>. ' +
  'This graph has exactly one cut vertex. Your task is to mark the correct vertex.';

const taskPlanarity = 'PLANARITY';
const taskConnectivity = 'CONNECTIVITY';
const taskCutVertex = 'CUT_VERTEX';

const taskDescriptionMap = new Map([
  [taskPlanarity, taskDescriptionPlanarity],
  [taskConnectivity, taskDescriptionConnectivity],
  [taskCutVertex, taskDescriptionCutVertex],
]);

const taskModelMap = new Map([
  [taskPlanarity, predefinedPlanarityModel],
  [taskConnectivity, predefinedConnectivityModel],
  [taskCutVertex, predefinedCutVertexModel]
]);

const taskDescriptionNode = document.getElementById('taskDescription');
const taskDropDown = (document.getElementById('taskDropDown')) as HTMLSelectElement;
const submitAssessmentSection = document.getElementById('submitAssessmentSection');
// taskDropDown.selectedIndex = -1;
taskDropDown.addEventListener('change', (e) => {
  taskDescriptionNode!.innerHTML = taskDescriptionMap.get(taskDropDown.value)!;
  submitAssessmentSection!.style.display = 'inline';
  loadDemoModel(taskDropDown.value);
});

const assessmentResultsDOMNode = document.getElementById('assessmentResults');

enum AssessmentResultType {
  PASS = 'PASS',
  FAIL = 'FAIL',
  ERROR = 'ERROR'
}

export function submitSolution() {
  resetAssessmentUiElements();
  const payload = getModelAsJson();
  // tslint:disable-next-line:no-console
  console.log(editor!.model);
  // for the sake of the prototype..
  // @ts-ignore
  payload!.taskType = taskDropDown.value;

  // @ts-ignore
  requestAssessment(payload).then((response) => {
    const assessmentResponse : AssessmentResponse =  {
      assessmentResponseType : response.assessmentResponse,
      message : response.message
    };

    assessmentResultsDOMNode!.innerHTML = assessmentResponse.message;

    if(assessmentResponse.assessmentResponseType === AssessmentResultType.PASS){
      assessmentResultsDOMNode!.classList.add('assessment-success');
    }else{
      assessmentResultsDOMNode!.classList.add('assessment-error');
    }

    toggleDomElementDisplayById('waitingForAssessmentResults');
  }).catch((error) => {
    assessmentResultsDOMNode!.innerHTML = 'An internal error has occurred.';
    assessmentResultsDOMNode!.classList.add('assessment-error');
    toggleDomElementDisplayById('waitingForAssessmentResults');
  });

}

async function requestAssessment(payload: Apollon.UMLModel | undefined) {
  toggleDomElementDisplayById('assessmentFeedbackSection');
  const assessmentResponse = await fetch('http://localhost:8889/graphAssessment', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  if(assessmentResponse.ok){
    return assessmentResponse.json();
  }
}

export function toggleDomElementDisplayById(id: string) {
  const element = document.getElementById(id);
  if (element != null) {
    if (window.getComputedStyle(element, null).display === 'none') {
      element.style.display = 'inline';
    } else {
      element.style.display = 'none';
    }
  }
}

const assessmentFeedbackSection = document.getElementById('assessmentFeedbackSection');
const waitingForAssessmentResultsDOMNode = document.getElementById('waitingForAssessmentResults');

function resetAssessmentUiElements() {
  assessmentFeedbackSection!.style.display = 'none';
  waitingForAssessmentResultsDOMNode!.style.display = 'inline';
  assessmentResultsDOMNode!.innerHTML = '';
  assessmentResultsDOMNode!.classList.forEach((cl) => {
    assessmentResultsDOMNode!.classList.remove(cl);
  });
}

interface AssessmentResponse {
  assessmentResponseType : string;
  message : string;
}