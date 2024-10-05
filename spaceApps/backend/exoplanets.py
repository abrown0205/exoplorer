import os, json
import pandas as pd
from dotenv import load_dotenv
from json import JSONDecodeError

from openai import OpenAI

df = pd.read_csv("./exoplanet_data.csv")

def generate_exoplanet(questions, selectedAnswers):
    print("test")
    color = "blue"
    size = 10

    for question in questions:
        if questions[question]["answers"] == ["blue", "green", "purple", "red", "pink"]:
            color = selectedAnswers[int(question)]
        if questions[question]["answers"] == ["pl_rade"]:
            size = selectedAnswers[int(question)]

    prompt = f'Generate an image of an exoplanet that is {color} color and {size} times the size of earth. Show only the planet in empty space.'

    load_dotenv()

    key = os.getenv('OPENAI_API_KEY')
    client = OpenAI(api_key=key)

    response = client.images.generate(
        model="dall-e-2",
        prompt=prompt,
        size="1024x1024",
        quality="standard",
        n=1,
    )
    image_url = response.data[0].url
    # file_path = os.path.abspath("spaceApps/content/test_exoplanet.json")
    # with open(file_path, 'r') as file:
    #     data = json.load(file)
    data = {}
    data["picture_path"] = image_url
    return data

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

def find_similar_exoplanet(questions, selectedAnswers):
    input_dict = {}

    for question in questions:
        if questions[question]["type"] == "slider":
            col_name = questions[question]["answers"][0]
            input_dict[col_name] = selectedAnswers[int(question)]

    filtered_data = df[input_dict.keys()].copy()
    normalized_data = (filtered_data - filtered_data.min()) / (filtered_data.max() - filtered_data.min())

    input_values = {}
    for key, value in input_dict.items():
        if key in df.columns:
            min_val, max_val = df[key].min(), df[key].max()
            input_values[key] = (value - min_val) / (max_val - min_val)

    similarity_scores = []
    for index, planet in normalized_data.iterrows():
        similarity = 0
        for key, value in input_values.items():
            if key in planet:
                similarity += 1 - abs(planet[key] - value)
        similarity_scores.append(similarity / len(input_values))

    df['similarity_score'] = similarity_scores

    most_similar_planet = df.loc[df['similarity_score'].idxmax()]

    most_similar_planet.to_dict()

    print(most_similar_planet)

    data = {}
    data["name"] = most_similar_planet['pl_name']
    data[
        "description"] = "Proxima Centauri b is an exoplanet orbiting the red dwarf star Proxima Centauri, which is the closest star to our solar system, located about 4.24 light-years away. It is a rocky planet, with a mass roughly 1.17 times that of Earth, and it resides in its star's habitable zone, where temperatures may allow for liquid water. The planet orbits very close to its star, completing a full orbit in just 11.2 Earth days. However, due to Proxima Centauri's frequent stellar flares, the conditions on Proxima b might be harsh for life as we know it"
    data["host_star"] = most_similar_planet['hostname']
    data["discovery_method"] = most_similar_planet['discoverymethod']
    data["discovery_year"] = int(most_similar_planet['disc_year'])
    data["discovery_facility"] = most_similar_planet['disc_facility']
    data["distance"] = float(most_similar_planet['sy_dist'])
    data["mass"] = float(most_similar_planet['pl_bmassj'])
    data["radius"] = float(most_similar_planet['pl_rade'])
    data["orbital_period"] = float(most_similar_planet['pl_orbper'])
    data["semimajor_axis"] = float(most_similar_planet['pl_orbsmax'])
    data["eccentricity"] = float(most_similar_planet['pl_orbeccen'])
    data["inclination"] = float(most_similar_planet['pl_orbincl'])
    data["temperature"] = float(most_similar_planet['pl_eqt'])
    data["density"] = float(most_similar_planet['pl_dens'])
    data["star_mass"] = float(most_similar_planet['st_mass'])
    data["star_radius"] = float(most_similar_planet['st_rad'])
    data["star_temp"] = float(most_similar_planet['st_teff'])
    data["star_metallicity"] = float(most_similar_planet['st_met'])
    data["picture_path"] = "../../real_exoplanet.jpeg"

    return data

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

    # file_path = os.path.abspath("spaceApps/content/real_exoplanet2.json")
    # with open(file_path, 'r') as file:
    #     return json.load(file)

def get_example_exoplanet(name: str):
    file_path = os.path.abspath(f"spaceApps/content/examples/{name}.json")
    with open(file_path, 'r') as file:
        return json.load(file)