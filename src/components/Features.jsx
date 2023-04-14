import todo from "../assets/images/icon-todo.svg"
import calendar from "../assets/images/icon-calendar.svg"
import reminders from "../assets/images/icon-reminders.svg"
import planning from "../assets/images/icon-planning.svg"

const Features = () => {
  return (
    <ul className='features'>
      <li>
        <img
          src={todo}
          alt='todo-icon'
        />
        <span>Todo List</span>
      </li>
      <li>
        <img
          src={calendar}
          alt='calendar-icon'
        />
        <span>Calendar</span>
      </li>
      <li>
        <img
          src={reminders}
          alt='reminders-icon'
        />
        <span>Reminders</span>
      </li>
      <li>
        <img
          src={planning}
          alt='planning-icon'
        />
        <span>Planning</span>
      </li>
    </ul>
  )
}

export default Features
