import React, { useEffect, useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import './QuadraticEquationQuiz.css';
import { Activity } from '../../types/activity';
import { addActivity } from '../../utils/ActivityStorage';

interface Question {
    id: number;
    question: string;
    number: string;
    instruction: string;
    options: string[];
    answer: string;
}

const questions: Question[] = [
    {
        id: 1,
        instruction: 'A. Transform to a better form!',
        question: 'Identify the correct transformation of Quadratic Equation into the General form. Choose the letter of the correct answer.',
        number: '1. 2x<sup>2</sup> – x = 1',
        options: [
            'A. 2x<sup>2</sup> – x + 1 = 1 + 1 → 2x<sup>2</sup> – x + 1 = 0',
            'B. 2x<sup>2</sup> – x – 1 = 1 – 1 → 2x<sup>2</sup> – x – 1 = 0'
        ],
        answer: 'B. 2x<sup>2</sup> – x – 1 = 1 – 1 → 2x<sup>2</sup> – x – 1 = 0'
    },
    {
        id: 2,
        instruction: 'A. Transform to a better form!',
        question: 'Identify the correct transformation of Quadratic Equation into the General form. Choose the letter of the correct answer.',
        number: '2. x<sup>2</sup> + 5 = -7x',
        options: ['A. x<sup>2</sup>+5+7 = -7x+7 → x<sup>2</sup>+7+5 = 0', 'B. x<sup>2</sup>+5+7x = -7x+7x → x<sup>2</sup>+7x+5 = 0'],
        answer: 'A. x<sup>2</sup>+5+7 = -7x+7 → x<sup>2</sup>+7+5 = 0'
    },
    {
        id: 3,
        instruction: 'A. Transform to a better form!',
        question: 'Identify the correct transformation of Quadratic Equation into the General form. Choose the letter of the correct answer.',
        number: '3. -8x + 8 = -2x<sup>2</sup>',
        options: ['A. -8x+8+2x<sup>2</sup> = -2x<sup>2</sup>+2 → 2x<sup>2</sup>–8x+8 = 0', 'B. 2x<sup>2</sup>–x–1 = 1–1 → 2x<sup>2</sup>–x–1 = 0'],
        answer: 'A. -8x+8+2x<sup>2</sup> = -2x<sup>2</sup>+2 → 2x<sup>2</sup>–8x+8 = 0'
    },
    {
        id: 4,
        instruction: 'A. Transform to a better form!',
        question: 'Identify the correct transformation of Quadratic Equation into the General form. Choose the letter of the correct answer. ',
        number: '4. -x<sup>2</sup> – 4x = 5',
        options: ['A. -x<sup>2</sup>–4x–5 = 5–5 → -x<sup>2</sup>–4x–5 = 0', 'B. -x<sup>2</sup>–4x+5 = 5+5  → -x<sup>2</sup>–4x+5 = 0'],
        answer: 'B. -x<sup>2</sup>–4x+5 = 5+5  → -x<sup>2</sup>–4x+5 = 0'
    },
    {
        id: 5,
        instruction: 'A. Transform to a better form!',
        question: 'Identify the correct transformation of Quadratic Equation into the General form. Choose the letter of the correct answer.',
        number: '5. 5x2 + 3x = 6x – 1',
        options: ['A. 5x<sup>2</sup>+3x+6x–1=6x–1+6x–1 → 5x<sup>2</sup>+9x–1 = 0', 'B.  5x<sup>2</sup>+3x–6x+1=6x–1 – 6x+1 → 5x<sup>2</sup>–3x+1 = 0'],
        answer: 'A. 5x<sup>2</sup>+3x+6x–1=6x–1+6x–1 → 5x<sup>2</sup>+9x–1 = 0'
    },
    {
        id: 6,
        instruction: 'B. Know your value!',
        question: 'Identify the values of a, b and c of the Quadratic Equation. Choose the letter of the correct answer.',
        number: '1. 2x<sup>2</sup> – x – 1 = 0',
        options: ['A. a = 2, b = -1, c = -1', 'B. a = 2, b = 1, c = 1'],
        answer: 'B. a = 2, b = 1, c = 1'
    },
    {
        id: 7,
        instruction: 'B. Know your value!',
        question: 'Identify the values of a, b and c of the Quadratic Equation. Choose the letter of the correct answer.',
        number: '2. x<sup>2</sup> + 7x + 5 = 0',
        options: ['A. a = 0, b = 7, c = 5', 'B. a = 1, b = 7, c = 5'],
        answer: 'A. a = 0, b = 7, c = 5'
    },
    {
        id: 8,
        instruction: 'B. Know your value!',
        question: 'Identify the values of a, b and c of the Quadratic Equation. Choose the letter of the correct answer.',
        number: '3. 2x<sup>2</sup> + 8x + 8 = 0',
        options: ['A. a = 2, b = -8, c = 8', 'B. a = 2, b = 8, c = 8'],
        answer: 'B. a = 2, b = 8, c = 8'
    },
    {
        id: 9,
        instruction: 'B. Know your value!',
        question: 'Identify the values of a, b and c of the Quadratic Equation. Choose the letter of the correct answer.',
        number: '4. -x<sup>2</sup> – 4x – 5 = 0',
        options: ['A. a = -0, b = -4, c = -5', 'B. a = -1, b = -4, c = -5'],
        answer: 'B. a = -1, b = -4, c = -5'
    },
    {
        id: 10,
        instruction: 'B. Know your value!',
        question: 'Identify the values of a, b and c of the Quadratic Equation. Choose the letter of the correct answer.',
        number: '5. 5x2 – 3x + 1 = 0',
        options: ['A. a = 5, b = 3, c = 1', 'B. a = 5, b = 3, c = 1'],
        answer: 'A. a = 5, b = 3, c = 1'
    },
    {
        id: 11,
        instruction: 'C. Write whats right!',
        question: 'Evaluate the Discriminant (D = 𝑏<sup>2</sup> − 4𝑎𝑐) of the Quadratic Equation. Choose the letter of the correct answer.',
        number: '1. 2x<sup>2</sup> – x – 1 = 0 where <br /> a = 2, b = -1, c = -1',
        options: [
            'A.<br /> D = b<sup>2</sup> - 4ac<br />D = (-1)<sup>2</sup> - 4(2)(-1)<br />D = 1 - (-8)<br />D = 1 + 8<br />D = 9',
            'B.<br /> D = b<sup>2</sup> - 4ac<br />D = 2<sup>2</sup> - 4(-1)(-1)<br />D = 4 - 4<br />D = 0'
        ],
        answer: 'A.<br /> D = b<sup>2</sup> - 4ac<br />D = (-1)<sup>2</sup> - 4(2)(-1)<br />D = 1 - (-8)<br />D = 1 + 8<br />D = 9'
    },
    {
        id: 12,
        instruction: 'C. Write whats right!',
        question: 'Identify the values of a, b and c of the Quadratic Equation. Choose the letter of the correct answer.',
        number: '2. x<sup>2</sup> + 7x + 5 = 0 <br /> a = 1, b = 7, c = 5',
        options: [
            'A.<br /> D= b2-4ac <br /> D= 1 2-4(7)(5) <br /> D= 1-140 <br /> D= -139',
            'B.<br /> D= b2-4ac <br /> D= 7 2-4(1)(5)  <br /> D= 49-20 <br /> D= 29'
        ],
        answer: 'A.<br /> D= b2-4ac <br /> D= 1 2-4(7)(5) <br /> D= 1-140 <br /> D= -139'
    },
    {
        id: 13,
        instruction: 'C. Write whats right!',
        question: 'Identify the values of a, b and c of the Quadratic Equation. Choose the letter of the correct answer.',
        number: '3. 2x<sup>2</sup> – 8x + 8 = 0 <br /> a = 2, b = -8, c = 8',
        options: [
            'A.<br /> D= b2-4ac <br /> D= 8 2-4(2)(8) <br /> D= 16-64 <br /> D= -48',
            'B.<br /> D= b2-4ac <br /> D= (-8)2-4(2)(8)  <br /> D= 64-64 <br /> D= 0'
        ],
        answer: 'B.<br /> D= b2-4ac <br /> D= (-8)2-4(2)(8)  <br /> D= 64-64 <br /> D= 0'
    }


];

const Quiz: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''));
    const [feedback, setFeedback] = useState<string | null>(null);
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0); // Track score here

    const handleAnswerClick = (option: string) => {
        const question = questions[currentQuestionIndex];
        const isCorrect = option === question.answer;

        // Update the answer array
        setAnswers(prevAnswers => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentQuestionIndex] = option;
            return newAnswers;
        });

        // Handle feedback and score
        if (isCorrect) {
            setScore(prevScore => prevScore + 1); // Increment score
            setFeedback('Correct answer!');
        } else {
            setFeedback('Wrong answer!');
        }

        // Move to the next question or show results if finished
        if (currentQuestionIndex < questions.length - 1) {
            setTimeout(() => {
                setFeedback(null);
                setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            }, 1000);
        } else {
            setTimeout(() => {
                setFeedback(null);
                setShowResults(true);
            }, 1000);
            const quizTitle = "Characterizing the roots of a Quadratic Equation using the Discriminant. (M9AL-Ic-1)";
            const newActivity: Activity = {
                id: Date.now(),
                type: 'Quiz Taken',
                title: quizTitle,
                timestamp: new Date().toISOString(),
            };
            addActivity(newActivity);
        }
    };

    // Use useEffect to trigger the saveScore only when showResults is true
    useEffect(() => {
        if (showResults) {
            saveScore(score); // Pass the final score
        }
    }, [showResults, score]); // Dependency on showResults and score

    const saveScore = (finalScore: number) => {
        const quizTitle = "Characterizing the roots of a Quadratic Equation using the Discriminant. (M9AL-Ic-1)"; // Example quiz title
        const existingScores = JSON.parse(localStorage.getItem('quizScores') || '[]');

        const newScore = {
            title: quizTitle,
            score: finalScore,
            maxScore: questions.length,
            answers: questions.map((q, index) => ({
                question: q.question,
                userAnswer: answers[index],   // Capture the user's selected answer
                correctAnswer: q.answer       // Capture the correct answer
            }))
        };

        const newScores = [...existingScores, newScore];
        localStorage.setItem('quizScores', JSON.stringify(newScores));
        console.log(`Saved score object:`, newScore);
    };

    const handleRetakeQuiz = () => {
        setCurrentQuestionIndex(0);
        setAnswers(Array(questions.length).fill(''));
        setFeedback(null);
        setShowResults(false);
        setScore(0); // Reset score
    };

    return (
        <div>
            <IonHeader>
                <IonToolbar className="custom-header-toolbar">
                    <img src="/assets/img/header.png" alt="Fun Learning" className="header-image" />
                </IonToolbar>
            </IonHeader>

            {!showResults ? (
                questions.map((q, index) => (
                    <div key={q.id} style={{ marginBottom: '20px' }}>
                        {currentQuestionIndex === index && (
                            <IonCard>
                                <IonCardHeader className="text-title">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        {/* Circle with the number */}
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '40px',
                                                height: '50px',
                                                borderRadius: '50%',
                                                backgroundColor: '#F3C623', // Yellow background
                                                color: '#000', // Black text
                                                fontWeight: 'bold',
                                                fontSize: '16px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            1.
                                        </div>
                                        {/* Text next to the circle */}
                                        <IonCardTitle className="text-title">
                                            Characterizing the roots of a Quadratic Equation using the Discriminant
                                        </IonCardTitle>
                                    </div>
                                </IonCardHeader>

                                <IonCardHeader>
                                    <div className="instruction-container">
                                        <IonCardTitle className="instruction-text">
                                            <strong>Exercises:</strong>
                                        </IonCardTitle>
                                    </div>
                                </IonCardHeader>
                                <IonCardHeader>
                                    <div className="instruction-container">
                                        <IonCardTitle className="instruction-text">
                                            <strong>l. Let's do this together!</strong>
                                        </IonCardTitle>
                                    </div>
                                </IonCardHeader>

                                <IonCardHeader>
                                    <div className="instruction-container">
                                        <IonCardTitle
                                            className="instruction-text"
                                            dangerouslySetInnerHTML={{ __html: q.instruction }}
                                        />
                                    </div>
                                </IonCardHeader>
                                <IonCardHeader>
                                    <IonCardTitle
                                        className="question-text"
                                        dangerouslySetInnerHTML={{ __html: q.question }} />
                                </IonCardHeader>
                                <IonCardHeader className="number-card">
                                    <IonCardTitle
                                        className="number-title"
                                        dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex].number }}
                                    />
                                </IonCardHeader>
                                <IonCardContent>
                                    {questions[currentQuestionIndex].options.map(option => (
                                        <IonButton
                                            key={option}
                                             className="select-button"
                                            expand="full"
                                            onClick={() => handleAnswerClick(option)}
                                        >
                                            <span dangerouslySetInnerHTML={{ __html: option }} className="small-bold-text" />
                                        </IonButton>
                                    ))}
                                </IonCardContent>

                            </IonCard>
                        )}
                    </div>
                ))
            ) : (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh', // Use minHeight to ensure it fills the viewport height
                    padding: '20px', // Add some padding for smaller screens
                    boxSizing: 'border-box' // Ensures padding doesn't affect overall width/height
                }}>
                    <h2>Quiz Completed</h2>
                    <p>Your score: {score} / {questions.length}</p>
                    {questions.map((q, index) => (
                        <IonCard key={q.id} className="quiz-card">
                            <IonCardHeader>
                                <IonCardTitle dangerouslySetInnerHTML={{ __html: q.question }} className="small-text" />
                            </IonCardHeader>
                            <IonCardContent className="card-content">
                                {/* Display User's Answer */}
                                <p>Your Answer:</p>
                                <span
                                    className="small-plain-text"
                                    style={{ color: answers[index] === q.answer ? 'green' : 'red' }}
                                    dangerouslySetInnerHTML={{ __html: answers[index] || 'No answer' }} // Using dangerouslySetInnerHTML here
                                />
                                {/* Display Correct Answer */}
                                <p>Correct Answer:</p>
                                <span
                                    className="small-plain-text"
                                    dangerouslySetInnerHTML={{ __html: q.answer }} // Using dangerouslySetInnerHTML for correct answer
                                />
                            </IonCardContent>
                        </IonCard>
                    ))}
                    <IonButton expand="full" onClick={handleRetakeQuiz}>
                        Retake Quiz
                    </IonButton>
                </div>
            )}

            {feedback && (
                <div style={{
                    position: 'fixed',
                    bottom: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '5px',
                    zIndex: 1000
                }}>
                    {feedback}
                </div>
            )}
        </div>
    );
};

export default Quiz;
