'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FormData {
  subject: string;
  budget: number;
  budgetType: 'hourly' | 'fixed';
  availability: string[];
  learningGoals: string;
  experience: string;
  name: string;
  age: string;
  contact: string;
}

export default function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    subject: '',
    budget: 800,
    budgetType: 'hourly',
    availability: [],
    learningGoals: '',
    experience: '',
    name: '',
    age: '',
    contact: ''
  });

  const totalSteps = 6;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (key: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const toggleAvailability = (time: string) => {
    setFormData(prev => ({
      ...prev,
      availability: prev.availability.includes(time)
        ? prev.availability.filter(t => t !== time)
        : [...prev.availability, time]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
      <div className="max-w-2xl w-full mx-4">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>步驟 {currentStep} / {totalSteps}</span>
            <span>{Math.round((currentStep / totalSteps) * 100)}% 完成</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          {currentStep === 1 && (
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">您想學習什麼科目？</h1>
              <p className="text-gray-600 mb-8">這幫助我們為您匹配合適的老師。</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {['數學', '物理', '化學', '英文', '中文', '歷史', '生物', '程式設計', '其他'].map((subject) => (
                  <button
                    key={subject}
                    onClick={() => updateFormData('subject', subject)}
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      formData.subject === subject
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">您的預算範圍是？</h1>
              <p className="text-gray-600 mb-8">這幫助我們優先顯示符合您預算的老師。</p>

              {/* Budget Type Selector */}
              <div className="flex justify-center mb-8">
                <div className="flex bg-gray-100 rounded-full p-1">
                  <button
                    onClick={() => updateFormData('budgetType', 'hourly')}
                    className={`px-6 py-2 rounded-full transition-all ${
                      formData.budgetType === 'hourly'
                        ? 'bg-white shadow-sm text-gray-900'
                        : 'text-gray-600'
                    }`}
                  >
                    時薪
                  </button>
                  <button
                    onClick={() => updateFormData('budgetType', 'fixed')}
                    className={`px-6 py-2 rounded-full transition-all ${
                      formData.budgetType === 'fixed'
                        ? 'bg-white shadow-sm text-gray-900'
                        : 'text-gray-600'
                    }`}
                  >
                    固定價格
                  </button>
                </div>
              </div>

              {/* Budget Slider */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>經濟實惠</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    ${formData.budget}/{formData.budgetType === 'hourly' ? '小時' : '課程'}
                  </span>
                  <span>專家級</span>
                </div>
                
                <div className="relative">
                  <input
                    type="range"
                    min="300"
                    max="2000"
                    step="50"
                    value={formData.budget}
                    onChange={(e) => updateFormData('budget', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>$300</span>
                    <span>$1150</span>
                    <span>$2000</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">您偏好的上課時間？</h1>
              <p className="text-gray-600 mb-8">選擇所有適合您的時段（可複選）。</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {['週一上午', '週一下午', '週一晚上', '週二上午', '週二下午', '週二晚上', 
                  '週三上午', '週三下午', '週三晚上', '週四上午', '週四下午', '週四晚上',
                  '週五上午', '週五下午', '週五晚上', '週末上午', '週末下午', '週末晚上'].map((time) => (
                  <button
                    key={time}
                    onClick={() => toggleAvailability(time)}
                    className={`p-3 rounded-2xl border-2 transition-all text-sm ${
                      formData.availability.includes(time)
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">您的學習目標是什麼？</h1>
              <p className="text-gray-600 mb-8">讓老師更了解如何幫助您。</p>
              
              <textarea
                value={formData.learningGoals}
                onChange={(e) => updateFormData('learningGoals', e.target.value)}
                placeholder="例如：我希望在三個月內提升數學成績，特別是微積分部分..."
                className="w-full h-32 p-4 border border-gray-300 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}

          {currentStep === 5 && (
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">您目前的程度如何？</h1>
              <p className="text-gray-600 mb-8">幫助老師了解您的起點。</p>
              
              <div className="grid gap-4 mb-8">
                {['完全新手', '基礎程度', '中等程度', '進階程度', '需要特定領域加強'].map((level) => (
                  <button
                    key={level}
                    onClick={() => updateFormData('experience', level)}
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      formData.experience === level
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 6 && (
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">最後一步！</h1>
              <p className="text-gray-600 mb-8">填寫您的基本資料以完成註冊。</p>
              
              <div className="space-y-4 text-left">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">年齡</label>
                  <input
                    type="text"
                    value={formData.age}
                    onChange={(e) => updateFormData('age', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="例如：高二、大一、25歲"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">聯絡方式</label>
                  <input
                    type="text"
                    value={formData.contact}
                    onChange={(e) => updateFormData('contact', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="電話或 Email"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              上一步
            </button>

            {currentStep < totalSteps ? (
              <button
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && !formData.subject) ||
                  (currentStep === 3 && formData.availability.length === 0) ||
                  (currentStep === 4 && !formData.learningGoals.trim()) ||
                  (currentStep === 5 && !formData.experience) ||
                  (currentStep === 6 && (!formData.name || !formData.contact))
                }
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  (currentStep === 1 && !formData.subject) ||
                  (currentStep === 3 && formData.availability.length === 0) ||
                  (currentStep === 4 && !formData.learningGoals.trim()) ||
                  (currentStep === 5 && !formData.experience) ||
                  (currentStep === 6 && (!formData.name || !formData.contact))
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                }`}
              >
                下一步
              </button>
            ) : (
              <Link
                href="/students"
                className="px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all shadow-lg"
              >
                完成註冊
              </Link>
            )}
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
            ← 返回首頁
          </Link>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
} 