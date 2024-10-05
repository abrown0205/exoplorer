import reflex as rx
from ..components import base_page
from ..components.example_box import example_box
from ..navigation.routes import GENERATE_ROUTE

PLANETS = [
    {
        "name": "Tatooine",
        "picture_path": "../../examples/Tatooine.jpg",
        "franchise": "Star Wars",
        "similar_planet_name": "Kepler-453b or Kepler-47c"
    },
    {
        "name": "Hoth",
        "picture_path": "../../examples/Hoth.jpg",
        "franchise": "Star Wars",
        "similar_planet_name": "OGLE-2005-BLG-390"
    },
    {
        "name": "Mustafar",
        "picture_path": "../../examples/Mustafar.jpg",
        "franchise": "Star Wars",
        "similar_planet_name": "Kepler-10b"

    },
    {
        "name": "Pandora",
        "picture_path": "../../examples/Pandora.jpg",
        "franchise": "Avatar",
        "similar_planet_name": "Kepler-442b"
    },
    {
        "name": "Vulcan",
        "picture_path": "../../examples/Vulcan.jpg",
        "franchise": "Star Trek",
        "similar_planet_name": "Proxima Centauri b"
    },
    {
        "name": "Arrakis",
        "picture_path": "../../examples/Arrakis.jpg",
        "franchise": "Dune",
        "similar_planet_name": "HD 40307g"
    },
]


def example_planets():
    return base_page(
        rx. container(
            rx.link(rx.button("Back"), href=GENERATE_ROUTE),
            rx.heading("Examples From Sci Fi", size="8",
                       text_align="center",
                       margin_bottom="2%"),
            rx.grid(
                *[example_box(planet) for planet in PLANETS],
                grid_template_columns=[
                    "1fr",
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                    "repeat(3, 1fr)",
                ],
                spacing="7",
                flex_direction=["column", "column", "row"],
            ),

        ),

    )