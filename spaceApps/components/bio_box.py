import reflex as rx


def bio_box(team_member: dict[str, str]):
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
        rx.text(team_member["bio"]),
        padding="20px",
        border="1px solid #ccc",
        border_radius="10px",
        text_align="center",
    )
