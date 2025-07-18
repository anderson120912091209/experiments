'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { mockStudents, filterOptions } from '@/data/mockStudents';
import { Student } from '@/types/student';
import ContactModal from '@/components/ContactModal';

export default function StudentsPage() {
  const [filters, setFilters] = useState({
    grade: '',
    subjects: [] as string[],
    mode: '',
    budgetRange: '',
    search: ''
  });
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const handleQuickContact = (student: Student) => {
    setSelectedStudent(student);
    setShowContactModal(true);
  };

  const handleSubjectFilter = (subject: string) => {
    setFilters(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const filteredStudents = useMemo(() => {
    return mockStudents.filter(student => {
      // 年級過濾
      if (filters.grade && student.grade !== filters.grade) return false;
      
      // 科目過濾
      if (filters.subjects.length > 0 && !filters.subjects.some(subject => student.subjects.includes(subject))) return false;
      
      // 上課方式過濾
      if (filters.mode && student.mode !== filters.mode && student.mode !== 'both') return false;
      
      // 預算過濾
      if (filters.budgetRange) {
        const range = filterOptions.budgetRanges.find(r => r.label === filters.budgetRange);
        if (range && (student.budget < range.min || student.budget > range.max)) return false;
      }
      
      // 搜尋過濾
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const searchMatch = 
          student.name.toLowerCase().includes(searchLower) ||
          student.location.toLowerCase().includes(searchLower) ||
          student.introduction.toLowerCase().includes(searchLower) ||
          student.subjects.some(subject => subject.toLowerCase().includes(searchLower));
        if (!searchMatch) return false;
      }
      
      return true;
    });
  }, [filters]);

  const clearFilters = () => {
    setFilters({
      grade: '',
      subjects: [],
      mode: '',
      budgetRange: '',
      search: ''
    });
  };

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 頁面標題 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">尋找學習者</h1>
          <p className="mt-2 text-lg text-gray-600">
            瀏覽學生的學習需求，選擇最適合您專長的學生
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* 過濾器側邊欄 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">篩選條件</h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-green-600 hover:text-green-500"
                >
                  清除全部
                </button>
              </div>

              {/* 搜尋 */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">搜尋</label>
                <input
                  type="text"
                  value={filters.search}
                  onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                  placeholder="姓名、地區、關鍵字..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* 年級 */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">年級</label>
                <select
                  value={filters.grade}
                  onChange={(e) => setFilters(prev => ({ ...prev, grade: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">全部年級</option>
                  {filterOptions.grades.map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>

              {/* 科目 */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">科目</label>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {filterOptions.subjects.map(subject => (
                    <label key={subject} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.subjects.includes(subject)}
                        onChange={() => handleSubjectFilter(subject)}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{subject}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 上課方式 */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">上課方式</label>
                <select
                  value={filters.mode}
                  onChange={(e) => setFilters(prev => ({ ...prev, mode: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">全部方式</option>
                  {filterOptions.modes.map(mode => (
                    <option key={mode.value} value={mode.value}>{mode.label}</option>
                  ))}
                </select>
              </div>

              {/* 預算範圍 */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">預算範圍</label>
                <select
                  value={filters.budgetRange}
                  onChange={(e) => setFilters(prev => ({ ...prev, budgetRange: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">全部預算</option>
                  {filterOptions.budgetRanges.map(range => (
                    <option key={range.label} value={range.label}>{range.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* 學生列表 */}
          <div className="lg:col-span-3 mt-8 lg:mt-0">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600">
                找到 <span className="font-semibold">{filteredStudents.length}</span> 位學習者
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredStudents.map(student => (
                <div key={student.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-2xl mr-3">{student.avatar}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
                        <p className="text-sm text-gray-500">{student.grade}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-700">需求科目：</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {student.subjects.map(subject => (
                            <span key={subject} className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-sm font-medium text-gray-700">預算：</span>
                        <span className="text-sm text-gray-600 ml-1">NT$ {student.budget}/小時</span>
                      </div>

                      <div>
                        <span className="text-sm font-medium text-gray-700">方式：</span>
                        <span className="text-sm text-gray-600 ml-1">{getModeLabel(student.mode)}</span>
                      </div>

                      <div>
                        <span className="text-sm font-medium text-gray-700">地區：</span>
                        <span className="text-sm text-gray-600 ml-1">{student.location}</span>
                      </div>

                      <div>
                        <span className="text-sm font-medium text-gray-700">時間：</span>
                        <span className="text-sm text-gray-600 ml-1">
                          {student.availableTime.slice(0, 2).join('、')}
                          {student.availableTime.length > 2 && '...'}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mt-4 line-clamp-3">
                      {student.introduction}
                    </p>

                    <div className="mt-6 flex space-x-3">
                      <Link
                        href={`/students/${student.id}`}
                        className="flex-1 bg-green-600 text-white text-center py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
                      >
                        查看詳情
                      </Link>
                      <button 
                        onClick={() => handleQuickContact(student)}
                        className="flex-1 border border-green-600 text-green-600 py-2 px-4 rounded-md hover:bg-green-50 transition-colors duration-200 text-sm font-medium"
                      >
                        快速聯絡
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredStudents.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">找不到符合條件的學習者</h3>
                <p className="text-gray-500">請嘗試調整篩選條件或清除部分過濾器</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-600 bg-green-100 hover:bg-green-200"
                >
                  清除所有篩選條件
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 聯絡模態框 */}
      {showContactModal && selectedStudent && (
        <ContactModal 
          student={selectedStudent}
          onClose={() => {
            setShowContactModal(false);
            setSelectedStudent(null);
          }} 
        />
      )}
    </div>
  );
} 