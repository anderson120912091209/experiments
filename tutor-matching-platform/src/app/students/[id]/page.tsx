'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { mockStudents } from '@/data/mockStudents';
import ContactModal from '@/components/ContactModal';

export default function StudentDetailPage() {
  const params = useParams();
  const studentId = params.id as string;
  const [showContactModal, setShowContactModal] = useState(false);
  
  const student = mockStudents.find(s => s.id === studentId);

  if (!student) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">找不到該學習者</h1>
          <Link href="/students" className="text-indigo-600 hover:text-indigo-500">
            返回學生列表
          </Link>
        </div>
      </div>
    );
  }

  const getModeLabel = (mode: string) => {
    switch (mode) {
      case 'online': return '線上';
      case 'offline': return '實體';
      case 'both': return '不限';
      default: return mode;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-green-600">TutorMatch</Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/students" className="text-green-600 font-medium">瀏覽學生</Link>
              <Link href="/register" className="text-gray-600 hover:text-gray-900 font-medium">建立檔案</Link>
              <button className="text-gray-600 hover:text-gray-900 font-medium">登入</button>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                註冊
              </button>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 返回按鈕 */}
        <div className="mb-6">
          <Link 
            href="/students" 
            className="inline-flex items-center text-green-600 hover:text-green-500"
          >
            ← 返回學生列表
          </Link>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* 學生基本資訊 */}
          <div className="px-8 py-6 bg-gradient-to-r from-green-500 to-blue-600 text-white">
            <div className="flex items-center">
              <div className="text-4xl mr-4">{student.avatar}</div>
              <div>
                <h1 className="text-3xl font-bold">{student.name}</h1>
                <p className="text-green-100 text-lg">{student.grade}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 主要資訊 */}
              <div className="lg:col-span-2 space-y-8">
                {/* 學習需求 */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">學習需求</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">需求科目</h3>
                      <div className="flex flex-wrap gap-2">
                        {student.subjects.map(subject => (
                                                  <span 
                          key={subject} 
                          className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                        >
                          {subject}
                        </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">每小時預算</h3>
                        <p className="text-2xl font-bold text-green-600">NT$ {student.budget}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">上課方式</h3>
                        <p className="text-lg text-gray-900">{getModeLabel(student.mode)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 時間安排 */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">時間安排</h2>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">可上課時間</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {student.availableTime.map(time => (
                        <div 
                          key={time}
                          className="px-3 py-2 bg-gray-100 text-gray-800 rounded-md text-sm text-center"
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 自我介紹 */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">關於我</h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {student.introduction}
                    </p>
                  </div>
                </div>
              </div>

              {/* 側邊欄 */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">基本資訊</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="block text-sm font-medium text-gray-600">年級</span>
                      <span className="text-gray-900">{student.grade}</span>
                    </div>
                    
                    <div>
                      <span className="block text-sm font-medium text-gray-600">所在地區</span>
                      <span className="text-gray-900">{student.location}</span>
                    </div>
                    
                    <div>
                      <span className="block text-sm font-medium text-gray-600">上課方式</span>
                      <span className="text-gray-900">{getModeLabel(student.mode)}</span>
                    </div>
                    
                    <div>
                      <span className="block text-sm font-medium text-gray-600">預算</span>
                      <span className="text-gray-900 font-semibold">NT$ {student.budget}/小時</span>
                    </div>
                  </div>

                  {/* 聯絡按鈕 */}
                  <div className="mt-8 space-y-3">
                    <button
                      onClick={() => setShowContactModal(true)}
                      className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 font-medium"
                    >
                      我有興趣教學
                    </button>
                    
                    <button 
                      onClick={() => {
                        navigator.share?.({
                          title: `${student.name}的學習需求`,
                          text: `查看${student.name}的學習需求：${student.subjects.join('、')}`,
                          url: window.location.href
                        }) || alert('已複製頁面連結');
                      }}
                      className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium"
                    >
                      分享給朋友
                    </button>
                  </div>

                  {/* 相關建議 */}
                  <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">💡 教學建議</h4>
                    <p className="text-sm text-blue-800">
                      根據學生需求，建議準備相關教材並了解學生的學習風格。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 相關學生推薦 */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">其他學習者</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockStudents
              .filter(s => s.id !== studentId)
              .slice(0, 3)
              .map(relatedStudent => (
                <Link 
                  key={relatedStudent.id}
                  href={`/students/${relatedStudent.id}`}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-center mb-3">
                    <div className="text-xl mr-3">{relatedStudent.avatar}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{relatedStudent.name}</h3>
                      <p className="text-sm text-gray-500">{relatedStudent.grade}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {relatedStudent.subjects.slice(0, 2).map(subject => (
                      <span key={subject} className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                        {subject}
                      </span>
                    ))}
                    {relatedStudent.subjects.length > 2 && (
                      <span className="text-xs text-gray-500">+{relatedStudent.subjects.length - 2}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">NT$ {relatedStudent.budget}/小時</p>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* 聯絡模態框 */}
      {showContactModal && (
        <ContactModal 
          student={student}
          onClose={() => setShowContactModal(false)} 
        />
      )}
    </div>
  );
} 