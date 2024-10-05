import os, json
import pandas as pd
from json import JSONDecodeError


def generate_exoplanet():
    file_path = os.path.abspath("spaceApps/content/test_exoplanet.json")
    with open(file_path, 'r') as file:
        return json.load(file)

def save_exoplanet(exo_data: dict):
    file_path = os.path.abspath("spaceApps/content/generated_exoplanet.json")
    json_object = json.dumps(exo_data, indent=4)
    with open(file_path, 'w') as outfile:
        outfile.write(json_object)

def get_saved_exoplanet():
    file_path = os.path.abspath("spaceApps/content/generated_exoplanet.json")
    with open(file_path, 'r') as file:
        try:
            return json.load(file)
        except JSONDecodeError:
            print("Couldn't load saved exoplanet")

def find_similar_exoplanet():

    # data = {}
    # data["name"] = "Proxima Centauri b"
    # data["description"] = "Proxima Centauri b is an exoplanet orbiting the red dwarf star Proxima Centauri, which is the closest star to our solar system, located about 4.24 light-years away. It is a rocky planet, with a mass roughly 1.17 times that of Earth, and it resides in its star's habitable zone, where temperatures may allow for liquid water. The planet orbits very close to its star, completing a full orbit in just 11.2 Earth days. However, due to Proxima Centauri's frequent stellar flares, the conditions on Proxima b might be harsh for life as we know it"
    # data["host_star"] = "Proxima Centauri"
    # data["discovery_method"]= "Radial Velocity"
    # data["discovery_year"]= 2016
    # data["discovery_facility"]= "European Southern Observatory (ESO) using HARPS and UVES instruments"
    # data["distance"]= 4.24
    # data["mass"]= 1.17
    # data["radius"]= 1.1
    # data["orbital_period"]= 11.2
    # data["semimajor_axis"]= 0.0485
    # data["eccentricity"]= 0.0
    # data["inclination"]= 0.0
    # data["temperature"]= 234
    # data["density"]= 0.0
    # data["star_mass"]= 0.12
    # data["star_radius"]= 0.14
    # data["star_temp"]= 3050
    # data["star_metallicity"]= -0.01
    # data["picture_path"]= "../../real_exoplanet.jpeg"

    # return data

    file_path = os.path.abspath("spaceApps/content/real_exoplanet2.json")
    with open(file_path, 'r') as file:
        return json.load(file)

def get_example_exoplanet(name: str):
    file_path = os.path.abspath(f"spaceApps/content/examples/{name}.json")
    with open(file_path, 'r') as file:
        return json.load(file)