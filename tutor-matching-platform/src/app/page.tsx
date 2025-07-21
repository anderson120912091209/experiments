import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 圓角漸層背景 */}
      <div 
        className="mx-4 md:mx-8 lg:mx-12 mt-8 rounded-3xl relative overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, #92b7d4, #c3d9e7)'
        }}
      >
        {/* 背景裝飾層 */}
        <div className="absolute inset-x-0 top-16 bottom-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-white/15 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-white/8 rounded-full blur-3xl"></div>
        </div>

        {/* 頁面頭部 */}
        <header className="relative z-10">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-black text-white tracking-wide
                hover:text-white/90 transition-all duration-200 rounded-lg px-3 font-bold
                py-1 hover:bg-white/10" style={{fontFamily: 'Poppins, sans-serif'}}>
                嗨補 HiBu 家教網
              </Link>
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/students" className="text-white/80 hover:text-white font-medium transition-colors">瀏覽學生</Link>
                <Link href="/register" className="text-white/80 hover:text-white font-medium transition-colors">如何運作</Link>
                <button className="text-white/80 hover:text-white font-medium transition-colors">價格方案</button>
                
                {/* 登入下拉選單 */}
                <div className="relative group">
                  <button className="text-white/80 hover:text-white font-medium transition-colors flex items-center space-x-1">
                    <span>登入</span>
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <Link href="/login/parent" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                        <div className="font-medium">家長登入</div>
                        <div className="text-sm text-gray-500">管理孩子的學習</div>
                      </Link>
                      <Link href="/login/teacher" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                        <div className="font-medium">老師登入</div>
                        <div className="text-sm text-gray-500">查看學生需求</div>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* 註冊下拉選單 */}
                <div className="relative group">
                  <button className="bg-white text-blue-600 px-6 py-2.5 rounded-full font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg flex items-center space-x-1">
                    <span>註冊</span>
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <Link href="/register" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                        <div className="font-medium">學生/家長註冊</div>
                        <div className="text-sm text-gray-500">發布學習需求</div>
                      </Link>
                      <Link href="/register/teacher" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                        <div className="font-medium">老師註冊</div>
                        <div className="text-sm text-gray-500">開始接學生</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>

        {/* 主要標題與描述 */}
        <section className="pt-16 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              全新的家教媒合模式
            </h1>
            
            <div className="space-y-4 mb-12 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            
            </div>

            {/* 主要CTA區域 */}
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-20">
              {/* 學生/家長卡片 */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-8 text-center max-w-sm">
                <div className="text-3xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-xl font-bold text-white mb-3">我是家長/學生</h3>
                <p className="text-white/80 mb-6 text-sm">發布學習需求，讓優質老師主動聯繫您</p>
                <Link
                  href="/register"
                  className="block bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200 shadow-xl"
                >
                  免費發布需求
                </Link>
                <Link
                  href="/students"
                  className="block mt-3 text-white/80 hover:text-white text-sm transition-colors"
                >
                  查看範例需求 →
                </Link>
              </div>

              {/* 老師卡片 */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-8 text-center max-w-sm">
                <div className="text-3xl mb-4">👨‍🏫</div>
                <h3 className="text-xl font-bold text-white mb-3">我是老師</h3>
                <p className="text-white/80 mb-6 text-sm">瀏覽學生需求，主動出擊找到適合的學生</p>
                <Link
                  href="/register/teacher"
                  className="block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-200 shadow-xl"
                >
                  免費加入老師
                </Link>
                <Link
                  href="/students"
                  className="block mt-3 text-white/80 hover:text-white text-sm transition-colors"
                >
                  瀏覽學生需求 →
                </Link>
              </div>
            </div>

            {/* 示例卡片展示 */}
            <div className="relative max-w-4xl mx-auto">
              {/* 之前卡片 */}
              <div className="absolute left-0 top-8 transform -rotate-6 z-20">
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/50 w-80">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <span className="text-gray-600 font-medium">傳統方式</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded-full"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-4/5"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-3/5"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-4/5"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-2/3"></div>
                    <div className="text-gray-400 text-sm mt-4">
                      無止境地瀏覽老師資料...
                    </div>
                  </div>
                </div>
              </div>

              {/* 之後卡片 */}
              <div className="absolute right-0 top-0 transform rotate-3 z-30">
                <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 w-80">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">我們的方式</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        👨‍🏫
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">找到數學老師了！</div>
                        <div className="text-sm text-gray-600">完美匹配小明的需求</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-3">
                      <p className="text-gray-700 text-sm">
                        "我專精微積分教學，很樂意幫助您達成數學目標！"
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">數學</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">可預約</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 卡片間距 */}
              <div className="h-96"></div>
            </div>
          </div>
        </section>
      </div>

      {/* 以下所有內容都在白色背景上 */}
      <div className="bg-white">
        {/* 運作方式區塊 */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">運作方式</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                三個簡單步驟，找到您的完美家教
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">建立學習檔案</h3>
                <p className="text-gray-600 leading-relaxed">
                  在簡單的表單中分享您的學習目標、科目、預算和時間安排。
                </p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">老師主動聯繫</h3>
                <p className="text-gray-600 leading-relaxed">
                  合格的老師瀏覽學生檔案，選擇符合自己專長的學生。
                </p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">開始學習</h3>
                <p className="text-gray-600 leading-relaxed">
                  與匹配的老師聯繫，開始個人化的學習課程。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 數據統計 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">活躍學生</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">200+</div>
                <div className="text-gray-600">專業老師</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
                <div className="text-gray-600">配對成功率</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">4.9</div>
                <div className="text-gray-600">平均評分</div>
              </div>
            </div>
          </div>
        </section>

        {/* 優勢介紹 */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  反轉搜尋方式，
                  <br />
                  完美配對結果。
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">更高品質的配對</h3>
                      <p className="text-gray-600">老師選擇他們真正想教的學生，創造更好的學習體驗。</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">節省搜尋時間</h3>
                      <p className="text-gray-600">不再需要無止境地瀏覽老師檔案和比較資歷。</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">更快的結果</h3>
                      <p className="text-gray-600">建立檔案後24小時內就能與合格的老師聯繫。</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative z-10">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                        👨‍🎓
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">小明, 高二</div>
                        <div className="text-sm text-gray-600">數學、物理 • $800/小時</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        "希望在升大學前加強微積分基礎。我是個認真的學生，重視耐心、清晰的解釋。"
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">數學</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">物理</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">晚上</span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg">
                      我有興趣教學
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 行動呼籲 */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              準備找到您的完美家教了嗎？
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              加入數千名透過我們的反向配對系統找到理想學習夥伴的學生。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                建立您的檔案
              </Link>
              <Link
                href="/students"
                className="bg-white border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-200"
              >
                我是老師
              </Link>
            </div>
          </div>
        </section>

        {/* 頁面底部 */}
        <footer className="border-t border-gray-200 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <span className="text-xl font-semibold text-gray-900">家教配對</span>
                <p className="text-gray-600 mt-1">反向家教媒合，創造更好的學習成果。</p>
              </div>
              <div className="flex space-x-8">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">隱私權</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">服務條款</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">客服支援</a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
              <p>&copy; 2024 家教配對. 版權所有.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
