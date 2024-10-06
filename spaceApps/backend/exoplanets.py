import os, json
import pandas as pd
from dotenv import load_dotenv
from json import JSONDecodeError

from openai import OpenAI

df = pd.read_csv("./exoplanet_data.csv")

def generate_exoplanet(questions, selectedAnswers):
    generated_data = {}

    for question in questions:
        print(question)
        if questions[question]["meaning"] == "terrain":
            generated_data["terrain"] = selectedAnswers[question]
        elif questions[question]["meaning"] == "color":
            generated_data["color"] = selectedAnswers[question]
        elif questions[question]["meaning"] == "pl_eqt":
            generated_data["temperature"] = selectedAnswers[question][0]
        elif questions[question]["meaning"] == "pl_rade":
            generated_data["radius"] = selectedAnswers[question][0]
        elif questions[question]["meaning"] == "pl_orbsmax":
            generated_data["semimajor_axis"] = selectedAnswers[question][0]
        elif questions[question]["meaning"] == "pl_orbper":
            generated_data["orbital_period"] = selectedAnswers[question][0]
    print(generated_data)
    image_prompt = f'Generate an image of a {generated_data["terrain"]} exoplanet that is {generated_data["color"]} color and {generated_data["radius"]} times the size of earth. Show only the planet in empty space.'

    description_prompt = f'Create a 5 sentence summary of an exoplanet that is a {generated_data["color"]} {generated_data["terrain"]}. \
                          This exoplanet is {generated_data["radius"]} times the size of Earth. The average temperature of this planet is {generated_data["temperature"]} Kelvin.\
                           With a distance of {generated_data["semimajor_axis"]} AU from it\'s star, it takes this planet {generated_data["orbital_period"]} Earth days to orbit around the star. \
                           Do not create a name for the exoplanet. Use "{{name}}" where a name would be referenced. Start the description with "{{name}} is a".  Put this description, as well as an estimate for the planet\'s distance from Earth, density, \
                           and mass in a json format. Only respond with the json. Do not include units. Your json should match this format:\
                            {{"description": , "distance": , "density": , "mass": }}'

    load_dotenv()

    key = os.getenv('OPENAI_API_KEY')
    client = OpenAI(api_key=key)

    image_response = client.images.generate(
        model="dall-e-2",
        prompt=image_prompt,
        size="1024x1024",
        quality="standard",
        n=1,
    )

    text_response = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": description_prompt
            }
        ],
        model="gpt-4o-mini",
    )
    response_content = text_response.choices[0].message.content
    response_content = response_content.strip().splitlines()[1:-1]
    response_content = '\n'.join(response_content)
    data_dict = json.loads(response_content)

    generated_data["description"] = data_dict["description"]
    generated_data["mass"] = data_dict["mass"]
    generated_data["distance"] = data_dict["distance"]
    generated_data["density"] = data_dict["density"]


    generated_data["picture_path"] = image_response.data[0].url
    # generated_data["picture_path"] = "../../test_exoplanet.jpeg"

    return generated_data

def find_similar_exoplanet(questions, selectedAnswers):
    input_dict = {}

    for question in questions:
        if questions[question]["type"] == "slider":
            col_name = questions[question]["meaning"]
            input_dict[col_name] = selectedAnswers[question]

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

    return data

def find_exoplanet_by_name(name:str):
    matched_planet = df[df['pl_name'] == name].iloc[0].to_dict()

    data = {}
    data["name"] = matched_planet['pl_name']
    data["host_star"] = matched_planet['hostname']
    data["discovery_method"] = matched_planet['discoverymethod']
    data["discovery_year"] = matched_planet['disc_year']
    data["discovery_facility"] = matched_planet['disc_facility']
    data["distance"] = float(matched_planet['sy_dist'])
    data["mass"] = float(matched_planet['pl_bmassj'])
    data["radius"] = float(matched_planet['pl_rade'])
    data["orbital_period"] = float(matched_planet['pl_orbper'])
    data["semimajor_axis"] = float(matched_planet['pl_orbsmax'])
    data["eccentricity"] = float(matched_planet['pl_orbeccen'])
    data["inclination"] = float(matched_planet['pl_orbincl'])
    data["temperature"] = float(matched_planet['pl_eqt'])
    data["density"] = float(matched_planet['pl_dens'])
    data["star_mass"] = float(matched_planet['st_mass'])
    data["star_radius"] = float(matched_planet['st_rad'])
    data["star_temp"] = float(matched_planet['st_teff'])
    data["star_metallicity"] = float(matched_planet['st_met'])

    return data

def get_example_exoplanet(name: str):
    file_path = os.path.abspath(f"spaceApps/content/examples/{name}.json")
    with open(file_path, 'r') as file:
        return json.load(file)