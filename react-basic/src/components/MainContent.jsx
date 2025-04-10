import { ContactForm } from "./ContactForm";
import { Quiz } from "./Quiz";
import { Counter } from './Counter';

import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const chapters = [
    'Introduction to React',
    'Understanding Common JavaScript Syntax in React',
    'Setting Up the React Environment',
    'Understanding the Basics of JSX',
    'Understanding the Basics of Components',
    'Creating Functional Components',
    'Understanding How to Pass Data with Props',
    'Understanding How to Toggle Display with Conditional Rendering',
    'Understanding How to Display Lists',
    'Understanding the Basics of React Hooks',
    'Understanding How to Manage State with useState',
    'Understanding Event Handling',
    'Understanding Form Handling',
    'Understanding How to Manage Side Effects with useEffect',
    'Learning Efficient React Development with Generative AI',
    'Understanding How to Pass Data with useContext',
    'Understanding Styling in React',
    'Building a Simple Counter App in React',
    'Creating Test Cases with Generative AI',
];

// UUID for each chapter (generated once at startup)
const chapterKeys = chapters.map(() => crypto.randomUUID());

export function MainContent({ progress, setProgress }) {

    // get the theme and toggleTheme function from ThemeContext
    const { theme, toggleTheme } = useContext(ThemeContext);

    // function to handle progress increment
    const handleProgress = () => {
        if (progress < 100) {
            setProgress(progress + 5);
        }
    };

    return (
        <main className={theme === "dark" ? "dark" : "light"}>
            <section>
                <h2>About This Course</h2>
                <p>This course provides a hands-on approach to learning the fundamentals of React.</p>
                <p>You will gradually build a React application step by step in each chapter.</p>
                <p>By the end of this course, you will have a solid understanding of React basics.</p>
                <p>Click the button below to toggle between light and dark themes.</p>
                <button onClick={toggleTheme}>
                    Toggle Theme
                </button>
            </section>
            <section>
                <h2>Course Progress</h2>
                <p>Progress: {progress}%</p>
                <button onClick={handleProgress}>Complete a Lesson</button>
                {progress === 100 && <p>Congratulations! You have completed all the lessons.</p>}
                {progress >= 50 && progress < 100 && <p>Halfway there! Keep up the good work.</p>}
                {progress < 50 && <p>Keep going! Small steps lead to big results.</p>}
            </section>
            <section>
                <h2>Course Overview</h2>
                <ol style={{ textAlign: 'left' }}>
                    {chapters.map((chapterTitle, index) => (
                        <li key={chapterKeys[index]}>
                            {chapterTitle}
                        </li>
                    ))}
                </ol>
            </section>
            <ContactForm />
            <Quiz />
            <Counter />
        </main>
    );
}