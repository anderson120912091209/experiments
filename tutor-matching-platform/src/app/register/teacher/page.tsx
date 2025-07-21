'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TeacherRegister() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // 基本資料
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    
    // 教學資格
    education: '',
    university: '',
    major: '',
    graduationYear: '',
    teachingExperience: '',
    
    // 教學科目
    subjects: [] as string[],
    grades: [] as string[],
    
    // 教學偏好
    teachingStyle: '',
    preferredSchedule: [] as string[],
    location: '',
    onlineTeaching: false,
    homeVisit: false,
    
    // 收費
    hourlyRate: '',
    rateType: 'hourly', // hourly or fixed
    
    // 自我介紹
    introduction: '',
    specialties: '',
    achievements: '',
    
    // 證件驗證
    idNumber: '',
    verificationDocuments: [] as File[]
  });

  const totalSteps = 6;

  const subjects = [
    '數學', '物理', '化學', '生物', '英文', '國文', 
    '歷史', '地理', '公民', '程式設計', '音樂', '美術'
  ];

  const grades = [
    '國小一年級', '國小二年級', '國小三年級', '國小四年級', '國小五年級', '國小六年級',
    '國中一年級', '國中二年級', '國中三年級',
    '高中一年級', '高中二年級', '高中三年級',
    '大學生', '成人進修'
  ];

  const timeSlots = [
    '週一早上', '週一下午', '週一晚上',
    '週二早上', '週二下午', '週二晚上',
    '週三早上', '週三下午', '週三晚上',
    '週四早上', '週四下午', '週四晚上',
    '週五早上', '週五下午', '週五晚上',
    '週六早上', '週六下午', '週六晚上',
    '週日早上', '週日下午', '週日晚上'
  ];

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubjectToggle = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const handleGradeToggle = (grade: string) => {
    setFormData(prev => ({
      ...prev,
      grades: prev.grades.includes(grade)
        ? prev.grades.filter(g => g !== grade)
        : [...prev.grades, grade]
    }));
  };

  const handleScheduleToggle = (time: string) => {
    setFormData(prev => ({
      ...prev,
      preferredSchedule: prev.preferredSchedule.includes(time)
        ? prev.preferredSchedule.filter(t => t !== time)
        : [...prev.preferredSchedule, time]
    }));
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">基本資料</h2>
              <p className="text-gray-600">請填寫您的基本個人資訊</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">姓名 *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="請輸入真實姓名"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">電子郵件 *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">手機號碼 *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="09xxxxxxxx"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">年齡</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="25"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">性別</label>
                <div className="flex space-x-4">
                  {['男', '女', '不願透露'].map((gender) => (
                    <label key={gender} className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value={gender}
                        checked={formData.gender === gender}
                        onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value }))}
                        className="mr-2"
                      />
                      {gender}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">教學資格</h2>
              <p className="text-gray-600">請提供您的學歷和教學經驗</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">最高學歷 *</label>
                <select
                  value={formData.education}
                  onChange={(e) => setFormData(prev => ({ ...prev, education: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">請選擇學歷</option>
                  <option value="高中">高中職</option>
                  <option value="大學">大學</option>
                  <option value="碩士">碩士</option>
                  <option value="博士">博士</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">畢業學校</label>
                  <input
                    type="text"
                    value={formData.university}
                    onChange={(e) => setFormData(prev => ({ ...prev, university: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="例：國立台灣大學"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">主修科系</label>
                  <input
                    type="text"
                    value={formData.major}
                    onChange={(e) => setFormData(prev => ({ ...prev, major: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="例：數學系"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">教學經驗 *</label>
                <select
                  value={formData.teachingExperience}
                  onChange={(e) => setFormData(prev => ({ ...prev, teachingExperience: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">請選擇教學經驗</option>
                  <option value="無經驗">無經驗但有教學熱忱</option>
                  <option value="1年以下">1年以下</option>
                  <option value="1-3年">1-3年</option>
                  <option value="3-5年">3-5年</option>
                  <option value="5年以上">5年以上</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">教學科目</h2>
              <p className="text-gray-600">選擇您擅長教學的科目和年級</p>
            </div>
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">教學科目 * (可多選)</label>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {subjects.map((subject) => (
                    <button
                      key={subject}
                      type="button"
                      onClick={() => handleSubjectToggle(subject)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        formData.subjects.includes(subject)
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">教學年級 * (可多選)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {grades.map((grade) => (
                    <button
                      key={grade}
                      type="button"
                      onClick={() => handleGradeToggle(grade)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        formData.grades.includes(grade)
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {grade}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">教學偏好</h2>
              <p className="text-gray-600">設定您的教學方式和時間偏好</p>
            </div>
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">可教學時間 * (可多選)</label>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => handleScheduleToggle(time)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        formData.preferredSchedule.includes(time)
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">教學地區</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="例：台北市大安區"
                />
              </div>
              
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">教學方式</label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.onlineTeaching}
                      onChange={(e) => setFormData(prev => ({ ...prev, onlineTeaching: e.target.checked }))}
                      className="mr-3"
                    />
                    線上教學 (視訊授課)
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.homeVisit}
                      onChange={(e) => setFormData(prev => ({ ...prev, homeVisit: e.target.checked }))}
                      className="mr-3"
                    />
                    到府教學
                  </label>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">收費設定</h2>
              <p className="text-gray-600">設定您的教學收費</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">收費方式</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="rateType"
                      value="hourly"
                      checked={formData.rateType === 'hourly'}
                      onChange={(e) => setFormData(prev => ({ ...prev, rateType: e.target.value }))}
                      className="mr-2"
                    />
                    時薪計費
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="rateType"
                      value="fixed"
                      checked={formData.rateType === 'fixed'}
                      onChange={(e) => setFormData(prev => ({ ...prev, rateType: e.target.value }))}
                      className="mr-2"
                    />
                    固定價格
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {formData.rateType === 'hourly' ? '時薪 (NT$)' : '每次課程費用 (NT$)'}
                </label>
                <input
                  type="number"
                  value={formData.hourlyRate}
                  onChange={(e) => setFormData(prev => ({ ...prev, hourlyRate: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={formData.rateType === 'hourly' ? '800' : '1600'}
                />
                <p className="text-sm text-gray-500 mt-2">
                  {formData.rateType === 'hourly' ? '建議時薪範圍：NT$500-2000' : '建議單次課程費用：NT$1000-4000'}
                </p>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">自我介紹</h2>
              <p className="text-gray-600">讓家長更了解您的教學理念和特色</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">自我介紹 *</label>
                <textarea
                  value={formData.introduction}
                  onChange={(e) => setFormData(prev => ({ ...prev, introduction: e.target.value }))}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="請介紹您的教學經驗、教學風格、為什麼選擇家教等..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">教學特色</label>
                <textarea
                  value={formData.specialties}
                  onChange={(e) => setFormData(prev => ({ ...prev, specialties: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="例：擅長引導學生思考、客製化教材、考試技巧指導等..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">教學成果或相關證照</label>
                <textarea
                  value={formData.achievements}
                  onChange={(e) => setFormData(prev => ({ ...prev, achievements: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="例：學生成績提升、檢定證照、得獎經歷等..."
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900" style={{fontFamily: 'Poppins, sans-serif'}}>
              嗨補 HiBu 家教網
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              返回首頁
            </Link>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-900">老師註冊進度</span>
            <span className="text-sm text-gray-500">{step} / {totalSteps}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${(step / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          {renderStepContent()}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={handlePrev}
              disabled={step === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                step === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              上一步
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i + 1 === step
                      ? 'bg-blue-600'
                      : i + 1 < step
                      ? 'bg-blue-300'
                      : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            
            {step === totalSteps ? (
              <button
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all"
                onClick={() => {
                  // Handle form submission
                  alert('註冊完成！我們會盡快審核您的資料。');
                }}
              >
                完成註冊
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all"
              >
                下一步
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 