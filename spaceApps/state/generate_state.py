import reflex as rx

from spaceApps.backend import generate_exoplanet
from spaceApps.navigation import NavState
from spaceApps.navigation.routes import EXAMPLES_ROUTE, HOME_ROUTE, GENERATE_ROUTE
from spaceApps.state.exoplanet_state import ExoplanetState


class GenerateState(rx.State):
    questions: dict = {}
    selectedAnswers: dict = {}
    generated_name: str = rx.Cookie("My Awesome Exoplanet")
    generated_data: dict = {
        "description": "",
        "color": "",
        "terrain": "",
        "host_star": "",
        "discovery_method": "",
        "discovery_year": "",
        "discovery_facility": "",
        "distance": 0.0,
        "mass": 0.0,
        "radius": 0.0,
        "orbital_period": 0.0,
        "semimajor_axis": 0.0,
        "eccentricity": 0.0,
        "inclination": 0.0,
        "temperature": 0.0,
        "density": 0.0,
        "star_mass": 0.0,
        "star_radius": 0.0,
        "star_temp": 0.0,
        "star_metallicity": 0.0,
        "picture_path": ""
    }

    def set_questions_and_answers(self, questions:dict, answers:dict):
        self.questions = questions
        self.selectedAnswers = answers

    def get_generated_exoplanet(self):
        yield ExoplanetState.set_questions_and_answers(self.questions, self.selectedAnswers)
        data = generate_exoplanet(self.questions, self.selectedAnswers)
        self.generated_name = "My Awesome Exoplanet"
        self.generated_data["description"] = data["description"]
        self.generated_data["color"] = data["color"]
        self.generated_data["terrain"] = data["terrain"]
        self.generated_data["distance"] = data["distance"]
        self.generated_data["mass"] = data["mass"]
        self.generated_data["radius"] = data["radius"]
        self.generated_data["semimajor_axis"] = data["semimajor_axis"]
        self.generated_data["orbital_period"] = data["orbital_period"]
        self.generated_data["distance"] = data["distance"]
        self.generated_data["semimajor_axis"] = data["semimajor_axis"]
        self.generated_data["temperature"] = data["temperature"]
        self.generated_data["picture_path"] = data["picture_path"]

        yield NavState.set_back(GENERATE_ROUTE)
        yield ExoplanetState.get_exoplanet()
        yield NavState.to_my_exo()


    def set_name(self, name: str):
        self.generated_name = name

    @rx.var
    def get_generated_data(self) -> list[list[str]]:
        return [
            ["Radius (Earth Radii)", "The size of this planet, measured in Earth radii (R⊕)",self.generated_data["radius"]],
            ["Mass (Jupiter Masses)", "The gravitational influence this planet exerts, in terms of Jupiter masses (M♃)",self.generated_data["mass"]],
            ["Orbital Period (days)", "The time it takes for this planet to complete one full orbit around its host star in days", self.generated_data["orbital_period"]],
            ["Distance From Earth (pc)", "How far this planet is from Earth, in parsecs (1pc=~3.26 lightyears)", self.generated_data["distance"]],
            ["Semi-Major Axis (AU)", "The average distance between this planet and its host star, typically measured in astronomical units (AU). An astronomical unit (AU) is defined as the average distance from the Earth to the Sun.", self.generated_data["semimajor_axis"]],
            ["Equilibrium Temperature (K)", "The temperature of this planet", self.generated_data["temperature"]],
        ]
    @rx.var
    def updated_description(self) -> str:
        return self.generated_data["description"].replace("{name}", self.generated_name)

