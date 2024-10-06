"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx
from . import pages
from .navigation.routes import QUIZ_ROUTE, EXAMPLES_ROUTE, EXAMPLE_PLANET_ROUTE

style = {
    "font_family": "CarvingSoft",
    rx.heading: {
        "font_family": "Orbitron",
        "font_weight": "400"
    }
}

app = rx.App(
    stylesheets=[
        "https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap",
        "/fonts/myfont.css",
    ],
    style=style,
    theme=rx.theme(
        appearance="dark",
        has_background=False,
        radius="large",
        accent_color="indigo",
    ))

app.add_page(pages.index)
app.add_page(pages.learn)
app.add_page(pages.generate)
app.add_page(pages.explore)
app.add_page(pages.about)
app.add_page(pages.my_exoplanet)
app.add_page(pages.meet_an_exoplanet, title="Meet an Exoplanet")
app.add_page(pages.quiz_page, title="Generate Quiz", route=QUIZ_ROUTE)
app.add_page(pages.example_planets, route=EXAMPLES_ROUTE)
app.add_page(pages.example_planet, route=EXAMPLE_PLANET_ROUTE)

