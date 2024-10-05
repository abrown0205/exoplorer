import reflex as rx

from spaceApps.backend.exoplanets import find_similar_exoplanet, find_exoplanet_by_name
from spaceApps.navigation import NavState
from spaceApps.navigation.routes import EXPLORE_ROUTE, QUIZ_ROUTE, GENERATE_ROUTE

CONVERT_TO_LY = 3.26156

class ExoplanetState(rx.State):
    questions: dict = {}
    selectedAnswers: dict = {}
    current_exoplanet: dict = {
        "name": "",
        "description": "",
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
    }
    matched_exoplanet: dict = {
        "name": "",
        "description": "",
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
    }

    def set_questions_and_answers(self, questions:dict, answers:dict):
        self.questions = questions
        self.selectedAnswers = answers

    def get_exoplanet(self):
        data = find_similar_exoplanet(self.questions, self.selectedAnswers)
        self.current_exoplanet["name"] = data["name"]
        self.current_exoplanet["description"] = data["description"]
        self.current_exoplanet["host_star"] = data["host_star"]
        self.current_exoplanet["discovery_method"] = data["discovery_method"]
        self.current_exoplanet["discovery_year"] = data["discovery_year"]
        self.current_exoplanet["discovery_facility"] = data["discovery_facility"]
        self.current_exoplanet["radius"] = data["radius"]
        self.current_exoplanet["mass"] = data["mass"]
        self.current_exoplanet["orbital_period"] = data["orbital_period"]
        self.current_exoplanet["distance"] = data["distance"]
        self.current_exoplanet["semimajor_axis"] = data["semimajor_axis"]
        self.current_exoplanet["eccentricity"] = data["eccentricity"]
        self.current_exoplanet["inclination"] = data["inclination"]
        self.current_exoplanet["temperature"] = data["temperature"]
        self.current_exoplanet["density"] = data["density"]
        self.current_exoplanet["star_mass"] = data["star_mass"]
        self.current_exoplanet["star_radius"] = data["star_radius"]
        self.current_exoplanet["star_temp"] = data["star_temp"]
        self.current_exoplanet["star_metallicity"] = data["star_metallicity"]
        self.matched_exoplanet = self.current_exoplanet
        if self.router.page.path == QUIZ_ROUTE:
            yield NavState.set_back(GENERATE_ROUTE)
        else:
            yield NavState.set_current_as_back()

    def load_matched_exoplanet(self):
        self.current_exoplanet = self.matched_exoplanet

    def get_example_exoplanet(self, exoplanet_name:str):
        data = find_exoplanet_by_name(exoplanet_name)
        self.current_exoplanet["name"] = data["name"]
        # self.current_exoplanet["description"] = data["description"]
        self.current_exoplanet["host_star"] = data["host_star"]
        self.current_exoplanet["discovery_method"] = data["discovery_method"]
        self.current_exoplanet["discovery_year"] = data["discovery_year"]
        self.current_exoplanet["discovery_facility"] = data["discovery_facility"]
        self.current_exoplanet["radius"] = data["radius"]
        self.current_exoplanet["mass"] = data["mass"]
        self.current_exoplanet["orbital_period"] = data["orbital_period"]
        self.current_exoplanet["distance"] = data["distance"]
        self.current_exoplanet["semimajor_axis"] = data["semimajor_axis"]
        self.current_exoplanet["eccentricity"] = data["eccentricity"]
        self.current_exoplanet["inclination"] = data["inclination"]
        self.current_exoplanet["temperature"] = data["temperature"]
        self.current_exoplanet["density"] = data["density"]
        self.current_exoplanet["star_mass"] = data["star_mass"]
        self.current_exoplanet["star_radius"] = data["star_radius"]
        self.current_exoplanet["star_temp"] = data["star_temp"]
        self.current_exoplanet["star_metallicity"] = data["star_metallicity"]
        yield NavState.set_current_as_back()

    @rx.var
    def get_exoplanet_data(self) -> list[list[str]]:
        return [
            ["Host Star", "The star that this planet is orbiting", self.current_exoplanet["host_star"]],
            ["Discovery Method", "The method used to discover this planet", self.current_exoplanet["discovery_method"]],
            ["Discovery Year", "The year this planet was discovered", self.current_exoplanet["discovery_year"]],
            ["Discovery Facility", "The facility this planet was discovered at", self.current_exoplanet["discovery_facility"]],
            ["Radius (Earth Radii)", "The size of this planet, measured in Earth radii (R⊕)", self.current_exoplanet["radius"]],
            ["Mass (Jupiter Masses)", "The gravitational influence this planet exerts, in terms of Jupiter masses (M♃)", self.current_exoplanet["mass"]],
            ["Orbital Period (days)", "The time it takes for this planet to complete one full orbit around its host star in days", self.current_exoplanet["orbital_period"]],
            ["Distance From Earth (pc)", "How far this planet is from Earth, in parsecs (1pc=~3.26 lightyears)", self.current_exoplanet["distance"]],
            ["Semi-Major Axis (AU)", "The average distance between this planet and its host star, typically measured in astronomical units (AU). An astronomical unit (AU) is defined as the average distance from the Earth to the Sun.", self.current_exoplanet["semimajor_axis"]],
            ["Eccentricity", "The deviation of this planet's orbit from a perfect circle. Values range from 0 (circular) to 1 (parabolic),", self.current_exoplanet["eccentricity"]],
            ["Orbital Inclination (deg)", "The tilt of this planet's orbit relative to the plane of the solar system", self.current_exoplanet["inclination"]],
            ["Equilibrium Temperature (K)", "The temperature of this planet", self.current_exoplanet["temperature"]],
            ["Planet Density (g/cm³)", "The density of this planet, calculated using the its mass and volume and can provide insights into whether a planet is rocky, gaseous, or a mixture of both.", self.current_exoplanet["density"]],
            ["Host Star Mass (Solar Masses)", "The gravitational influence this planet's host star exerts, in terms of Solar masses (M⊙)", self.current_exoplanet["star_mass"]],
            ["Host Star Radius (Solar Radii)", "The size of this planet's host star, measured in Solar radii (R⊙)", self.current_exoplanet["star_radius"]],
            ["Host Star Effective Temperature (K)", "The temperature of this planet's host star", self.current_exoplanet["star_temp"]],
            ["Host Star Metallicity", "The abundance of elements heavier than hydrogen and helium in this planet's host star", self.current_exoplanet["star_metallicity"]]
        ]

    @rx.var
    def get_summary_data(self) -> list[list[str]]:
        return [
            ["Radius (Earth Radii)", "The size of this planet, measured in Earth radii (R⊕)", self.current_exoplanet["radius"]],
            ["Mass (Jupiter Masses)", "The gravitational influence this planet exerts, in terms of Jupiter masses (M♃)", self.current_exoplanet["mass"]],
            ["Orbital Period (days)", "The time it takes for this planet to complete one full orbit around its host star in days", self.current_exoplanet["orbital_period"]],
            ["Distance From Earth (pc)", "How far this planet is from Earth, in parsecs (1pc=~3.26 lightyears)", self.current_exoplanet["distance"]],
            ["Semi-Major Axis (AU)", "The average distance between this planet and its host star, typically measured in astronomical units (AU). An astronomical unit (AU) is defined as the average distance from the Earth to the Sun.", self.current_exoplanet["semimajor_axis"]],
        ]


    def get_exoplanet_from_explore(self, data_list: str):
        self.current_exoplanet["name"] = data_list[0]
        self.current_exoplanet["description"] = self.generate_description
        self.current_exoplanet["host_star"] = data_list[1]
        self.current_exoplanet["discovery_method"] = data_list[2]
        self.current_exoplanet["discovery_year"] = data_list[3]
        self.current_exoplanet["discovery_facility"] = data_list[17]
        self.current_exoplanet["radius"] = data_list[4]
        self.current_exoplanet["mass"] = data_list[5]
        self.current_exoplanet["orbital_period"] = data_list[6]
        self.current_exoplanet["distance"] = data_list[7]
        self.current_exoplanet["semimajor_axis"] = data_list[8]
        self.current_exoplanet["eccentricity"] = data_list[9]
        self.current_exoplanet["inclination"] = data_list[10]
        self.current_exoplanet["temperature"] = data_list[11]
        self.current_exoplanet["density"] = data_list[12]
        self.current_exoplanet["star_mass"] = data_list[13]
        self.current_exoplanet["star_radius"] = data_list[14]
        self.current_exoplanet["star_temp"] = data_list[15]
        self.current_exoplanet["star_metallicity"] = data_list[16]
        self.current_exoplanet["picture_path"] = ""
        yield NavState.set_back(EXPLORE_ROUTE)

        return NavState.to_meet

    @rx.var
    def generate_description(self) -> str:
        first_part = f'{self.current_exoplanet["name"]} is an exoplanet in the {self.current_exoplanet["host_star"]} system that' \
                f' was discovered in {self.current_exoplanet["discovery_year"]}. It is about {round(self.current_exoplanet["distance"], 2)}' \
                f' parsecs from our solar system, meaning it would take about {round(self.current_exoplanet["distance"] * CONVERT_TO_LY, 1)}' \
                f' years to get there if you could travel at the speed of light! '
        if self.current_exoplanet["radius"] <= 0.1:
            compare_to_earth = f'{self.current_exoplanet["name"]} has a much smaller radius than Earth, with a radius of {self.current_exoplanet["radius"]} Earth Radii.'
        elif self.current_exoplanet["radius"] < 0.9:
            compare_to_earth = f'{self.current_exoplanet["name"]} has a smaller radius than Earth, with a radius of {self.current_exoplanet["radius"]} Earth Radii.'
        elif self.current_exoplanet["radius"] >= 0.9 and self.current_exoplanet["radius"] <= 1.1:
            compare_to_earth = f'{self.current_exoplanet["name"]} has a similar radius to Earth, with a radius of {self.current_exoplanet["radius"]} Earth Radii.'
        elif self.current_exoplanet["radius"] > 2:
            compare_to_earth = f'{self.current_exoplanet["name"]} has a much larger radius than Earth, with a radius of {self.current_exoplanet["radius"]} Earth Radii.'
        elif self.current_exoplanet["radius"] > 1:
            compare_to_earth = f'{self.current_exoplanet["name"]} has a larger radius than Earth, with a radius of {self.current_exoplanet["radius"]} Earth Radii.'
        else:
            compare_to_earth = f'{self.current_exoplanet["name"]} has a radius of {self.current_exoplanet["radius"]} Earth Radii.'

        final_part = f' To learn more information about {self.current_exoplanet["name"]}, see the data in the table below.'

        return first_part + compare_to_earth + final_part
