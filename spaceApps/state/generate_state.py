import reflex as rx

from spaceApps.backend import generate_exoplanet
from spaceApps.backend.exoplanets import find_similar_exoplanet, get_example_exoplanet, save_exoplanet, \
    get_saved_exoplanet
from spaceApps.navigation import NavState
from spaceApps.navigation.routes import EXAMPLES_ROUTE, HOME_ROUTE, GENERATE_ROUTE
from spaceApps.state.exoplanet_state import ExoplanetState


class GenerateState(rx.State):
    generated_name: str = rx.Cookie("My Awesome Exoplanet")
    generated_data: dict = {
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
        "picture_path": ""
    }

    def get_generated_exoplanet(self):
        data = generate_exoplanet()
        self.generated_name = data["name"]
        self.generated_data["description"] = data["description"]
        self.generated_data["distance"] = data["distance"]
        self.generated_data["mass"] = data["mass"]
        self.generated_data["radius"] = data["radius"]
        self.generated_data["semimajor_axis"] = data["semimajor_axis"]
        self.generated_data["orbital_period"] = data["orbital_period"]
        self.generated_data["distance"] = data["distance"]
        self.generated_data["semimajor_axis"] = data["semimajor_axis"]
        self.generated_data["eccentricity"] = data["eccentricity"]
        self.generated_data["inclination"] = data["inclination"]
        self.generated_data["temperature"] = data["temperature"]
        self.generated_data["density"] = data["density"]
        self.generated_data["star_mass"] = data["star_mass"]
        self.generated_data["star_radius"] = data["star_radius"]
        self.generated_data["star_temp"] = data["star_temp"]
        self.generated_data["star_metallicity"] = data["star_metallicity"]
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
            ["Eccentricity", "The deviation of this planet's orbit from a perfect circle. Values range from 0 (circular) to 1 (parabolic),", self.generated_data["eccentricity"]],
            ["Orbital Inclination (deg)", "The tilt of this planet's orbit relative to the plane of the solar system", self.generated_data["inclination"]],
            ["Equilibrium Temperature (K)", "The temperature of this planet", self.generated_data["temperature"]],
            ["Planet Density (g/cm³)", "The density of this planet, calculated using the its mass and volume and can provide insights into whether a planet is rocky, gaseous, or a mixture of both.", self.generated_data["density"]],
            ["Host Star Mass (Solar Masses)", "The gravitational influence this planet's host star exerts, in terms of Solar masses (M⊙)", self.generated_data["star_mass"]],
            ["Host Star Radius (Solar Radii)", "The size of this planet's host star, measured in Solar radii (R⊙)", self.generated_data["star_radius"]],
            ["Host Star Effective Temperature (K)", "The temperature of this planet's host star", self.generated_data["star_temp"]],
            ["Host Star Metallicity", "The abundance of elements heavier than hydrogen and helium in this planet's host star", self.generated_data["star_metallicity"]]
        ]
    @rx.var
    def updated_description(self) -> str:
        return self.generated_data["description"].replace("{name}", self.generated_name)

