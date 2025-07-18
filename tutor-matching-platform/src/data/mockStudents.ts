import { Student } from '@/types/student';

export const mockStudents: Student[] = [
  {
    id: '1',
    name: '小明',
    grade: '國中二年級',
    subjects: ['數學', '英文'],
    budget: 800,
    availableTime: ['平日晚上', '週六下午'],
    mode: 'both',
    location: '台北市大安區',
    introduction: '希望能加強數學基礎，對英文會話也很有興趣。學習態度認真，希望能找到有耐心的老師！',
    avatar: '👨‍🎓'
  },
  {
    id: '2',
    name: '小華',
    grade: '高中一年級',
    subjects: ['物理', '化學'],
    budget: 1000,
    availableTime: ['週末全天', '平日晚上'],
    mode: 'offline',
    location: '新北市板橋區',
    introduction: '理科成績需要提升，特別是實驗原理的理解。希望老師能用生動的方式解釋複雜概念。',
    avatar: '👩‍🎓'
  },
  {
    id: '3',
    name: '小美',
    grade: '國中三年級',
    subjects: ['國文', '歷史'],
    budget: 600,
    availableTime: ['週六上午', '週日下午'],
    mode: 'online',
    location: '台中市西區',
    introduction: '準備會考中，需要加強國文閱讀理解和歷史時間軸整理。喜歡互動式學習。',
    avatar: '👧'
  },
  {
    id: '4',
    name: '小傑',
    grade: '高中二年級',
    subjects: ['數學', '物理'],
    budget: 1200,
    availableTime: ['平日晚上', '週日上午'],
    mode: 'both',
    location: '高雄市前鎮區',
    introduction: '對理工科很有興趣，但基礎需要加強。希望老師能幫助我建立完整的知識體系。',
    avatar: '👦'
  },
  {
    id: '5',
    name: '小琪',
    grade: '國中一年級',
    subjects: ['英文', '數學'],
    budget: 700,
    availableTime: ['週間下課後', '週六全天'],
    mode: 'offline',
    location: '桃園市中壢區',
    introduction: '剛升國中，希望能在新環境中保持好成績。個性活潑，喜歡有趣的學習方式。',
    avatar: '👧'
  },
  {
    id: '6',
    name: '小宇',
    grade: '高中三年級',
    subjects: ['英文', '社會'],
    budget: 1500,
    availableTime: ['週末', '平日晚上'],
    mode: 'online',
    location: '台南市東區',
    introduction: '準備學測中，需要針對弱科進行密集複習。希望老師能提供考試技巧和重點整理。',
    avatar: '👨‍🎓'
  }
];

// 用於過濾的選項
export const filterOptions = {
  grades: ['國中一年級', '國中二年級', '國中三年級', '高中一年級', '高中二年級', '高中三年級'],
  subjects: ['數學', '英文', '國文', '物理', '化學', '歷史', '地理', '生物', '社會'],
  modes: [
    { value: 'online', label: '線上' },
    { value: 'offline', label: '實體' },
    { value: 'both', label: '不限' }
  ],
  budgetRanges: [
    { min: 0, max: 500, label: '$500以下' },
    { min: 500, max: 800, label: '$500-$800' },
    { min: 800, max: 1000, label: '$800-$1000' },
    { min: 1000, max: 1500, label: '$1000-$1500' },
    { min: 1500, max: 999999, label: '$1500以上' }
  ]
}; 