export const taskDescriptionNode = document.getElementById('taskDescription');
export const taskDropDown = (document.getElementById('taskDropDown')) as HTMLSelectElement;
export const assessmentResultsDOMNode = document.getElementById('assessmentResults');
const assessmentFeedbackSection = document.getElementById('assessmentFeedbackSection');
const waitingForAssessmentResultsDOMNode = document.getElementById('waitingForAssessmentResults');
export const submitAssessmentSection = document.getElementById('submitAssessmentSection');

export function resetAssessmentUiElements() {
  assessmentFeedbackSection!.style.display = 'none';
  waitingForAssessmentResultsDOMNode!.style.display = 'inline';
  assessmentResultsDOMNode!.innerHTML = '';
  assessmentResultsDOMNode!.classList.forEach((cl) => {
    assessmentResultsDOMNode!.classList.remove(cl);
  });
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