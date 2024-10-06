"""Base state for Exoplanet Explorer"""
import reflex as rx
import os, json
import pandas as pd
import math

from .generate_state import GenerateState

df = pd.read_csv("./exoplanet_data.csv")


class State(rx.State):
    """The app state."""
    questions: dict = {}
    curQuestionNum: int = 0
    selectedAnswers: dict = {}
    loading: bool = False

    """Quiz State Vars"""
    @rx.var
    def load_questions(self):
        file_path = os.path.abspath("spaceApps/content/senior.json")
        with open(file_path, 'r') as file:
            data = json.load(file)

        self.questions = data

    @rx.var
    def max_question_num(self) -> int:
        return len(self.questions) - 1

    def increment_question_number(self):
        if self.curQuestionNum < self.max_question_num:
            self.curQuestionNum += 1
        else:
            self.curQuestionNum = self.max_question_num


    def decrement_question_number(self):
        if self.curQuestionNum > 0:
            self.curQuestionNum -= 1
        else:
            self.curQuestionNum = 1

    @rx.var
    def get_cur_question(self) -> str:
        if len(self.questions) > 0:
            return self.questions[str(self.curQuestionNum)]["question"]

    @rx.var
    def get_cur_answers(self) -> list[str]:
        if len(self.questions) > 0:
            return self.questions[str(self.curQuestionNum)]["answers"]

    @rx.var
    def get_cur_meaning(self) -> str:
        if len(self.questions) > 0:
                return self.questions[str(self.curQuestionNum)]["meaning"]

    @rx.var
    def get_cur_type(self) -> str:
        if len(self.questions) > 0:
            return self.questions[str(self.curQuestionNum)]["type"]

    @rx.var
    def get_cur_unit(self) -> str:
        if len(self.questions) > 0:
            return self.questions[str(self.curQuestionNum)]["unit"]

    @rx.var
    def get_question_min(self) -> float:
        return self.questions[str(self.curQuestionNum)]["answers"][0]

    @rx.var
    def get_question_max(self) -> float:
        if len(self.questions[str(self.curQuestionNum)]["answers"]) > 1:
            return self.questions[str(self.curQuestionNum)]["answers"][1]

    
    @rx.var    
    def getMin(self) -> int:
        if len(self.questions) > 0:
            if self.questions[str(self.curQuestionNum)]["type"] == "slider":
                return math.floor(df[self.questions[str(self.curQuestionNum)]["meaning"]].min())
    
    @rx.var
    def getMax(self) -> int:
        if len(self.questions) > 0:
            if self.questions[str(self.curQuestionNum)]["type"] == "slider":
                if self.questions[str(self.curQuestionNum)]["answers"][0] == "pl_orbper":
                    return 2000000
                else:
                    return math.ceil(df[self.questions[str(self.curQuestionNum)]["meaning"]].max())
            
    @rx.var
    def getSelectedAnswer(self) -> int:
        if self.questions[str(self.curQuestionNum)]["type"] == "slider":
            if self.curQuestionNum not in self.selectedAnswers:
                return math.floor(df[self.questions[str(self.curQuestionNum)]["meaning"]].min())
            else:
                return self.selectedAnswers[self.curQuestionNum]

    def set_answers(self, answer):
        self.selectedAnswers[self.curQuestionNum] = answer
        print(self.selectedAnswers[self.curQuestionNum])


    def handle_submit(self):
        self.loading = True
        yield GenerateState.set_questions_and_answers(self.questions, self.selectedAnswers)

        self.curQuestionNum = 0
        self.selectedAnswers = {}

        return GenerateState.get_generated_exoplanet()

    def reset_loading(self):
        self.loading = False
