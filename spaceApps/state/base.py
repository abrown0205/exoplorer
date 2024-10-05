"""Base state for Exoplanet Explorer"""
import reflex as rx
import os, json
import pandas as pd
import math

from .exoplanet_state import ExoplanetState
from .generate_state import GenerateState

df = pd.read_csv("./exoplanet_data.csv")

class JSONData(rx.Base):
    data: dict

class State(rx.State):
    """The app state."""
    junior_mode: str = rx.Cookie("False")
    questions: JSONData = JSONData(data={})
    curQuestionNum: int = 0
    selectedAnswers: dict = {}
    # currMc: bool = True

    # The switch isn't working correctly with the questions
    def change_mode(self, checked:bool):
        self.junior_mode = "True" if checked else "False"

    @rx.var
    def junior_mode_enabled(self) -> bool:
        return True if self.junior_mode == "True" else False

    """Quiz State Vars"""
    @rx.var
    def load_questions(self):
        file_path = os.path.abspath(
            "spaceApps/content/junior.json" if self.junior_mode_enabled else "spaceApps/content/senior.json")
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
        
        # questions = self.questions.data
        # selectedAnswers = self.selectedAnswers
        GenerateState.questions = self.questions.data
        GenerateState.selectedAnswers  = self.selectedAnswers

        # input_dict = {}
        #
        # for question in questions:
        #     if questions[question]["type"] == "slider":
        #         col_name = questions[question]["answers"][0]
        #         input_dict[col_name] = selectedAnswers[int(question)]
        #
        # filtered_data = df[input_dict.keys()].copy()
        # normalized_data = (filtered_data - filtered_data.min()) / (filtered_data.max() - filtered_data.min())
        #
        # input_values = {}
        # for key, value in input_dict.items():
        #     if key in df.columns:
        #         min_val, max_val = df[key].min(), df[key].max()
        #         input_values[key] = (value - min_val) / (max_val - min_val)
        #
        # similarity_scores = []
        # for index, planet in normalized_data.iterrows():
        #     similarity = 0
        #     for key, value in input_values.items():
        #         if key in planet:
        #             similarity += 1 - abs(planet[key] - value)
        #     similarity_scores.append(similarity / len(input_values))
        #
        # df['similarity_score'] = similarity_scores
        #
        # most_similar_planet = df.loc[df['similarity_score'].idxmax()]
        #
        # most_similar_planet.to_dict()
        #
        # print(most_similar_planet)
        #
        # data = {}
        # data["name"] = most_similar_planet['pl_name']
        # data["description"] = "Proxima Centauri b is an exoplanet orbiting the red dwarf star Proxima Centauri, which is the closest star to our solar system, located about 4.24 light-years away. It is a rocky planet, with a mass roughly 1.17 times that of Earth, and it resides in its star's habitable zone, where temperatures may allow for liquid water. The planet orbits very close to its star, completing a full orbit in just 11.2 Earth days. However, due to Proxima Centauri's frequent stellar flares, the conditions on Proxima b might be harsh for life as we know it"
        # data["host_star"] = most_similar_planet['hostname']
        # data["discovery_method"] = most_similar_planet['discoverymethod']
        # data["discovery_year"] = int(most_similar_planet['disc_year'])
        # data["discovery_facility"] = most_similar_planet['disc_facility']
        # data["distance"] = float(most_similar_planet['sy_dist'])
        # data["mass"] = float(most_similar_planet['pl_bmassj'])
        # data["radius"] = float(most_similar_planet['pl_rade'])
        # data["orbital_period"] = float(most_similar_planet['pl_orbper'])
        # data["semimajor_axis"] = float(most_similar_planet['pl_orbsmax'])
        # data["eccentricity"] = float(most_similar_planet['pl_orbeccen'])
        # data["inclination"] = float(most_similar_planet['pl_orbincl'])
        # data["temperature"] = float(most_similar_planet['pl_eqt'])
        # data["density"] = float(most_similar_planet['pl_dens'])
        # data["star_mass"] = float(most_similar_planet['st_mass'])
        # data["star_radius"] = float(most_similar_planet['st_rad'])
        # data["star_temp"] = float(most_similar_planet['st_teff'])
        # data["star_metallicity"] = float(most_similar_planet['st_met'])
        # data["picture_path"] = "../../real_exoplanet.jpeg"

        # ExoplanetState.set_exoplanet(data)
        # file_path = os.path.abspath("spaceApps/content/real_exoplanet2.json")
        # with open(file_path, 'w') as file:
        #     json.dump(data, file)

        self.curQuestionNum = 0
        self.selectedAnswers = {}

        return GenerateState.get_generated_exoplanet()
