import reflex as rx

from spaceApps.backend.exoplanets import get_example_exoplanet
from spaceApps.navigation import NavState
from spaceApps.navigation.routes import GENERATE_ROUTE
from spaceApps.state.exoplanet_state import ExoplanetState


class ExampleState(rx.State):
    matched_exoplanet_file: str = ""
    example_data: dict = {
        "name": "",
        "description": "",
        "distance": 0.0,
        "mass": 0.0,
        "radius": 0.0,
        "orbital_period": 0.0,
        "semimajor_axis": 0.0,
        "eccentricity": 0.0,
        "inclination": 0.0,
        "temperature": 0.0,
        "density": 0.0,
        "picture_path": ""
    }

    def get_example_exoplanet(self, name: str):
        data = get_example_exoplanet(name)
        self.example_data["name"] = data["name"]
        self.example_data["description"] = data["description"]
        self.example_data["distance"] = data["distance"]
        self.example_data["mass"] = data["mass"]
        self.example_data["radius"] = data["radius"]
        self.example_data["semimajor_axis"] = data["semimajor_axis"]
        self.example_data["orbital_period"] = data["orbital_period"]
        self.example_data["distance"] = data["distance"]
        self.example_data["semimajor_axis"] = data["semimajor_axis"]
        self.example_data["temperature"] = data["temperature"]
        self.example_data["picture_path"] = data["picture_path"]

        yield NavState.set_back(GENERATE_ROUTE)
        yield  ExoplanetState.get_exoplanet()
        yield NavState.to_example_planet()

    @rx.var
    def get_example_data(self) -> list[list[str]]:
        return [
            ["Radius (Earth Radii)", "The size of this planet, measured in Earth radii (R⊕)", self.example_data["radius"]],
            ["Mass (Jupiter Masses)", "The gravitational influence this planet exerts, in terms of Jupiter masses (M♃)", self.example_data["mass"]],
            ["Orbital Period (days)", "The time it takes for this planet to complete one full orbit around its host star in days", self.example_data["orbital_period"]],
            ["Distance From Earth (pc)", "How far this planet is from Earth, in parsecs (1pc=~3.26 lightyears)", self.example_data["distance"]],
            ["Semi-Major Axis (AU)", "The average distance between this planet and its host star, typically measured in astronomical units (AU). An astronomical unit (AU) is defined as the average distance from the Earth to the Sun.", self.example_data["semimajor_axis"]],
            ["Equilibrium Temperature (K)", "The temperature of this planet", self.example_data["temperature"]],
        ]