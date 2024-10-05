import reflex as rx
import math
import pandas as pd
import numpy as np
import requests
from bs4 import BeautifulSoup
import PyPDF2
from io import BytesIO
import re
import requests
from requests.adapters import HTTPAdapter
# from requests.packages.urllib3.util.retry import Retry
import os

from spaceApps.state.exoplanet_state import ExoplanetState

df = pd.read_csv("./exoplanet_data.csv")

class OptionsState(rx.State):

    radius_min: int = math.floor(df['pl_rade'].min())
    radius_max: int = math.ceil(df['pl_rade'].max())
    radius: list = [radius_min, radius_max]
    
    distance_min: int = math.floor(df['sy_dist'].min())
    distance_max: int = math.ceil(df['sy_dist'].max())
    distance: list = [distance_min, distance_max]
    
    mass_min: int = math.floor(df['pl_bmassj'].min())
    mass_max: int = math.ceil(df['pl_bmassj'].max())
    mass: list = [mass_min, mass_max]
    
    orb_period_min: int = math.floor(df['pl_orbper'].min())
    orb_period_max: int = math.ceil(df['pl_orbper'].max())
    orb_period: list = [orb_period_min, orb_period_max]
    
    year_min: int = int(df['disc_year'].min())
    year_max: int = int(df['disc_year'].max())
    year: list = [year_min, year_max]

    filtered_planets: list[tuple[str, int, int]]= []
    data_list: list = []
    is_filtered: bool = False
    is_selected: bool = False

    def filter_exoplanets(self):

        include_nan_orbper = (self.orb_period_min == self.orb_period[0]) and (self.orb_period_max == self.orb_period[1])

        filtered_df = df[
            (df['pl_rade'] >= self.radius[0]) &
            (df['pl_rade'] <= self.radius[1]) &
            (df['sy_dist'] >= self.distance[0]) &
            (df['sy_dist'] <= self.distance[1]) &
            (df['pl_bmassj'] >= self.mass[0]) &
            (df['pl_bmassj'] <= self.mass[1]) &
            ((include_nan_orbper & df['pl_orbper'].isna()) | 
            ((df['pl_orbper'] >= self.orb_period[0]) & (df['pl_orbper'] <= self.orb_period[1]))) &
            (df['disc_year'] >= self.year[0]) &
            (df['disc_year'] <= self.year[1])
        ]
        filtered_df = filtered_df.sort_values(by='sy_dist').head(25)
        glat = filtered_df['glat'].tolist()
        glon = filtered_df['glon'].tolist()
        filtered_planets = filtered_df['pl_name'].tolist()
        tup_lists = []

        for i in range(len(glat)):
            long = 400 + (glon[i] / 360) * (1600 - 400)
            lat = 100 + ((glat[i] + 88) / 176) * (1500 - 100)
            tup_lists.append((filtered_planets[i], long, lat))

        adjusted_planets = tup_lists[:]  # Create a shallow copy of the list
        n = len(glat)

        for i in range(n):
            for j in range(i + 1, n):
                name1, x1, y1 = adjusted_planets[i]
                name2, x2, y2 = adjusted_planets[j]
                distance = np.sqrt((x2 - x1)**2 + (y2 - y1)**2)
                if distance < 20:
                    shift_x = 20
                    shift_y = 20
                    adjusted_x = x2 + shift_x
                    adjusted_y = y2 + shift_y
                    adjusted_planets[j] = (name2, adjusted_x, adjusted_y)
        
        self.filtered_planets = adjusted_planets
        self.is_filtered = True

    def set_radius(self, value):
        self.radius = value

    def planet_selected(self, value):

        self.is_selected = True
        exoplanet = df.loc[df['pl_name'] == value].to_dict(orient='records')[0]
        self.data_list = [value, exoplanet['hostname'], exoplanet['discoverymethod'], exoplanet['disc_year'], exoplanet['pl_rade'], exoplanet['pl_bmassj'], exoplanet['pl_orbper'], 
        exoplanet['sy_dist'], exoplanet['pl_orbsmax'], exoplanet['pl_orbeccen'], exoplanet['pl_orbincl'], exoplanet['pl_eqt'], exoplanet['pl_dens'], 
        exoplanet['st_mass'], exoplanet['st_rad'], exoplanet['st_teff'], exoplanet['st_met'], exoplanet['disc_facility']]

        return ExoplanetState.get_exoplanet_from_explore(self.data_list)
        # link = exoplanet['disc_refname']
        # pattern = r'https://[^\s]+?abstract' # Regex to find substring that starts with https and ends with abstract
        # match = re.search(pattern, link)
        # if match:
        #     url = match.group(0)
        #     print("Extracted URL:", url)
        # else:
        #     print("No URL found")
        #     # st.write(link)

        # pdf_link = None
        # response = requests.get(url)
        # soup = BeautifulSoup(response.content, 'html.parser')
        # resource_div = soup.find('div', class_='resources__container')
        #
        # if resource_div:
        #     links = resource_div.find_all('a')
        #     for link in links:
        #         if link.find('i', class_='fa fa-file-pdf-o'):
        #             href = link.get('href', '')
        #             if href and not href.startswith('http') and href.endswith("EPRINT_PDF"):
        #                 pdf_link = requests.compat.urljoin(url, href)
    
    def planet_not_selected(self):
        self.is_selected = False

    def set_distance(self, value):
        self.distance = value

    def set_mass(self, value):
        self.mass = value

    def set_orbper(self, value):
        self.orb_period = value

    def set_year(self, value):
        self.year = value





    # NOT NEEDED

    hover: bool = False
    selected_style: str = "Cinematic"
    advanced_options_open: bool = False
    # Generation options
    prompt: str = ""
    negative_prompt: str = (
        "deformed, distorted, disfigured, poorly drawn, bad anatomy, wrong anatomy, extra limb, missing limb, floating limbs, mutated hands and fingers, disconnected limbs, mutation, mutated, ugly, disgusting, blurry, amputation, text, watermark, signature"
    )
    num_outputs: int = 1
    seed: int = 0
    steps: int = 4
    scheduler: str = "K_EULER"
    guidance_scale: float = 0

    def set_hover(self, value: bool):
        self.hover = value

    def set_num_outputs(self, value: int):
        self.num_outputs = value[0]

    def set_steps(self, value: int):
        self.steps = value[0]

    def set_guidance_scale(self, value: float):
        self.guidance_scale = value[0]