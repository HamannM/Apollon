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

const taskDescriptionPlanarity = 'Assesses whether the given graph is planar.';
const taskDescriptionConnectivity = 'Assesses whether the given graph is connected.';
const taskDescriptionCutVertex = 'Assesses whether the selected vertex is a cut vertex.';

const taskDescriptionMap = new Map([
  ['PLANARITY', taskDescriptionPlanarity],
  ['CONNECTIVITY', taskDescriptionConnectivity],
  ['CUT_VERTEX', taskDescriptionCutVertex],
]);

const taskDescriptionNode = document.getElementById('taskDescription');
const taskDropDown = (document.getElementById('taskDropDown')) as HTMLSelectElement;
taskDropDown.selectedIndex = -1;
taskDropDown.addEventListener('change', (e) => {
  taskDescriptionNode!.innerHTML = taskDescriptionMap.get(taskDropDown.value)!;
});

function resetAssessmentUiElements() {
  document.getElementById('assessmentFeedbackSection')!.style.display = 'none';
  document.getElementById('waitingForAssessmentResults')!.style.display = 'inline';
}

export function submitSolution() {
  resetAssessmentUiElements();
  const payload = getModelAsJson();
  // for the sake of the prototype..
  // @ts-ignore
  payload!.taskType = taskDropDown.value;

  // @ts-ignore
  requestAssessment(payload).then((response) => {
    document.getElementById('assessmentResults')!.innerHTML = 'assessment results';
    toggleDomElementDisplayById('waitingForAssessmentResults');
  }).catch((error) => {
    document.getElementById('assessmentResults')!.innerHTML = 'An internal error has occurred.';
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