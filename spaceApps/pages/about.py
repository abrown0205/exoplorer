import reflex as rx
from ..components.base_page import base_page
from ..components.bio_box import bio_box

TEAM_MEMBERS : list[dict[str, str]]= [
    {
        "name": "Alex Brown",
        "bio": "Alex's Bio",
        "linkedin": "https://www.linkedin.com/in/alexandra-brown-a6a549192",
        "picture_path": "../../headshots/alex_headshot.jpeg"
    }, {
        "name": "Jared Diaz",
        "bio": "Jared's Bio",
        "linkedin": "link",
        "picture_path": "../../headshots/jared_headshot.jpeg"
    }, {
        "name": "Srajan Dube",
        "bio": "Srajan's Bio",
        "linkedin": "link",
        "picture_path": "../../headshots/srajan_headshot.jpeg"
    }, {
        "name": "Uday Katravulapalli",
        "bio": "Uday's Bio",
        "linkedin": "link",
        "picture_path": "../../headshots/uday_headshot.jpeg"
    }, {
        "name": "Shawn Robertson",
        "bio": "Shawn's Bio",
        "linkedin": "link",
        "picture_path": "../../headshots/shawn_headshot.png"
    }, {
        "name": "Michael Scott",
        "bio": "Michael's Bio",
        "linkedin": "link",
        "picture_path": "../../headshots/michael_headshot.png"
    }
]

def about():
    return base_page(
        rx.container(
            rx.heading("About the Exo-plorer Team", size="8",
                       text_align="center",
                       margin_bottom="2%"),
            rx.text("Mission statement/general information"),
            rx.heading("Meet the Team!",
                       size="6",
                       text_align="center",
                       margin="2%",),
            rx.grid(
                *[bio_box(member) for member in TEAM_MEMBERS],
                grid_template_columns=[
                    "1fr",
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                    "repeat(3, 1fr)",
                ],
                spacing="7",
            )

        )



    )