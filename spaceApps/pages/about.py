import reflex as rx
from ..components.base_page import base_page
from ..components.bio_box import bio_box

TEAM_MEMBERS : list[dict[str, str]]= [
    {
        "name": "Alex Brown",
        "bio": "Alex is a Software Engineer at Code.org. She graduated with a bachelor’s degree in Computer Science from the University of Central Florida. ",
        "linkedin": "https://www.linkedin.com/in/alexandra-brown-a6a549192",
        "picture_path": "../../headshots/alex_headshot.jpeg"
    }, {
        "name": "Jared Diaz",
        "bio": "Jared is a Graduate Student at Duke University. He graduated from Stanford University with a bachelor's degree in Mechanical Engineering. In his time off, Jared enjoys traveling the world. ",
        "linkedin": "https://www.linkedin.com/in/jared-diaz-34b81616a/",
        "picture_path": "../../headshots/jared_headshot.jpg"
    }, {
        "name": "Srajan Dube",
        "bio": "Srajan is a Data and AI Technical Specialist at IBM. He graduated from the Georgia Institute of Technology with a bachelor’s & master’s in Computer Science. Srajan plays tennis recreationally outside of work. ",
        "linkedin": "https://www.linkedin.com/in/srajan-dube-913378170/",
        "picture_path": "../../headshots/srajan_headshot.jpg"
    }, {
        "name": "Uday Katravulapalli",
        "bio": "Uday is a Software Engineer at Aerodyne. He graduated from the University of Florida  with a bachelor’s degree in Mechanical Engineering. Uday loves taking hikes and being in nature.",
        "linkedin": "https://www.linkedin.com/in/uday-katravulapalli-50a9ab145/",
        "picture_path": "../../headshots/uday_headshot.jpg"
    }, {
        "name": "Shawn Robertson",
        "bio": "Shawn is a Process Engineer at Mitsubishi Power. He graduated from the University of Florida with a bachelor's degree in Chemical Engineering. Outside of work, Shawn loves to go fishing & kayaking.",
        "linkedin": "https://www.linkedin.com/in/shawn-robertson-chemical-engineering/",
        "picture_path": "../../headshots/shawn_headshot.jpg"
    }, {
        "name": "Michael Scott",
        "bio": "Michael is a Systems Engineer at Northrup Grumman. He graduated from the University of Central Florida with a bachelor's degree in Aerospace Engineering. In his free time, Michael enjoys editing videos & creating online content.",
        "linkedin": "https://www.linkedin.com/in/michael-y-scott/",
        "picture_path": "../../headshots/michael_headshot.png"
    }
]

def about():
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
                height="100vh",
                z_index="-1",  # Place overlay above video
            ),
            rx.container(

                rx.heading("About the Exo-plorer Team", size="8",
                           text_align="center",
                           margin_bottom="2%"),
                rx.text("The Exo-plorer team developed an interactive web app for students that teaches them about exoplanets by allowing them to create their own using AI. Students can customize features like planet size, orbit, terrain, and temperature, and then compare their creations to real exoplanets. Students can also explore a database of actual exoplanets discovered by astronomers. This addresses the challenge of making complex astronomical concepts engaging and accessible by transforming abstract ideas into hands-on activities. The app fosters curiosity and active learning, encouraging students to think critically about planetary science and the universe. By combining creativity with real-world data, it helps students connect classroom lessons with scientific discoveries, making astronomy more exciting and relevant to their lives.",
                        text_align="justify"),
                rx.heading("Meet the Team!",
                           size="6",
                           text_align="center",
                           margin="2%", ),
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
                ),

            ),

            display="flex",
            flex_direction="column",
            justify_content="center",
            align_items="center",
            width="80%",
            height="100%",
            margin="0 auto",
        )
    )