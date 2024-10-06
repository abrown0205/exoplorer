import reflex as rx

from spaceApps.components import base_page, quiz


def quiz_page():
    return base_page(
        rx.box(
            rx.video(
                url="https://github.com/user-attachments/assets/8a413b5d-ce7a-4a18-a2de-b151f4407f9c",
                playing=True,
                loop=True,
                controls=False,
                muted=True,
                width="120vw",
                height="120vh",
                object_fit="cover",
                position="fixed",
                top="-10vh",
                left="-10vw",
                z_index="-1",
            ),
            rx.box(
                background="rgba(0, 0, 0, 0.7)",
                position="fixed",
                top="0",
                left="20%",
                width="60vw",
                height="40vh",
                z_index="-1",  # Place overlay above video
            ),
            rx.container(
                quiz(),
            ),

            display="flex",
            flex_direction="column",
            justify_content="center",
            align_items="center",
            width="100%",
            height="100%",
            margin="0 auto",
        )

    )