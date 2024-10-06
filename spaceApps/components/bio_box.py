import reflex as rx


def bio_box(team_member: dict[str, str]) -> rx.Component:
    return rx.box(
        rx.image(src=team_member["picture_path"],
                 width="150px",
                 height="150px",
                 object_fit="cover",
                 margin="auto"),
        rx.hstack(
            rx.heading(team_member["name"], size="3"),
            rx.link(rx.icon("linkedin",
                            size=15,
                            stroke_width=1),
                    href=team_member["linkedin"],
                    is_external=True),
            justify="center",
            align="center",
            spacing="2",
            padding="5%"
        ),
        rx.text(team_member["bio"],
                text_align="center"),
        padding="20px",
        border="1px solid #ccc",
        border_radius="20px",
        text_align="center",
    )

def method_box(method: dict[str, str]) -> rx.Component:
    return rx.box(
        rx.video(url = method["picture_path"]),
        rx.vstack(
            rx.heading(method["Name"], size="7"),
            rx.text(method["Text"], style={"text-align": "justify"}),
            justify="center",
            spacing="2",
            padding="5%"
        ),
        padding="20px",
        border="1px solid #ccc",
        border_radius="20px",
        text_align="center",
    )

def definitions_box() -> rx.Component:
    return rx.accordion.root(
    rx.accordion.item(
        header=rx.text("Astrobiology", color="white"),
        content=rx.vstack(
            rx.text("The study of the potential for life in the universe, including the search for habitable conditions on exoplanets.", color="white"),
            rx.image("../../tidal_locking.webp", height="200px"),
            align="center",
        )
    ),
    rx.accordion.item(
        header=rx.text("Atmosphere", color="white"),
        content=rx.vstack(
            rx.text("The layer of gases surrounding a planet, which can influence climate, weather, and potential habitability.", color="white"),
            rx.image("../../atmosphere.jpg", height="150px"),
            align="center"
        )
    ),
    rx.accordion.item(
        header=rx.text("Atmospheric Composition:", color="white"),
        content=rx.vstack(
            rx.text("The gases present in an exoplanet’s atmosphere that can indicate potential habitability and climate.", color="white"),
            rx.image("../../atmospheric_composition.webp", width="150px"),
            align="center"
        )
    ),
    rx.accordion.item(
        header=rx.text("Biosignature", color="white"),
        content=rx.vstack(
            rx.text("A chemical or physical indicator that suggests the presence of life, such as specific gases in an exoplanet's atmosphere.", color="white"),
            rx.image("../../biosignature.png", width="150px"),
            align="center"
        )
    ),
    rx.accordion.item(
        header=rx.text("Eccentricity of Orbit", color="white"),
        content=rx.vstack(
            rx.text("The shape of an exoplanet's orbit can affect its climate and seasonal changes.", color="white"),
            rx.image("../../eccentricity.jpg", width="150px"),
            align="center"
        )
    ),
    rx.accordion.item(
        header=rx.text("Exoplanet", color="white"),
        content=rx.vstack(
            rx.text("A planet that orbits a star outside our solar system.", color="white"),
            rx.image("../../exoplanet.webp", width="150px"),
            align="center"
        )
    ),
    rx.accordion.item(
        header=rx.text("Gas Giant", color="white"),
        content=rx.vstack(
            rx.text("A large planet composed mostly of gases, with no definitive solid surface, such as Jupiter or Saturn.", color="white"),
            rx.image("../../gas_giant.jpg", width="150px"),
            align="center"
        )
    ),
    rx.accordion.item(
        header=rx.text("Habitable Zone", color="white"),
        content=rx.vstack(
            rx.text("The region around a star where conditions might allow liquid water to exist on a planet's surface.", color="white"),
            rx.image("../../habitable_zone.webp", width="150px"),
            align="center"
        )
    ),
    rx.accordion.item(
        header=rx.text("Hot Jupiter", color="white"),
        content=rx.vstack(
            rx.text("A class of exoplanets that are gas giants, orbiting very close to their host stars, resulting in high surface temperatures.", color="white"),
            rx.image("../../hot_jupiter.jpg", width="150px"),
            align="center"
        )
    ),
    rx.accordion.item(
        header=rx.text("Magnetic Field", color="white"),
        content=rx.vstack(
            rx.text("The presence of a magnetic field can protect a planet from stellar radiation and help maintain its atmosphere.", color="white"),
            rx.image("../../magnetic_field.jpg", width="150px"),
            align="center"
        )
    ),
    rx.accordion.item(
        header=rx.text("Orbital Distance", color="white"),
        content=rx.vstack(
            rx.text("The distance of an exoplanet from its host star, influencing its climate and atmospheric conditions.", color="white"),
            rx.image("../../orbital_period.png", width="150px"),
            align="center"
        )
    ),
    rx.accordion.item(
        header=rx.text("Rotation Period", color="white"),
        content=rx.vstack(
            rx.text("The time it takes for an exoplanet to complete one rotation on its axis, affecting its weather patterns and day-night cycle.", color="white"),
            rx.image("../../rotational_period.jpg", width="150px"),
            align="center"
        )
    ),
    rx.accordion.item(
        header=rx.text("Star Type", color="white"),
        content=rx.vstack(
            rx.text("The type of star an exoplanet orbits, which can determine the conditions for potential habitability.", color="white"),
            rx.image("../../star_type.png", width="150px"),
            align="center"
        )
    ),
    rx.accordion.item(
        header=rx.text("Super-Earth", color="white"),
        content=rx.vstack(
            rx.text("A type of exoplanet with a mass larger than Earth's but smaller than that of gas giants like Neptune.", color="white"),
            rx.image("../../super_earth.webp", width="150px"),
            align="center"
        )
    ),
    rx.accordion.item(
        header=rx.text("Tidal Locking", color="white"),
        content=rx.vstack(
            rx.text("Some exoplanets may be tidally locked, meaning one side always faces the star, creating extreme temperature differences.", color="white"),
            rx.image("../../tidal_locking.webp", width="250px"),
            align="center"
        )
    ),
    width="1200px",
    # align="center",
    collapsible=True,
    variant="outline"
)

def card_box(about: dict[str: str]) -> rx.Component:
    return rx.box(
            rx.vstack(
                rx.vstack(
                    rx.heading(about["title"], size = "8"),
                    rx.text(about["text"], style={"white-space": "pre-line", "text-align": "justify"}),
                ),
            rx.cond(
                about["image"] != "None",
                rx.image(src=about["image"],
                        width="70%",
                        height="auto",
                        object_fit="cover",
                        margin="auto"),
            ),
            padding="20px",
            border="1px solid #ccc",
            border_radius="10px",
        ),
        style={
            "position": "relative",  # Set position to absolute
            "left": "-135px",         # Shift right 50 pixels from the left
            "width": "1400px",        # Set a fixed width
            "border-radius": "5px"   # Rounded corners
        },
        min_width = "1300px",
        align="center"
    )
