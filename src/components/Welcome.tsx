import React from 'react';
import { BookOpen, BrainCircuit, Briefcase, GraduationCap } from 'lucide-react';

interface WelcomeProps {
  onStart: () => void;
}

function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="text-center space-y-8 py-12">
      <div className="space-y-4">
        <div className="relative inline-block animate-float">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text animate-gradient-x">
            キャリア最適化
          </h1>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-full animate-pulse"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          MBTI診断
        </h2>
      </div>
      
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        あなたの性格タイプに基づいて、最適なキャリアパスを発見しましょう
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12">
        <FeatureCard
          icon={<BrainCircuit className="w-8 h-8" />}
          title="性格分析"
          description="MBTIに基づく詳細な性格分析"
          delay={0.9}
        />
        <FeatureCard
          icon={<Briefcase className="w-8 h-8" />}
          title="キャリアマッチング"
          description="最適な職種の提案"
          delay={1.2}
        />
        <FeatureCard
          icon={<BookOpen className="w-8 h-8" />}
          title="詳細な解説"
          description="性格タイプの特徴と長所"
          delay={1.5}
        />
        <FeatureCard
          icon={<GraduationCap className="w-8 h-8" />}
          title="成長アドバイス"
          description="キャリア開発のヒント"
          delay={1.8}
        />
      </div>

      <button
        onClick={onStart}
        className="mt-12 px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold shadow-lg hover:bg-indigo-700 transition-all hover:scale-105 animate-fade-in"
        style={{ animationDelay: '2.1s' }}
      >
        診断を開始する
      </button>

      <p className="text-sm text-gray-500 mt-6 animate-fade-in" style={{ animationDelay: '2.4s' }}>
        所要時間: 約5分 | 質問数: {4}問
      </p>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <div 
      className="p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 backdrop-blur-sm bg-white/10 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-indigo-600 mb-4 animate-float">{icon}</div>
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default Welcome;