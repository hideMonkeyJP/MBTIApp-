import React from 'react';
import { RefreshCcw, Briefcase, BookOpen, Trophy } from 'lucide-react';

interface ResultProps {
  answers: Record<string, string>;
  onRestart: () => void;
}

const typeDescriptions: Record<string, {
  title: string;
  description: string;
  careers: string[];
  strengths: string[];
}> = {
  'INTJ': {
    title: '建築家',
    description: '戦略的思考と革新的なアイデアを持つ完璧主義者',
    careers: ['システムアーキテクト', '戦略コンサルタント', '投資アナリスト', '研究者'],
    strengths: ['長期的な視野', '問題解決能力', '独創的思考', '効率重視']
  },
  'INTP': {
    title: '論理学者',
    description: '革新的なアイデアと論理的な分析を組み合わせる思想家',
    careers: ['データサイエンティスト', 'ソフトウェアエンジニア', '研究者', '数学者'],
    strengths: ['論理的思考', '問題解決能力', '創造性', '適応力']
  },
  'ENTJ': {
    title: '指揮官',
    description: 'カリスマ的なリーダーシップと戦略的思考の持ち主',
    careers: ['経営者', 'プロジェクトマネージャー', '経営コンサルタント', '起業家'],
    strengths: ['リーダーシップ', '決断力', '戦略的思考', '目標達成力']
  },
  'ENTP': {
    title: '討論者',
    description: '革新的なアイデアを生み出し、議論を楽しむ発明家',
    careers: ['起業家', 'マーケター', '製品開発者', 'コンサルタント'],
    strengths: ['創造性', '適応力', 'コミュニケーション力', '分析力']
  }
};

function Result({ answers, onRestart }: ResultProps) {
  const getPersonalityType = () => {
    const types = {
      E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
    };
    
    Object.values(answers).forEach(answer => {
      if (answer in types) {
        types[answer as keyof typeof types]++;
      }
    });

    return [
      types.E > types.I ? 'E' : 'I',
      types.S > types.N ? 'S' : 'N',
      types.T > types.F ? 'T' : 'F',
      types.J > types.P ? 'J' : 'P'
    ].join('');
  };

  const personalityType = getPersonalityType();
  
  const defaultType = {
    title: 'パーソナリティタイプ',
    description: 'あなたの独自の特性を活かしたキャリアパスを見つけましょう',
    careers: ['分析が必要な職種', 'クリエイティブな職種', 'リーダーシップが活かせる職種'],
    strengths: ['独自の視点', '深い思考', '創造性', '決断力']
  };

  const typeInfo = typeDescriptions[personalityType] || defaultType;

  return (
    <div className="max-w-4xl mx-auto rounded-2xl shadow-lg p-8 backdrop-blur-sm bg-white/10 animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-fade-in">
          あなたのタイプは...
        </h2>
        <div className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg text-2xl font-bold animate-float">
          {personalityType} - {typeInfo.title}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <section className="space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-xl font-semibold flex items-center text-gray-800">
            <BookOpen className="w-6 h-6 mr-2 text-indigo-600 animate-float" />
            特徴
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {typeInfo.description}
          </p>
        </section>

        <section className="space-y-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-xl font-semibold flex items-center text-gray-800">
            <Trophy className="w-6 h-6 mr-2 text-indigo-600 animate-float" />
            強み
          </h3>
          <ul className="grid grid-cols-2 gap-2">
            {typeInfo.strengths.map((strength, index) => (
              <li 
                key={index} 
                className="flex items-center text-gray-600 animate-fade-in"
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
              >
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2 animate-pulse"></span>
                {strength}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mb-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <h3 className="text-xl font-semibold flex items-center text-gray-800 mb-6">
          <Briefcase className="w-6 h-6 mr-2 text-indigo-600 animate-float" />
          おすすめの職種
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {typeInfo.careers.map((career, index) => (
            <div 
              key={index} 
              className="backdrop-blur-sm bg-white/10 p-4 rounded-lg text-center animate-fade-in hover:scale-105 transition-transform"
              style={{ animationDelay: `${1.4 + index * 0.2}s` }}
            >
              <p className="text-gray-700">{career}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center animate-fade-in" style={{ animationDelay: '2s' }}>
        <button
          onClick={onRestart}
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all hover:scale-105"
        >
          <RefreshCcw className="w-5 h-5 mr-2 animate-rotate" />
          もう一度診断する
        </button>
      </div>
    </div>
  );
}

export default Result;