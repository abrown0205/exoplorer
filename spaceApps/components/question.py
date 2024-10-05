import reflex as rx
from ..state import State

def question_box(question: str, answers: list, type: str):
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
                rx.slider(
                    min=State.getMin,
                    max=State.getMax,
                    size="1",
                    step = 5,
                    default_value=State.getSelectedAnswer,
                    on_change=State.set_answers,
                ),
                margin="2%"
        ),

    )
