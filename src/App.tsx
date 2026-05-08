/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, Github, Youtube, User, Video, GraduationCap, ArrowRight, ExternalLink, Box } from "lucide-react";

const NAV_ITEMS = [
  { name: "首頁", href: "#home" },
  { name: "個人自介", href: "#bio" },
  { name: "影音專區", href: "#works" },
  { name: "AI作品", href: "#ai-model" },
  { name: "旅行規劃", href: "#travel" },
  { name: "聯絡交流", href: "#contact" },
];

const AI_MODEL = {
  title: "AI 3D 角色建模",
  subtitle: "Tripo3D 衍生创作",
  description: "這是我利用 Tripo3D 技術生成的數位小人模型。展現了從文字/影像描述轉化成精細三維構建的過程，是 AI 在數位孿生與角色設計領域的高效應用。",
  link: "https://studio.tripo3d.ai/3d-model/608c9c9d-5a4d-435f-933c-9cd27e0494e5?invite_code=03ER8L",
  image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=800&h=800"
};

const TRAVEL_PROJECTS = [
  {
    title: "2026 清明連假：台南 x 高雄深度遊",
    location: "台南、高雄雙城",
    duration: "4天3夜",
    budget: "$20,139 TWD",
    description: "這是一份針對清明連假設計的高效率旅遊提案。完美平衡了府城的歷史古蹟、絕美自然生態、現代藝文洗禮以及港都的新地標探索。",
    image: "https://media.istockphoto.com/id/1485656152/photo/night-view-of-the-hayashi-department-store-in-tainan-taiwan.jpg?s=1024x1024&w=is&k=20&c=bA6p2rkc8-BPdtE6lKhxJ3",
    itinerary: [
      {
        day: "Day 1",
        title: "府城古蹟與藥膳之夜",
        date: "4/3 (FRI)",
        image: "https://media.istockphoto.com/id/1485656152/photo/night-view-of-the-hayashi-department-store-in-tainan-taiwan.jpg?s=1024x1024&w=is&k=20&c=bA6p2rkc8-BPdtE6lKhxJ3",
        events: [
          { time: "10:30", activity: "高鐵抵達台南", detail: "從台北搭乘高鐵南下，揭開旅程序幕。" },
          { time: "12:30", activity: "花庭午餐", detail: "享用高品質中式料理，洗去舟車勞頓。" },
          { time: "14:00", activity: "西市場 / 林百貨", detail: "百年古蹟建築巡禮，搭乘復古指針電梯。" },
          { time: "19:30", activity: "博仁堂藥膳晚餐", detail: "榮獲 2026 必比登推薦，百年中藥行品嚐藥膳。" },
          { time: "21:00", activity: "中西區老宅民宿", detail: "入住隱身巷弄的質感老宅。" }
        ]
      },
      {
        day: "Day 2",
        title: "綠色生態與無菜單饗宴",
        date: "4/4 (SAT)",
        image: "https://e5rxtr4t5ah.exactdn.com/wp-content/uploads/2022/07/sicao-green-tunnel-tainan-header.jpg?strip=all",
        events: [
          { time: "08:30", activity: "金得春捲", detail: "清明節必吃的道地台南甜味。" },
          { time: "10:00", activity: "四草綠色隧道", detail: "搭乘竹筏欣賞絕美的紅樹林生態。" },
          { time: "13:00", activity: "安平古堡 / 樹屋", detail: "一票參觀兩處歷史古蹟，沉浸安平魅力。" },
          { time: "15:00", activity: "文章牛肉湯午餐", detail: "台南溫體牛代表，滿足感爆棚。" },
          { time: "19:00", activity: "筑馨居 (無菜單)", detail: "清代百年老厝私廚，需 21 天前預約。" }
        ]
      },
      {
        day: "Day 3",
        title: "藝文洗禮與雙城移動",
        date: "4/5 (SUN)",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Chimei_museum1.jpg",
        events: [
          { time: "09:30", activity: "奇美博物館", detail: "參觀 2026 年度重量級「埃及特展」。" },
          { time: "12:30", activity: "十鼓仁糖文創園區", detail: "百年糖廠改造的工業風與極限設施。" },
          { time: "16:30", activity: "移動至高雄 (區間車)", detail: "輕鬆直達新左營站，開啟港都行程。" },
          { time: "19:00", activity: "碳佐麻里 (燒肉)", detail: "朝聖燒肉南霸天，享用頂級和牛。" },
          { time: "21:00", activity: "亞灣區海景飯店", detail: "入住高雄港灣，窗外即是流音中心夜景。" }
        ]
      },
      {
        day: "Day 4",
        title: "港都海風與最新地標",
        date: "4/6 (MON)",
        image: "https://takao.kcg.gov.tw/public/article/a0/955/atl_955_20230302141820_232.jpg",
        events: [
          { time: "09:30", activity: "旗津渡輪 / 燈塔", detail: "漫步純白燈塔俯瞰高雄港，吹海風。" },
          { time: "12:30", activity: "早迷鹿早午餐", detail: "享受網美風格的高質感午後時光。" },
          { time: "14:30", activity: "LaLaport 鳳山店", detail: "搶先開箱 2026 高雄最新日系購物地標。" },
          { time: "16:00", activity: "老江紅茶 (返程輕食)", detail: "離台前的經典必吃古早味。" },
          { time: "17:30", activity: "高鐵抵達台北", detail: "滿載美好回憶賦歸。" }
        ]
      }
    ]
  }
];

