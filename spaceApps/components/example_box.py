import reflex as rx
from ..state import ExampleState


def example_box(planet: dict[str, str]):
    return rx.box(
        rx.image(src=planet["picture_path"],
                 width="150px",
                 height="150px",
                 object_fit="cover",
                 margin="auto"),
            rx.heading(planet["name"], size="3"),
            rx.text("from the " + planet["franchise"] + " universe"),
            on_click=ExampleState.get_example_exoplanet(planet["name"]),
            justify="center",
            align="center",
            spacing="2",
            padding="5%",
            border = "1px solid #ccc",
            border_radius = "10px",
            text_align = "center",
    )

