import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface QuestionsProps {
  onComplete: (answers: Record<string, string>) => void;
}

const questions = [
  {
    id: 'q1',
    text: '新しいプロジェクトを始める時、あなたは...',
    options: [
      { value: 'E', text: '周りの人と相談しながら進める' },
      { value: 'I', text: '一人で計画を立てて進める' }
    ]
  },
  {
    id: 'q2',
    text: '問題解決において、あなたは...',
    options: [
      { value: 'S', text: '具体的な事実や経験を重視する' },
      { value: 'N', text: '直感や可能性を重視する' }
    ]
  },
  {
    id: 'q3',
    text: '決断を下す際、あなたは...',
    options: [
      { value: 'T', text: '論理的な分析を重視する' },
      { value: 'F', text: '人々への影響を考慮する' }
    ]
  },
  {
    id: 'q4',
    text: '仕事の進め方として...',
    options: [
      { value: 'J', text: '計画的に段階を踏んで進める' },
      { value: 'P', text: '状況に応じて柔軟に対応する' }
    ]
  }
];

function Questions({ onComplete }: QuestionsProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswer = (value: string) => {
    const newAnswers = {
      ...answers,
      [questions[currentQuestion].id]: value
    };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto rounded-2xl shadow-lg p-8 backdrop-blur-sm bg-white/10">
      <div className="mb-8">
        <div className="h-2 w-full bg-gray-200/30 rounded-full">
          <div
            className="h-2 bg-indigo-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-right text-sm text-gray-600 mt-2">
          {currentQuestion + 1} / {questions.length}
        </p>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          {questions[currentQuestion].text}
        </h2>

        <div className="space-y-4">
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className="w-full p-4 text-left border-2 border-gray-200/30 rounded-lg hover:border-indigo-600 transition-colors backdrop-blur-sm bg-white/10"
            >
              {option.text}
            </button>
          ))}
        </div>

        <div className="flex justify-between pt-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`flex items-center ${currentQuestion === 0 ? 'text-gray-400' : 'text-gray-600 hover:text-indigo-600'}`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            前の質問
          </button>
          <div className="text-gray-400">
            ※回答は後で変更することもできます
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;