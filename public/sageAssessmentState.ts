export class SageAssessmentState{
  readonly _modelId : string;
  hintLevel : number = 0;

  constructor(modelId : string){
    this._modelId = modelId;
  }
}