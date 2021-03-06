import {Answser} from "./answser";


export class Question {
  title: string;
  answers: Answser[];
  correctAnswers = [false, false, false , false];
  time: 0;

  constructor() {
    this.title = '';
    this.answers = [];

    this.addDefaultQuestions(4);
  }

  addDefaultQuestions(numberOfQuestions) {
    for (let i = 0; i <= (numberOfQuestions-1); i++) {
      this.answers.push(new Answser());
    }
  }
}
