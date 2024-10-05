import reflex as rx
from alembic.command import current

from ..state import State

ICONS = {
    "pl_eqt": {
        "min": ["thermometer-snowflake", 15],
        "max": ["thermometer-sun", 15]
    },
    "pl_rade": {
        "min": ["circle", 10],
        "max": ["circle", 20]
    },
    "pl_orbsmax": {
        "min": ["orbit", 10],
        "max": ["orbit", 20]
    },
    "pl_orbper": {
        "min": ["calendar-days", 10],
        "max": ["calendar-days", 20]
    }

}


def question_box(question: str, answers: list, type: str, meaning: str):

    return rx.cond(
        type == "mc",
        rx.vstack(
            rx.heading(question),
                rx.radio(answers,
                    default_value= State.selectedAnswers[State.curQuestionNum],
                    on_change=lambda answer: State.set_answers(answer),
                    ),
                margin="2%"
        ),
        rx.vstack(
            rx.heading(question),
            rx.flex(
                rx.box(
                    # rx.icon(ICONS[State.get_cur_meaning]["min"][0], size=ICONS[State.get_cur_meaning]["min"][1]),
                    rx.text(f'{State.get_question_min} {State.get_cur_unit}'),
                ),
                rx.box(
                    # rx.icon(ICONS[State.get_cur_meaning]["max"][0], size=ICONS[State.get_cur_meaning]["max"][1]),
                    rx.text(f'{State.get_question_max} {State.get_cur_unit}'),
                ),
                width="100%",
                justify="between"
            ),
            rx.slider(
                min=State.get_question_min,
                max=State.get_question_max,
                size="1",
                step=1,
                default_value=State.getSelectedAnswer,
                on_change=State.set_answers,
            ),
            margin="2%"
        ),

    )
