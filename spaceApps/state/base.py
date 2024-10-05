"""Base state for Exoplanet Explorer"""
import reflex as rx
import os, json
import pandas as pd
import math

from .generate_state import GenerateState

df = pd.read_csv("./exoplanet_data.csv")

class JSONData(rx.Base):
    data: dict

class State(rx.State):
    """The app state."""
    questions: JSONData = JSONData(data={})
    curQuestionNum: int = 0
    selectedAnswers: dict = {}

    """Quiz State Vars"""
    @rx.var
    def load_questions(self):
        file_path = os.path.abspath("spaceApps/content/senior.json")
        with open(file_path, 'r') as file:
            data = json.load(file)

        self.questions = JSONData(data=data)

    @rx.var
    def max_question_num(self) -> int:
        return len(self.questions.data) - 1

    def increment_question_number(self):
        if self.curQuestionNum < self.max_question_num:
            self.curQuestionNum += 1
        else:
            self.curQuestionNum = self.max_question_num
        
        # if self.questions.data[str(self.curQuestionNum)]["type"] == "slider":
        #     self.currMc = False
        # else:
        #     self.currMc = True


    def decrement_question_number(self):
        if self.curQuestionNum > 0:
            self.curQuestionNum -= 1
        else:
            self.curQuestionNum = 1

    @rx.var
    def get_next_question(self) -> str:
        if len(self.questions.data) > 0:
            return self.questions.data[str(self.curQuestionNum)]["question"]

    @rx.var
    def get_next_answers(self) -> list:
        if len(self.questions.data) > 0:
            return self.questions.data[str(self.curQuestionNum)]["answers"]

    @rx.var
    def get_next_type(self) -> str:
        if len(self.questions.data) > 0:
            return self.questions.data[str(self.curQuestionNum)]["type"]
    
    @rx.var    
    def getMin(self) -> int:
        if len(self.questions.data) > 0:
            if self.questions.data[str(self.curQuestionNum)]["type"] == "slider":
                return math.floor(df[self.questions.data[str(self.curQuestionNum)]["answers"]].min())
    
    @rx.var
    def getMax(self) -> int:
        if len(self.questions.data) > 0:
            if self.questions.data[str(self.curQuestionNum)]["type"] == "slider":
                if self.questions.data[str(self.curQuestionNum)]["answers"][0] == "pl_orbper":
                    return 2000000
                else:
                    return math.ceil(df[self.questions.data[str(self.curQuestionNum)]["answers"]].max())
            
    @rx.var
    def getSelectedAnswer(self) -> int:
        if self.questions.data[str(self.curQuestionNum)]["type"] == "slider":
            if self.curQuestionNum not in self.selectedAnswers:
                return math.floor(df[self.questions.data[str(self.curQuestionNum)]["answers"]].min())
            else:
                return self.selectedAnswers[self.curQuestionNum]

    def set_answers(self, answer):
        self.selectedAnswers[self.curQuestionNum] = answer
        print(self.selectedAnswers[self.curQuestionNum])


    def handle_submit(self):
        print(self.selectedAnswers)

        yield GenerateState.set_questions_and_answers(self.questions.data, self.selectedAnswers)

        self.curQuestionNum = 0
        self.selectedAnswers = {}

        return GenerateState.get_generated_exoplanet()
