import React, { useEffect, useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonToast } from '@ionic/react';
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
        number: '5. 5x<sup>2</sup> + 3x = 6x – 1',
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
        number: '1. 2x<sup>2</sup> – x – 1 = 0 <br /> a = 2, b = -1, c = -1',
        options: [
            'A.<br /> D = b<sup>2</sup> - 4ac<br />D = (-1)<sup>2</sup> - 4(2)(-1)<br />D = 1 - (-8)<br />D = 1 + 8<br />D = 9',
            'B.<br /> D = b<sup>2</sup> - 4ac<br />D = 2<sup>2</sup> - 4(-1)(-1)<br />D = 4 - 4<br />D = 0'
        ],
        answer: 'A.<br /> D = b<sup>2</sup> - 4ac<br />D = (-1)<sup>2</sup> - 4(2)(-1)<br />D = 1 - (-8)<br />D = 1 + 8<br />D = 9'
    },
    {
        id: 12,
        instruction: 'C. Write whats right!',
        question: 'Evaluate the Discriminant (D = 𝑏<sup>2</sup> − 4𝑎𝑐) of the Quadratic Equation. Choose the letter of the correct answer.',
        number: '2. x<sup>2</sup> + 7x + 5 = 0 <br /> a = 1, b = 7, c = 5',
        options: [
            'A.<br /> D= b<sup>2</sup>-4ac <br /> D= 1 2-4(7)(5) <br /> D= 1-140 <br /> D= -139',
            'B.<br /> D= b<sup>2</sup>-4ac <br /> D= 7<sup>2</sup>-4(1)(5)  <br /> D= 49-20 <br /> D= 29'
        ],
        answer: 'A.<br /> D= b<sup>2</sup>-4ac <br /> D= 1 2-4(7)(5) <br /> D= 1-140 <br /> D= -139'
    },
    {
        id: 13,
        instruction: 'C. Write whats right!',
        question: 'Evaluate the Discriminant (D = 𝑏<sup>2</sup> − 4𝑎𝑐) of the Quadratic Equation. Choose the letter of the correct answer.',
        number: '3. 2x<sup>2</sup> – 8x + 8 = 0 <br /> a = 2, b = -8, c = 8',
        options: [
            'A.<br /> D= b<sup>2</sup>-4ac <br /> D= 8<sup>2</sup>-4(2)(8) <br /> D= 16-64 <br /> D= -48',
            'B.<br /> D= b<sup>2</sup>-4ac <br /> D= (-8)<sup>2</sup>-4(2)(8)  <br /> D= 64-64 <br /> D= 0'
        ],
        answer: 'B.<br /> D= b<sup>2</sup>-4ac <br /> D= (-8)<sup>2</sup>-4(2)(8)  <br /> D= 64-64 <br /> D= 0'
    },
    {
        id: 14,
        instruction: 'C. Write whats right!',
        question: 'Evaluate the Discriminant (D = 𝑏<sup>2</sup> − 4𝑎𝑐) of the Quadratic Equation. Choose the letter of the correct answer.',
        number: '4. -x<sup>2</sup> – 4x - 5 = 0 <br /> a = -1, b = -4, c = -5',
        options: [
            'A.<br /> D= b<sup>2</sup>-4ac <br /> D= (-1)<sup>2</sup>-4(-4)(-5) <br /> D= 1-80 <br /> D= -79',
            'B.<br /> D= b<sup>2</sup>-4ac <br /> D= (-4)<sup>2</sup>-4(-4)(-5)  <br /> D= 16-20 <br /> D= -4'
        ],
        answer: 'B.<br /> D= b<sup>2</sup>-4ac <br /> D= (-4)<sup>2</sup>-4(-4)(-5)  <br /> D= 16-20 <br /> D= -4'
    },
    {
        id: 15,
        instruction: 'C. Write whats right!',
        question: 'Evaluate the Discriminant (D = 𝑏<sup>2</sup> − 4𝑎𝑐) of the Quadratic Equation. Choose the letter of the correct answer.',
        number: '5. 5x<sup>2</sup> – 3x + 1 = 0 <br /> a = 5, b = -3, c = 1',
        options: [
            'A.<br /> D= b<sup>2</sup>-4ac <br /> D= (-3)<sup>2</sup>-4(5)(0) <br /> D= 9-0 <br /> D= 9',
            'B.<br /> D= b<sup>2</sup>-4ac <br /> D= (-3)<sup>2</sup>-4(5)(1)  <br /> D= 9-20 <br /> D= -11'
        ],
        answer: 'B.<br /> D= b<sup>2</sup>-4ac <br /> D= (-3)<sup>2</sup>-4(5)(1)  <br /> D= 9-20 <br /> D= -11'
    },
    {
        id: 16,
        instruction: 'D. Ensure your nature!',
        question: 'Characterize the roots of the Quadratic Equation using its discriminant. Choose the letter of the correct answer.',
        number: '1. 2x<sup>2</sup> – x - 1 = 0 ; D = 9',
        options: [
            'A.<br /> Since D = 9, then  <br /> D < 0, <br /> therefore, the roots are Imaginary/Complex',
            'B.<br /> Since D = 9, then  <br /> D < 0, <br /> therefore, the roots are Real and Equal',
            'C.<br /> Since D = 9, then  <br /> D < 0, <br /> therefore, the roots are Rational and Unequal',
            'D.<br /> Since D = 9, then  <br /> D < 0, <br /> therefore, the roots are Irrational and Unequal',

        ],
        answer: 'C.<br /> Since D = 9, then  <br /> D < 0, <br /> therefore, the roots are Rational and Unequal',
    },
    {
        id: 17,
        instruction: 'D. Ensure your nature!',
        question: 'Characterize the roots of the Quadratic Equation using its discriminant. Choose the letter of the correct answer.',
        number: '2. x<sup>2</sup> + 7x + 5 = 0 ; D = 29',
        options: [
            'A.<br /> Since D = 29, then  <br /> D < 0, <br /> therefore, the roots are Imaginary/Complex',
            'B.<br /> Since D = 29, then  <br /> D = 0, <br /> therefore, the roots are Real and Equal',
            'C.<br /> Since D = 29, <br /> D > 0 and is <br /> a perfect square, <br /> therefore, the roots are Rational and Unequal',
            'D.<br /> Since D = 29, <br /> D > 0 and is <br /> Not a perfect square, <br /> therefore, the roots are Irrational and Unequal',

        ],
        answer: 'D.<br /> Since D = 29, <br /> D > 0 and is, <br /> Not a perfect square, <br /> therefore, the roots are Irrational and Unequal',
    },
    {
        id: 18,
        instruction: 'D. Ensure your nature!',
        question: 'Characterize the roots of the Quadratic Equation using its discriminant. Choose the letter of the correct answer.',
        number: '3. 2x<sup>2</sup> - 8x + 8 = 0 ; D = 0',
        options: [
            'A.<br /> Since D = 0, then  <br /> D > 0, <br /> therefore, the roots are Imaginary/Complex',
            'B.<br /> Since D = 0, then  <br /> D = 0, <br /> therefore, the roots are Real and Equal',
            'C.<br /> Since D = 0, <br /> D > 0 and is <br /> a perfect square, <br /> therefore, the roots are Rational and Unequal',
            'D.<br /> Since D = 0, <br /> D > 0 and is <br /> Not a perfect square, <br /> therefore, the roots are Irrational and Unequal',

        ],
        answer: 'B.<br /> Since D = 0, then  <br /> D = 0, <br /> therefore, the roots are Real and Equal',
    },
    {
        id: 19,
        instruction: 'D. Ensure your nature!',
        question: 'Characterize the roots of the Quadratic Equation using its discriminant. Choose the letter of the correct answer.',
        number: '4. -x<sup>2</sup> - 4x + -5 = 0 ; D = -4',
        options: [
            'A.<br /> Since D = -4, then  <br /> D < 0, <br /> therefore, the roots are Imaginary/Complex',
            'B.<br /> Since D = -4, then  <br /> D = 0, <br /> therefore, the roots are Real and Equal',
            'C.<br /> Since D = -4, <br /> D > 0 and is <br /> a perfect square, <br /> therefore, the roots are Rational and Unequal',
            'D.<br /> Since D = -4, <br /> D > 0 and is <br /> Not a perfect square, <br /> therefore, the roots are Irrational and Unequal',

        ],
        answer: 'A.<br /> Since D = -4, then  <br /> D < 0, <br /> therefore, the roots are Imaginary/Complex',
    },
    {
        id: 20,
        instruction: 'D. Ensure your nature!',
        question: 'Characterize the roots of the Quadratic Equation using its discriminant. Choose the letter of the correct answer.',
        number: '5. 5x<sup>2</sup> - 4x + 1 = 0 ; D = -11',
        options: [
            'A.<br /> Since D = -4, then  <br /> D < 0, <br /> therefore, the roots are Imaginary/Complex',
            'B.<br /> Since D = -4, then  <br /> D = 0, <br /> therefore, the roots are Real and Equal',
            'C.<br /> Since D = -4, <br /> D > 0 and is <br /> a perfect square, <br /> therefore, the roots are Rational and Unequal',
            'D.<br /> Since D = -4, <br /> D > 0 and is <br /> Not a perfect square, <br /> therefore, the roots are Irrational and Unequal',

        ],
        answer: 'A.<br /> Since D = -4, then  <br /> D < 0, <br /> therefore, the roots are Imaginary/Complex',
    },
    {
        id: 21,
        instruction: 'II. You are smart independent!',
        question: 'Characterize the roots of the Quadratic Equation using its discriminant. Type in the value of the discriminant and select the letter that best describes the nature of the roots. Input your answer for the discriminant and choose the letter of its correct characteristic.​',
        number: '1. 4x<sup>2</sup> + x - 1 , D = ______',
        options: [
            'A.<br /> Since D = -4, then  <br /> D < 0, <br /> therefore, the roots are Imaginary/Complex',
            'B.<br /> Since D = -4, then  <br /> D = 0, <br /> therefore, the roots are Real and Equal',
            'C.<br /> Since D = -4, <br /> D > 0 and is <br /> a perfect square, <br /> therefore, the roots are Rational and Unequal',
            'D.<br /> Since D = -4, <br /> D > 0 and is <br /> Not a perfect square, <br /> therefore, the roots are Irrational and Unequal',

        ],
        answer: 'A.<br /> Since D = -4, then  <br /> D < 0, <br /> therefore, the roots are Imaginary/Complex',
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

        setAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentQuestionIndex] = option;
            return newAnswers;
        });

        if (isCorrect) {
            setScore((prevScore) => prevScore + 1);
            setFeedback('Correct answer!');
        } else {
            setFeedback('Wrong answer!');
        }

        setTimeout(() => {
            setFeedback(null); // Clear feedback after toast duration
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            } else {
                setShowResults(true);
                addActivity({
                    id: Date.now(),
                    type: 'Quiz Taken',
                    title: 'Characterizing the roots of a Quadratic Equation',
                    timestamp: new Date().toISOString(),
                });
            }
        }, 1000);
    };

    // Use useEffect to trigger the saveScore only when showResults is true
    useEffect(() => {
        if (showResults) {
            saveScore(score);
        }
    }, [showResults, score]);

    const saveScore = (finalScore: number) => {
        const existingScores = JSON.parse(localStorage.getItem('quizScores') || '[]');
        const newScore = {
            title: 'Characterizing the roots of a Quadratic Equation',
            score: finalScore,
            maxScore: questions.length,
            answers: questions.map((q, index) => ({
                question: q.question,
                userAnswer: answers[index],
                correctAnswer: q.answer,
            })),
        };

        localStorage.setItem('quizScores', JSON.stringify([...existingScores, newScore]));
    };

    const handleRetakeQuiz = () => {
        setCurrentQuestionIndex(0);
        setAnswers(Array(questions.length).fill(''));
        setFeedback(null);
        setShowResults(false);
        setScore(0); // Reset score
    };

    return (
        <div className="whole-body">
            <IonHeader>
                <IonToolbar className="custom-header-toolbar">
                    <img src="/assets/img/header.png" alt="Fun Learning" className="header-image" />
                </IonToolbar>
            </IonHeader>

            {!showResults ? (
                questions.map((q, index) => (
                    <div key={q.id}>
                        {currentQuestionIndex === index && (
                            <IonCard className="body-card">
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
                                            backgroundColor: '#F3C623',
                                            color: '#000',
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
                                        style={{ fontStyle: 'italic' }}
                                        dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex].instruction }}
                                    />
                                </div>
                            </IonCardHeader>
                            <IonCardHeader>
                                <IonCardTitle
                                    className="question-text"
                                    dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex].question }}
                                />
                            </IonCardHeader>
                            <IonCardHeader className="number-card">
                                <IonCardTitle
                                    className="number-title"
                                    dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex].number }}
                                />
                            </IonCardHeader>
                            <IonCardContent>
                                {questions[currentQuestionIndex].options.map((option) => (
                                    <IonButton
                                        key={option}
                                        className="select-button"
                                        expand="full"
                                        style={{ marginBottom: '20px' }}
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
                    <div style={{ paddingBottom: '40px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <IonButton
                            expand="block" // Adjust button alignment
                            onClick={handleRetakeQuiz}
                            style={{ marginTop: '20px', marginBottom: '20px', maxWidth: '300px' }} // Ensure proper spacing
                        >
                            Retake Quiz
                        </IonButton>
                    </div>

                </div>
            )}

            <IonToast
                isOpen={!!feedback}
                onDidDismiss={() => setFeedback(null)}
                message={feedback}
                duration={1000}
                position="bottom"
                color={feedback === 'Correct answer!' ? 'success' : 'danger'}
            />
        </div>
    );
};

export default Quiz;