const VIDEOS = [
  {
    id: "zIs3oXVtlxg",
    title: "影音剪輯・視覺敘事 (一)",
    description: "透過剪輯節奏與色彩調性的掌握，呈現出獨特的創意氛圍。本作品專注於數位媒體工具的綜合應用。",
  },
  {
    id: "c5qUZWWljK4",
    title: "影像創作・鏡頭語言 (二)",
    description: "探索影像在三維空間下的敘事可能性。展現了對故事腳本與後期製作流程的完整控制力。",
  },
];

const SHOWCASE_LINK = "https://studio.tripo3d.ai/3d-model/608c9c9d-5a4d-435f-933c-9cd27e0494e5?invite_code=03ER8L";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-200" id="home">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
                <span className="text-white text-xs font-bold font-mono">139</span>
              </div>
              <span className="font-bold tracking-tight text-slate-800">a11182139 Portfolio</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden border-b border-slate-50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                <GraduationCap className="w-3 h-3" />
                <span>國立高雄科技大學 NKUST</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight font-display">
                a11182139 <br />
                <span className="text-slate-400">個人多媒體門戶</span>
              </h1>
              <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
                你好！我是 a11182139。這裡彙整了我在高科大期間的影音創作、邏輯規畫以及對數位內容的實踐探索。
              </p>
              <div className="flex items-center gap-4 pt-4">
                <a 
                  href="#works"
                  className="px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all flex items-center gap-2 group"
                >
                  查看作品
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#bio"
                  className="px-6 py-3 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-all"
                >
                  關於我
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative"
            >
              <div className="aspect-[4/5] md:aspect-square rounded-3xl bg-slate-100 overflow-hidden relative group shadow-2xl">
                {/* Profile Image */}
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[1.25] contrast-[1.05] saturate-[1.1]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-40"></div>
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl">
                  <p className="text-white font-bold tracking-wide">a11182139</p>
                  <p className="text-white/80 text-xs mt-1">國立高雄科技大學 NKUST</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bio Section */}
        <section id="bio" className="py-32 px-4 bg-slate-50/50 relative overflow-hidden">
          <div className="max-w-5xl mx-auto space-y-16 relative z-10">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-slate-900 font-display">個人自介 / Biography</h2>
                  <div className="w-16 h-1.5 bg-slate-900 rounded-full"></div>
                </div>
                <div className="prose prose-lg prose-slate text-slate-600 leading-relaxed font-light text-left">
                  <p>
                    你好，我是 <span className="font-bold text-slate-900">a11182139</span>。目前就讀於國立高雄科技大學（NKUST）。在學期間，我不僅致力於追求學術上的卓越，更熱衷於將「數位內容」與「實作」緊密結合。
                  </p>
                  <p>
                    我的核心理念是「邏輯」與「創意」的共生。在影音創作中，我透過嚴謹的腳本規畫來傳遞感性的氛圍；在專案規畫中，我則利用敏銳的觀察力來解決複雜的行程難題。對我而言，每一項專題都是一次自我突破的機會。
                  </p>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-6 w-full">
                <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-4 text-left">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 font-display">學術背景</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">高科大數位內容應用專長。具備專業的數位媒體素養與專案管理基礎。</p>
                </div>
                <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-4 text-left">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center">
                    <Video className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 font-display">技術核心</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">精通非線性剪輯、色彩校正與腳本編排。擅長整合各類數位工具產出高品質內容。</p>
                </div>
                <div className="p-6 px-8 rounded-3xl bg-slate-900 text-white col-span-2 flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">Current Status</p>
                    <p className="text-lg font-bold font-display">尋求數位媒體 / 影音製作合作</p>
                  </div>
                  <Mail className="w-6 h-6 text-slate-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Works Section */}
        <section id="works" className="py-32 px-4 bg-white">
          <div className="max-w-7xl mx-auto space-y-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-6 text-left">
                <h2 className="text-4xl font-bold text-slate-900 font-display">影音專區 / Multimedia Works</h2>
                <p className="text-slate-500 max-w-xl text-xl leading-relaxed">
                  影音作品是我對世界的詮釋。這裡彙整了我在影音製作、剪輯與後製上的實作成果。
                </p>
              </div>
              <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-slate-100 bg-slate-50 text-slate-400 text-sm font-medium">
                <Youtube className="w-5 h-5" />
                <span>YouTube 影音作品鑑賞</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {VIDEOS.map((video, index) => (
                <motion.div 
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group space-y-8"
                >
                  <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-100 relative">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="space-y-4 px-4 text-left">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-slate-900 font-display">{video.title}</h3>
                      <a href={`https://youtu.be/${video.id}`} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="text-lg text-slate-500 leading-relaxed font-light">
                      {video.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Model Section */}
        <section id="ai-model" className="py-32 px-4 bg-white relative">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-900 rounded-[3.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
              
              <div className="flex-1 space-y-8 relative z-10 text-left">
                <div className="space-y-4">
                  <div className="w-16 h-1 bg-white/20 rounded-full"></div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white font-display tracking-tight leading-tight">
                    {AI_MODEL.title} <br />
                    <span className="text-slate-400 text-2xl md:text-3xl">{AI_MODEL.subtitle}</span>
                  </h2>
                </div>
                
                <p className="text-slate-400 text-xl leading-relaxed font-light">
                  {AI_MODEL.description}
                </p>

                <div className="pt-4">
                  <a 
                    href={AI_MODEL.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-4 px-10 py-5 bg-white text-slate-900 font-black rounded-2xl hover:scale-105 active:scale-95 transition-all group shadow-xl shadow-white/5"
                  >
                    <Box className="w-6 h-6" />
                    查看 3D 模型實體
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 relative"
              >
                <div className="aspect-square w-full max-w-[450px] mx-auto rounded-[3rem] bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-8 flex items-center justify-center relative group">
                  <img 
                    src={AI_MODEL.image} 
                    alt="AI 3D Model" 
                    className="w-full h-full object-cover rounded-[2rem] shadow-2xl transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105"
                  />
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl rotate-12">
                    <p className="text-slate-900 font-black text-xs text-center leading-tight">
                      AI <br /> GENERATED
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Travel Section */}
        <section id="travel" className="py-40 px-4 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
          
          <div className="max-w-7xl mx-auto relative z-10 space-y-24">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-400 text-sm font-medium mb-4">
                <Box className="w-4 h-4" />
                <span>LOGISTICS & PLANNING</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold font-display tracking-tight leading-tight uppercase">旅行規劃 / Travel Strategy</h2>
              <p className="text-slate-400 text-xl leading-relaxed font-light">
                規劃不只是行程的堆疊，而是一場關於時間管理與體驗最佳化的藝術。
              </p>
            </div>

            {TRAVEL_PROJECTS.map((project, index) => (
              <div key={index} className="space-y-16">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-10"
                  >
                    <div className="space-y-4 text-left">
                      <div className="inline-flex items-center gap-2 text-slate-400 font-mono tracking-widest text-sm uppercase">
                        <span>Travel Project</span>
                        <div className="w-10 h-px bg-slate-700"></div>
                        <span>{project.duration}</span>
                      </div>
                      <h3 className="text-4xl font-bold font-display leading-[1.2] text-left">{project.title}</h3>
                      <p className="text-slate-400 font-medium tracking-wide text-left">LOCATION: {project.location}</p>
                    </div>
                    
                    <div className="space-y-8 text-left">
                      <p className="text-slate-400 text-lg leading-relaxed font-light">
                        {project.description}
                      </p>
                      <div className="pt-6">
                        <a 
                          href={SHOWCASE_LINK} 
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 font-black rounded-3xl hover:bg-slate-100 transition-all group shadow-2xl shadow-black/20"
                        >
                          VIEW LOGISTICS SOURCE
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group lg:ml-10"
                  >
                    <div className="aspect-[16/9] lg:aspect-[3/4] rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl relative border-4 border-white/10">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 p-8 py-10 rounded-[3rem] bg-white text-slate-900 shadow-2xl max-w-[280px] hidden xl:block text-left border border-slate-100">
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">Est. Total Budget</p>
                      <p className="text-4xl font-black font-display tracking-tighter mb-4 text-slate-900">{project.budget}</p>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium">
                        包含連假期間的住宿加成與精選必比登美食預算分配。
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Detailed Itinerary View */}
                <div className="pt-20 space-y-12">
                  <div className="h-px bg-white/10 w-full mb-12"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {project.itinerary.map((dayPlan, dayIdx) => (
                      <motion.div 
                        key={dayIdx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: dayIdx * 0.1 }}
                        className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden group/card hover:bg-white/10 transition-all duration-500"
                      >
                        <div className="aspect-[16/9] w-full relative overflow-hidden">
                          <img 
                            src={(dayPlan as any).image} 
                            alt={dayPlan.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 grayscale-[0.2] group-hover/card:grayscale-0"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                          <div className="absolute bottom-4 left-6">
                            <p className="text-white/60 font-black text-[10px] uppercase tracking-widest">{dayPlan.day}</p>
                            <h4 className="text-lg font-bold font-display text-white">{dayPlan.title}</h4>
                          </div>
                        </div>
                        <div className="p-8 space-y-6">
                          <div className="space-y-1 text-left">
                            <p className="text-slate-500 font-bold text-xs uppercase opacity-80">{dayPlan.date}</p>
                          </div>
                          <div className="space-y-4">
                            {dayPlan.events.map((event, eIdx) => (
                              <div key={eIdx} className="flex gap-4 text-left group/item">
                                <span className="text-slate-500 font-mono text-[10px] pt-1 whitespace-nowrap">{event.time}</span>
                                <div className="space-y-1">
                                  <p className="text-sm font-bold text-white group-hover/item:text-slate-300 transition-colors">{event.activity}</p>
                                  <p className="text-[10px] text-slate-500 leading-relaxed font-light">{event.detail}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 bg-white text-slate-900 border-t border-slate-100">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold font-display">聯絡我</h2>
              <p className="text-slate-500">對我的影音作品或規劃專案感興趣嗎？歡迎來信洽談交流。</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:a111182139@nkust.edu.tw" 
                className="w-full md:w-auto px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
              >
                <Mail className="w-5 h-5" />
                a111182139@nkust.edu.tw
              </a>
              <div className="flex items-center gap-4">
                <a href="#" className="w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all text-slate-400 hover:text-slate-900">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all text-slate-400 hover:text-slate-900">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="pt-12 border-t border-slate-50">
              <p className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} a11182139. All Rights Reserved. <br className="md:hidden" />
                國立高雄科技大學 Student Website.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
