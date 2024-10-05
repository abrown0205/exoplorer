import reflex as rx

from . import question_box
from ..state import State

def quiz():
    return (
        question_box(State.get_next_question, State.get_next_answers, State.get_next_type),
        rx.flex(
            rx.button("Back",
                      disabled=State.curQuestionNum <= 0,
                      on_click=State.decrement_question_number),
            rx.text(State.selectedAnswers[State.curQuestionNum]),
            rx.cond(State.curQuestionNum < State.max_question_num,
                    rx.button("Next",
                              on_click=State.increment_question_number,
                              disabled= ~State.selectedAnswers.contains(State.curQuestionNum),
                              ),
                    rx.button("Submit",
                              on_click=State.handle_submit,
                              disabled= ~State.selectedAnswers.contains(State.curQuestionNum),
                              )
                    ),
            justify="between"
        )
    )
