import * as Apollon from '../src/main';
import { ApollonMode } from '../src/main';
import './styles.css';
import {
  assessmentResultsDOMNode, initializeAssessmentUiElements,
  resetAssessmentUiElements,
  submitAssessmentSection,
  taskDescriptionNode,
  taskDropDown,
  toggleDomElementDisplayById,
} from './sageAssessmentUiElements';
import { AssessmentResponse } from './sageAssessmentResponse';
import { AssessmentResultType } from './sageAssessmentResultType';
import { SageAssessmentState } from './sageAssessmentState';

let currentSageAssessmentState: SageAssessmentState;

const container = document.getElementById('apollon')!;
let editor: Apollon.ApollonEditor | null = null;
let options: Apollon.ApollonOptions = {
  model: JSON.parse(window.localStorage.getItem('apollon')!),
  colorEnabled: false,
  scale: 0.75,
  type: 'MarkedGraph',
  mode: ApollonMode.GraphInspection,
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

const getModelAsJson = () => {
  if (!editor) return {};
  return editor.model;
};

taskDropDown.addEventListener('change', requestNextGraph);

function generateAssessmentRequestJson() {
  const payload = getModelAsJson();
  // tslint:disable-next-line:no-console
  console.log(editor!.model);
  // for the sake of the prototype..
  // @ts-ignore
  payload!.taskType = taskDropDown.value;
  // @ts-ignore
  payload!.participantAnswer = participantAnswer;
  // @ts-ignore
  payload!.hintLevel = currentSageAssessmentState.hintLevel;

  const participantAnswer = document.querySelector('input[name="assessmentQuestionAnswer"]:checked');
  if (participantAnswer != null) {
    // @ts-ignore
    payload!.solution = participantAnswer.value;
  }

  return payload;
}

export function submitSolutionOrHint() {
/*  const participantAnswer = document.querySelector('input[name="assessmentQuestionAnswer"]:checked');
  if (participantAnswer == null) {
    alert('Select an answer first.');
    return;
  }*/
  resetAssessmentUiElements();
  toggleDomElementDisplayById('assessmentFeedbackSection');

  const payload = generateAssessmentRequestJson();

  // @ts-ignore
  requestAssessment(payload).then((response) => {
    // tslint:disable-next-line:no-console
    console.log(response);

    const assessmentResponse: AssessmentResponse = {
      assessmentResponseType: response.assessmentResponse,
      message: response.message,
    };

    assessmentResultsDOMNode!.innerHTML = assessmentResponse.message;

    if (assessmentResponse.assessmentResponseType === AssessmentResultType.PASS) {
      assessmentResultsDOMNode!.classList.add('assessment-success');
    }
    if (assessmentResponse.assessmentResponseType === AssessmentResultType.ERROR
      || assessmentResponse.assessmentResponseType === AssessmentResultType.FAIL) {
      assessmentResultsDOMNode!.classList.add('assessment-error');
    }
    if (assessmentResponse.assessmentResponseType === AssessmentResultType.HINT) {
      const x = 1;
    }
    toggleDomElementDisplayById('waitingForAssessmentResults');
  }).catch((error) => {
    assessmentResultsDOMNode!.innerHTML = 'An internal error has occurred.';
    assessmentResultsDOMNode!.classList.add('assessment-error');
    toggleDomElementDisplayById('waitingForAssessmentResults');
  });
}

export async function requestNextGraph() {
  const assessmentResponse = await fetch('http://0.0.0.0:8889/requestTask?taskType=' + taskDropDown.value, {
    method: 'GET',
  }).then((response) => response.json())
    // tslint:disable-next-line:no-console
    .then((responseJson) => {
      if (editor != null) {
        editor.model = responseJson.model;
        initializeAssessmentUiElements(responseJson.question);
        resetAssessmentState(responseJson.modelId);
      }
    });
}

export async function requestHint() {
  const ele = document.getElementsByName('assessmentQuestionAnswer');
  // @ts-ignore
  for(const eleItem of ele)
    { // @ts-ignore
      eleItem.checked = false;
    }
  await submitSolutionOrHint();
  currentSageAssessmentState.hintLevel++;
}

export function requestSolution() {
  //
}

async function requestAssessment(payload: any) {
  const assessmentResponse = await fetch('http://0.0.0.0:8889/graphAssessment', {
    method: 'POST',
    body: JSON.stringify(payload),
    /*    headers: {
          'pragma': 'no-cache',
          'cache-control': 'no-cache'
        }*/
  });
  if (assessmentResponse.ok) {
    return assessmentResponse.json();
  }
}

function resetAssessmentState(modelId: string) {
  currentSageAssessmentState = new SageAssessmentState(modelId);
}
