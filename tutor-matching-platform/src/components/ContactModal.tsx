'use client';

import { useState } from 'react';
import { Student, ContactForm } from '@/types/student';

interface ContactModalProps {
  student: Student;
  onClose: () => void;
}

export default function ContactModal({ student, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<ContactForm>({
    tutorName: '',
    contact: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模擬提交過程
    setTimeout(() => {
      alert('聯絡訊息已送出！我們會將您的資訊轉達給學生。');
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              聯絡 {student.name}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          {/* Student Info */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3">{student.avatar}</span>
              <div>
                <h3 className="font-semibold text-gray-900">{student.name}</h3>
                <p className="text-sm text-gray-500">{student.grade}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1">
              {student.subjects.map(subject => (
                <span key={subject} className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                  {subject}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-2">預算：NT$ {student.budget}/小時</p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                您的姓名 *
              </label>
              <input
                type="text"
                required
                value={formData.tutorName}
                onChange={(e) => setFormData(prev => ({ ...prev, tutorName: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="請輸入您的姓名"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                聯絡方式 *
              </label>
              <input
                type="text"
                required
                value={formData.contact}
                onChange={(e) => setFormData(prev => ({ ...prev, contact: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="電話、Email 或 Line ID"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                留言訊息
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="請簡單介紹您的教學經驗、專長，以及教學方式..."
              />
            </div>

            {/* 提示訊息 */}
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">
                💡 <strong>小提示：</strong>詳細介紹您的教學經驗和方式，能讓學生更了解您的教學風格。
              </p>
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                取消
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '送出中...' : '送出聯絡'}
              </button>
            </div>
          </form>

          {/* 注意事項 */}
          <div className="mt-6 text-xs text-gray-500 space-y-1">
            <p>• 我們會將您的聯絡資訊轉達給學生</p>
            <p>• 學生會主動與您聯繫確認上課細節</p>
            <p>• 請確保聯絡方式正確以避免錯失機會</p>
          </div>
        </div>
      </div>
    </div>
  );
} 