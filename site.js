/**
 * 星光错题本 (MindCheck) - 官方网站国际化与交互引擎
 * 支持: 简体中文 (zhHans), 繁體中文 (zhHant), English (en)
 */

const translations = {
  zhHans: {
    langName: "简体中文",
    appName: "星光错题本",
    appSub: "MindCheck",
    homeNav: "首页",
    featuresNav: "功能特性",
    printNav: "A4 试卷",
    supportNav: "帮助中心",
    privacyNav: "隐私政策",
    downloadNav: "下载",
    downloadBtn: "App Store 下载",
    learnMoreBtn: "了解更多",
    updatedDate: "最后更新：2026 年 9 月 24 日",
    
    // Hero
    heroBadge: "专为 iPadOS 打造 · 100% 离线单机",
    heroTitle: "让每一道错题，都成为进步的台阶。",
    heroLead: "iPadOS 专业智能错题管理与 A4 试卷重练工具",
    
    // 3 Big Highlight Cards under Hero
    card1Title: "错题收录",
    card1Desc: "拍照自动识别，错题精准分类",
    card2Title: "重练模式",
    card2Desc: "生成空白试卷，支持 A4 打印复习",
    card3Title: "智能分析",
    card3Desc: "分析薄弱项，定制复习计划",
    
    // Deep Features Section
    featuresEyebrow: "深度核心优势",
    featuresTitle: "专为 iPad 打造的高效错题复习闭环",
    featuresSubtitle: "100% 离线单机、零数据上云，让错题整理与 A4 纸质重练真正回归纯粹与专注。",
    
    features: [
      {
        icon: "shield",
        title: "100% 离线与隐私优先",
        desc: "不设云端服务器，无需注册账号。题目识别完全依托设备端 Vision 框架本地离线运行，绝不上传考卷照片与学生数据，全面保护未成年人隐私。"
      },
      {
        icon: "pencil",
        title: "Apple Pencil 手写无痕涂抹",
        desc: "独创纯白底色涂抹与反射边界修补算法。使用 Apple Pencil 或手指即可精准抹去原题的手写答案与红笔批改痕迹，还原干净如新的空白题目。"
      },
      {
        icon: "shapes",
        title: "图文融合双轨架构",
        desc: "针对几何图、物理坐标系、化学实验图，采用高清晰度位图与 OCR 文本双轨混排。公式图样 100% 绝对保真，绝不因机器误识而导致排版错乱。"
      },
      {
        icon: "scanner",
        title: "6 步向导式高精录题",
        desc: "相机拍照透视矫正、2.4x 悬浮放大镜微调选框、平场光照消除与文字基线倾角自动纠偏。严谨的状态机设计，让录题流程高效流畅。"
      },
      {
        icon: "printer",
        title: "A4 AirPrint 即印即练",
        desc: "内置符合国家标准的 A4 试卷排版引擎。智能防跨页断题，按学科自动生成规范答题留白（横线/田字格/方格），支持局域网打印机无线直连一键出卷。"
      },
      {
        icon: "folder",
        title: "100% 用户自建纯净分类",
        desc: "彻底抛弃千篇一律的死板年级模板，完全由家长与孩子按需自由构建学科知识树。配备待整理收纳箱与攻克度统计，错题状态一目了然。"
      }
    ],
    
    // Flow Section
    flowTitle: "6 步标准录入向导流程",
    steps: [
      { num: "1", name: "拍照 / 选图" },
      { num: "2", name: "框选单题" },
      { num: "3", name: "扫描优化" },
      { num: "4", name: "消除痕迹" },
      { num: "5", name: "OCR确认" },
      { num: "6", name: "归档入库" }
    ],
    
    // CTA Banner
    ctaTitle: "即刻开启清爽纯净的错题重练之旅",
    ctaDesc: "支持 iPadOS 17.0 及更高版本。配合 Apple Pencil 与 AirPrint 打印机，体验无与伦比的无纸化录题与纸质复习闭环。",
    ctaBtn: "前往 App Store 获取",
    
    // Privacy Page
    privacyTitle: "隐私政策与关于",
    privacyLead: "星光错题本（MindCheck）秉持“本地优先、保护未成年人隐私”的设计原则。本政策详细说明本应用如何处理您的数据以及您所拥有的权利。",
    privacySections: [
      {
        title: "核心原则：100% 离线与本地优先",
        content: "星光错题本为纯单机架构应用，不自建任何云端用户中心或后台服务器。本应用不要求您注册账号，亦不收集您的姓名、电话、邮箱、学号或设备唯一标识符等任何个人身份信息。您录入的所有错题照片、去笔迹图片、裁剪数据、分类及标签，均仅存储在您当前 iOS/iPadOS 设备的独立应用沙盒内。"
      },
      {
        title: "本地离线文字识别 (OCR)",
        content: "题目文字提取完全依托苹果操作系统内置的原生 Vision 框架在设备端纯离线运行。整个识别过程无需连接互联网，绝不向任何第三方云端或大语言模型服务传输您的考卷图像或文本内容。"
      },
      {
        title: "系统权限调用说明",
        content: "应用仅在您主动使用相应功能时申请系统权限：<br>• <b>相机权限 (Camera)</b>：仅用于您主动拍摄试卷和错题纸面，用于题目裁切与笔迹修补；<br>• <b>照片图库权限 (Photo Library)</b>：仅用于您主动从相册选择已有试卷图片导入错题本。<br>您可随时在系统【设置 - 星光错题本】中关闭相应权限，关闭后不影响查看和打印已有错题。"
      },
      {
        title: "数据导出、备份与彻底删除",
        content: "• <b>自主导出</b>：您可将选中的错题自主排版并生成 A4 试卷 PDF，通过系统分享面板发送或使用 AirPrint 打印；<br>• <b>彻底销毁</b>：在错题本中删除错题或清空分类时，对应的本地元数据及高清图像文件将被立即物理删除，不留缓存；<br>• <b>卸载销毁</b>：若您在设备上卸载本应用，保存在本应用沙盒内的全部错题与图片将随之被系统彻底清除。"
      },
      {
        title: "未成年人保护特别声明",
        content: "本应用面向广大学生用户设计。我们严格遵守《中华人民共和国个人信息保护法》及相关未成年人网络保护规定，坚决不收集任何儿童与青少年用户数据，不含任何形式的广告、商业追踪 SDK 或应用内大数据个性化推荐。"
      },
      {
        title: "官方网站与技术支持托管",
        content: "本官方网站由静态托管服务（如 GitHub Pages）提供服务。当您访问网站时，托管服务商可能会依照其自身的隐私政策记录标准网络请求信息（如 IP 地址与浏览器版本）。本网站未植入任何第三方广告脚本、分析代码或跨站 Cookie。"
      },
      {
        title: "联系我们与政策变更",
        content: "若本政策发生重大调整，我们将在本页面及 App 更新说明中予以公布。如对隐私保护有任何疑问，或需要技术支持，请发送邮件至官方客服邮箱：<b>diowang@gmail.com</b>。"
      }
    ],
    
    // Support Page
    supportTitle: "技术支持与帮助中心",
    supportLead: "获取星光错题本（MindCheck）的使用指南、常见问题排查与官方支持通道。",
    supportContactTitle: "需要进一步协助？",
    supportContactDesc: "如果您在使用过程中遇到任何疑问、异常现象或改进建议，欢迎随时给我们发送邮件，我们通常会在 24~48 小时内为您回复。",
    supportSendEmail: "发送邮件给开发者",
    supportFaqTitle: "常见问题解答 (FAQ)",
    
    supportFaqs: [
      {
        title: "星光错题本需要联网或者注册账号吗？",
        content: "不需要。星光错题本是 100% 纯单机离线应用。无需注册账号，无需登录，在没有网络（如飞行模式或校园无网环境）下所有功能（拍照裁切、文字识别、去手写痕迹、A4 组卷预览）均能完全正常使用。"
      },
      {
        title: "为什么录题时提示需要相机或相册权限？",
        content: "应用需要调用硬件相机拍摄试卷原件，或从系统相册选取之前拍摄好的题目。如果此前不小心拒绝了授权，您可以前往 iPadOS【设置】-> 滑动找到【星光错题本】-> 开启【相机】与【照片】读取权限即可恢复正常。"
      },
      {
        title: "使用 Apple Pencil 涂抹去痕时有哪些实用技巧？",
        content: "在第 4 步涂抹去痕画布中：<br>1. 可以点击画笔粗细切换（细 10pt、中 20pt、粗 36pt）以快速擦除大面积笔迹；<br>2. 支持双指缩放和拖移画布，以便对微小的红笔对勾或数字进行精准擦除；<br>3. 顶部工具栏提供撤销 (Undo) 和重做 (Redo)，不小心涂错了可以随时回退。"
      },
      {
        title: "A4 试卷排版与 AirPrint 打印如何使用？",
        content: "在组卷中心选好题目并点击“试卷预览”后，点击右上角的“打印”按钮即可唤起系统 AirPrint 面板。只要您的 iPad 与支持 AirPrint 的无线打印机连接在同一个 Wi-Fi 局域网下，即可直接出卷。您也可以点击“导出 PDF”保存到“文件”App，或发送到微信/QQ/电脑上通过有线打印机打印。"
      },
      {
        title: "更换新 iPad 或备份数据时应该如何操作？",
        content: "因为星光错题本不设云端服务器，所有错题数据保存在 iPad 本地沙盒。当您更换新设备时，建议使用 iPadOS 原生的【系统整机迁移】（将新旧两台 iPad 靠近即可一键克隆数据）或使用电脑通过 Finder / iTunes 进行完整整机加密备份恢复，这样所有错题和图片均会无损同步到新设备。"
      },
      {
        title: "如何反馈使用中的 Bug 或建议新功能？",
        content: "我们非常重视每一位学生和家长的反馈！您可以直接发送邮件至 <b>diowang@gmail.com</b>，如果遇到界面显示问题，建议附上问题截图或屏幕录像，我们将尽快跟进处理并在后续版本中优化升级。"
      }
    ],
    
    // Footer
    footerRights: "© 2026 星光错题本 (MindCheck). 保留所有权利。",
    footerDisclaimer: "Apple、iPad、iPadOS、Apple Pencil 与 AirPrint 是 Apple Inc. 在美国和其他国家或地区的注册商标。"
  },
  
  zhHant: {
    langName: "繁體中文",
    appName: "星光錯題本",
    appSub: "MindCheck",
    homeNav: "首頁",
    featuresNav: "功能特色",
    printNav: "A4 試卷",
    supportNav: "說明中心",
    privacyNav: "隱私權政策",
    downloadNav: "下載",
    downloadBtn: "App Store 下載",
    learnMoreBtn: "了解更多",
    updatedDate: "最後更新：2026 年 9 月 24 日",
    
    heroBadge: "專為 iPadOS 打造 · 100% 離線單機",
    heroTitle: "讓每一道錯題，都成為進步的階梯。",
    heroLead: "iPadOS 專業智慧錯題管理與 A4 試卷重練工具",
    
    card1Title: "錯題收錄",
    card1Desc: "拍照自動辨識，錯題精準分類",
    card2Title: "重練模式",
    card2Desc: "生成空白試卷，支援 A4 列印複習",
    card3Title: "智慧分析",
    card3Desc: "分析薄弱項，自訂複習計畫",
    
    featuresEyebrow: "深度核心優勢",
    featuresTitle: "專為 iPad 打造的高效錯題複習閉環",
    featuresSubtitle: "100% 離線單機、零資料上雲，讓錯題整理與 A4 紙本重練真正回歸純粹與專注。",
    
    features: [
      {
        icon: "shield",
        title: "100% 離線與隱私優先",
        desc: "不設雲端伺服器，無需註冊帳號。題目辨識完全依託裝置端 Vision 架構本機離線運作，絕不上傳試卷照片與學生資料，全面保護未成年人隱私。"
      },
      {
        icon: "pencil",
        title: "Apple Pencil 手寫無痕塗抹",
        desc: "獨創純白底色塗抹與反射邊界修補演算法。使用 Apple Pencil 或手指即可精準抹去原題的手寫答案與紅筆批改痕跡，還原乾淨如新的空白題目。"
      },
      {
        icon: "shapes",
        title: "圖文融合雙軌架構",
        desc: "針對幾何圖、物理座標系、化學實驗圖，採用高清晰度點陣圖與 OCR 文字雙軌混排。公式圖樣 100% 絕對保真，絕不因機器誤識而導致排版錯亂。"
      },
      {
        icon: "scanner",
        title: "6 步引導式高精錄題",
        desc: "相機拍照透視校正、2.4x 懸浮放大鏡微調選框、平場光照消除與文字基線傾角自動校平。嚴謹的狀態機設計，讓錄題流程高效順暢。"
      },
      {
        icon: "printer",
        title: "A4 AirPrint 即印即練",
        desc: "內建符合國家標準的 A4 試卷排版引擎。智慧防跨頁斷題，按學科自動生成規範答題留白（橫線/田字格/方格），支援區域網路印表機無線直連一鍵出卷。"
      },
      {
        icon: "folder",
        title: "100% 使用者自建純淨分類",
        desc: "徹底拋棄千篇一律的死板年級範本，完全由家長與孩子按需自由構建學科知識樹。配備待整理收納箱與攻克度統計，錯題狀態一目了然。"
      }
    ],
    
    flowTitle: "6 步標準錄入引導流程",
    steps: [
      { num: "1", name: "拍照 / 選圖" },
      { num: "2", name: "框選單題" },
      { num: "3", name: "掃描最佳化" },
      { num: "4", name: "消除痕跡" },
      { num: "5", name: "OCR確認" },
      { num: "6", name: "歸檔入庫" }
    ],
    
    ctaTitle: "即刻開啟清爽純淨的錯題重練之旅",
    ctaDesc: "支援 iPadOS 17.0 及更高版本。配合 Apple Pencil 與 AirPrint 印表機，體驗無與倫比的無紙化錄題與紙本複習閉環。",
    ctaBtn: "前往 App Store 取得",
    
    privacyTitle: "隱私權政策與關於",
    privacyLead: "星光錯題本（MindCheck）秉持「本機優先、保護未成年人隱私」的設計原則。本政策詳細說明本 App 如何處理您的資料以及您所擁有的權利。",
    privacySections: [
      {
        title: "核心原則：100% 離線與本機優先",
        content: "星光錯題本為純單機架構 App，不自建任何雲端使用者中心或後台伺服器。本 App 不要求您註冊帳號，亦不蒐集您的姓名、電話、電子郵件、學號或裝置唯一識別碼等任何個人身分資訊。您錄入的所有錯題照片、去筆跡圖片、裁剪資料、分類及標籤，均僅儲存在您當前 iOS/iPadOS 裝置的獨立應用程式沙盒內。"
      },
      {
        title: "本機離線文字辨識 (OCR)",
        content: "題目文字擷取完全依託 Apple 作業系統內建的原生 Vision 架構在裝置端純離線運作。整個辨識過程無需連接網際網路，絕不向任何第三方雲端或大型語言模型服務傳輸您的試卷影像或文字內容。"
      },
      {
        title: "系統權限調用說明",
        content: "App 僅在您主動使用相應功能時申請系統權限：<br>• <b>相機權限 (Camera)</b>：僅用於您主動拍攝試卷和錯題紙面，用於題目裁切與筆跡修補；<br>• <b>照片圖庫權限 (Photo Library)</b>：僅用於您主動從相簿選擇已有試卷圖片匯入錯題本。<br>您可隨時在系統【設定 - 星光錯題本】中關閉相應權限，關閉後不影響檢視和列印已有錯題。"
      },
      {
        title: "資料匯出、備份與徹底刪除",
        content: "• <b>自主匯出</b>：您可將選中的錯題自主排版並生成 A4 試卷 PDF，透過系統分享面板傳送或使用 AirPrint 列印；<br>• <b>徹底銷毀</b>：在錯題本中刪除錯題或清空分類時，對應的本機中繼資料及高解析度影像檔案將被立即實體刪除，不留快取；<br>• <b>解除安裝銷毀</b>：若您在裝置上解除安裝本 App，儲存在本 App 沙盒內的全部錯題與圖片將隨之被系統徹底清除。"
      },
      {
        title: "未成年人保護特別聲明",
        content: "本 App 面向廣大學生使用者設計。我們嚴格遵守個人資料保護法及相關未成年人網路保護規定，堅決不蒐集任何兒童與青少年使用者資料，不含任何形式的廣告、商業追蹤 SDK 或 App 內大數據個人化推薦。"
      },
      {
        title: "官方網站與技術支援託管",
        content: "本官方網站由靜態託管服務（如 GitHub Pages）提供服務。當您造訪網站時，託管服務商可能會依照其自身的隱私權政策記錄標準網路請求資訊（如 IP 位址與瀏覽器版本）。本網站未植入任何第三方廣告指令碼、分析程式碼或跨站 Cookie。"
      },
      {
        title: "聯絡我們與政策變更",
        content: "若本政策發生重大調整，我們將在本頁面及 App 更新說明中予以公布。如對隱私權保護有任何疑問，或需要技術支援，請寄信至官方客服信箱：<b>diowang@gmail.com</b>。"
      }
    ],
    
    supportTitle: "技術支援與說明中心",
    supportLead: "取得星光錯題本（MindCheck）的使用指南、常見問題排查與官方支援管道。",
    supportContactTitle: "需要進一步協助？",
    supportContactDesc: "如果您在使用過程中遇到任何疑問、異常現象或改進建議，歡迎隨時給我們寄信，我們通常會在 24~48 小時內為您回覆。",
    supportSendEmail: "寄信給開發者",
    supportFaqTitle: "常見問題解答 (FAQ)",
    
    supportFaqs: [
      {
        title: "星光錯題本需要連網或者註冊帳號嗎？",
        content: "不需要。星光錯題本是 100% 純單機離線 App。無需註冊帳號，無需登入，在沒有網路（如飛航模式或校園無網環境）下所有功能（拍照裁切、文字辨識、去手寫痕跡、A4 組卷預覽）均能完全正常使用。"
      },
      {
        title: "為什麼錄題時提示需要相機或相簿權限？",
        content: "App 需要調用硬體相機拍攝試卷原件，或從系統相簿選取之前拍攝好的題目。如果此前不小心拒絕了授權，您可以前往 iPadOS【設定】-> 滑動找到【星光錯題本】-> 開啟【相機】與【照片】讀取權限即可恢復正常。"
      },
      {
        title: "使用 Apple Pencil 塗抹去痕時有哪些實用技巧？",
        content: "在第 4 步塗抹去痕畫布中：<br>1. 可以點選筆刷粗細切換（細 10pt、中 20pt、粗 36pt）以快速擦除大面積筆跡；<br>2. 支援雙指縮放和拖曳畫布，以便對微小的紅筆勾勾或數字進行精準擦除；<br>3. 頂部工具列提供復原 (Undo) 和重做 (Redo)，不小心塗錯了可以隨時退回。"
      },
      {
        title: "A4 試卷排版與 AirPrint 列印如何使用？",
        content: "在組卷中心選好題目並點選「試卷預覽」後，點選右上角的「列印」按鈕即可喚起系統 AirPrint 面板。只要您的 iPad 與支援 AirPrint 的無線印表機連接在同一個 Wi-Fi 區域網路下，即可直接出卷。您也可以點選「匯出 PDF」儲存到「檔案」App，或發送到微信/QQ/電腦上透過有線印表機列印。"
      },
      {
        title: "更換新 iPad 或備份資料時應該如何操作？",
        content: "因為星光錯題本不設雲端伺服器，所有錯題資料儲存在 iPad 本機沙盒。當您更換新裝置時，建議使用 iPadOS 原生的【系統整機移轉】（將新舊兩台 iPad 靠近即可一鍵克隆資料）或使用電腦透過 Finder / iTunes 進行完整整機加密備份復原，這樣所有錯題和圖片均會無損同步到新裝置。"
      },
      {
        title: "如何反饋使用中的 Bug 或建議新功能？",
        content: "我們非常重視每一位學生和家長的意見！您可以直接寄信至 <b>diowang@gmail.com</b>，如果遇到介面顯示問題，建議附上問題螢幕截圖或螢幕錄影，我們將盡快跟進處理並在後續版本中最佳化升級。"
      }
    ],
    
    footerRights: "© 2026 星光錯題本 (MindCheck). 版權所有。",
    footerDisclaimer: "Apple、iPad、iPadOS、Apple Pencil 與 AirPrint 是 Apple Inc. 在美國和其他國家或地區的註冊商標。"
  },
  
  en: {
    langName: "English",
    appName: "MindCheck",
    appSub: "Starlight Mistake Book",
    homeNav: "Home",
    featuresNav: "Features",
    printNav: "A4 Papers",
    supportNav: "Support",
    privacyNav: "Privacy",
    downloadNav: "Download",
    downloadBtn: "App Store Download",
    learnMoreBtn: "Learn More",
    updatedDate: "Last updated: September 24, 2026",
    
    heroBadge: "Built for iPadOS · 100% Offline & Local-First",
    heroTitle: "Master Your Mistakes, Light Up Your Learning.",
    heroLead: "iPadOS Professional Mistake Management & A4 Exam Revision Tool",
    
    card1Title: "Mistake Capture",
    card1Desc: "Auto scan & crop with smart tagging",
    card2Title: "Revision Mode",
    card2Desc: "Generate blank A4 test papers to reprint",
    card3Title: "Smart Analytics",
    card3Desc: "Pinpoint weak spots & focus your review",
    
    featuresEyebrow: "Deep Capabilities",
    featuresTitle: "Engineered for iPad Study & Practice",
    featuresSubtitle: "100% offline, zero server uploads, keeping exam revision and paper re-practice pure and focused.",
    
    features: [
      {
        icon: "shield",
        title: "100% Offline & Privacy First",
        desc: "No developer cloud servers, no account registration required. Text recognition runs strictly offline via on-device Apple Vision framework. Test papers and personal data are never uploaded."
      },
      {
        icon: "pencil",
        title: "Seamless Apple Pencil Eraser",
        desc: "Advanced white-paper normalization and Neumann reflection boundary inpainting. Easily wipe away student handwriting and red-pen grading with Apple Pencil, restoring crisp blank test questions."
      },
      {
        icon: "shapes",
        title: "Hybrid Graphic-Text Engine",
        desc: "Specially designed for math geometry, physics coordinate systems, and chemical charts. Preserves high-resolution vector and bitmap fidelity without OCR distortion."
      },
      {
        icon: "scanner",
        title: "6-Step Precision Capture Flow",
        desc: "Auto perspective correction, 2.4x floating magnifier loupe, illumination shadow removal, and text baseline alignment for an effortless mistake capturing workflow."
      },
      {
        icon: "printer",
        title: "A4 AirPrint Instant Practice",
        desc: "Built-in standard A4 exam paper typesetting engine. Auto page-break prevention, subject-tailored answer blanks (ruled/grid), and one-tap AirPrint wireless printing."
      },
      {
        icon: "folder",
        title: "100% User-Defined Categories",
        desc: "Free from rigid preset templates. Parents and students can freely build custom multi-tier subject knowledge trees with dedicated unclassified inbox and mastery tracking."
      }
    ],
    
    flowTitle: "6-Step Guided Mistake Capture Pipeline",
    steps: [
      { num: "1", name: "Capture / Pick" },
      { num: "2", name: "Crop Single" },
      { num: "3", name: "Scan Enhance" },
      { num: "4", name: "Erase Marks" },
      { num: "5", name: "OCR Confirm" },
      { num: "6", name: "Classify & Save" }
    ],
    
    ctaTitle: "Experience the Joy of Mindful Learning Today",
    ctaDesc: "Compatible with iPadOS 17.0 and later. Pair with Apple Pencil and AirPrint for the ultimate paperless capture and tactile paper revision loop.",
    ctaBtn: "Get it on App Store",
    
    privacyTitle: "Privacy Policy & About",
    privacyLead: "MindCheck is designed with a 'Local-First, Minor Protection' philosophy. This policy explains how your information is handled and the rights you maintain.",
    privacySections: [
      {
        title: "1. Core Principle: 100% Offline & Local-First",
        content: "MindCheck operates strictly on a standalone, local-first architecture. We do not operate cloud user centers or backend servers. The app does not require account registration, nor does it collect your name, phone, email, student ID, or unique device identifiers. All captured images, erased questions, crop coordinates, and categories are stored solely inside your iOS/iPadOS device sandbox."
      },
      {
        title: "2. On-Device Offline Text Recognition (OCR)",
        content: "Question text recognition runs completely offline on your device using Apple's native Vision framework. Recognition never requires an active Internet connection and never transmits your exam images or questions to third-party cloud servers or large language model services."
      },
      {
        title: "3. System Permission Explanations",
        content: "MindCheck only requests system permissions when you actively invoke related features:<br>• <b>Camera</b>: Used strictly for photographing paper exams to crop and inpaint questions;<br>• <b>Photo Library</b>: Used strictly when you choose existing exam photos from your album.<br>You can revoke these permissions anytime in iOS Settings > MindCheck."
      },
      {
        title: "4. Data Export, Backup, and Deletion",
        content: "• <b>Autonomous Export</b>: You can typeset selected mistakes into standard A4 exam PDFs to share or print via AirPrint;<br>• <b>Permanent Deletion</b>: When you delete a question or category, corresponding local metadata and image files are immediately wiped physically from disk;<br>• <b>Uninstall Deletion</b>: Uninstalling the app completely removes all data stored in the app container."
      },
      {
        title: "5. Child Protection & Minor Safety Statement",
        content: "MindCheck is built for students and families. We strictly comply with child privacy regulations and personal data protection laws. We do not collect child or adolescent data, nor do we include third-party advertising SDKs, tracking codes, or personalized profiling."
      },
      {
        title: "6. Website and Support Hosting",
        content: "This official website is statically hosted via services like GitHub Pages. When visiting, the host may log standard web request information (e.g., IP address and user-agent) under their own privacy policy. MindCheck includes zero tracking or analytics scripts on this website."
      },
      {
        title: "7. Contact and Policy Updates",
        content: "Any material updates to this policy will be posted on this page with an updated timestamp. For questions regarding privacy or technical support, please contact: <b>diowang@gmail.com</b>."
      }
    ],
    
    supportTitle: "Support & Help Center",
    supportLead: "Get user guides, troubleshooting advice, and official developer contact details for MindCheck.",
    supportContactTitle: "Need Further Assistance?",
    supportContactDesc: "If you have questions, encounter an issue, or want to suggest improvements, email us anytime. We typically respond within 24 to 48 hours.",
    supportSendEmail: "Email Developer Support",
    supportFaqTitle: "Frequently Asked Questions (FAQ)",
    
    supportFaqs: [
      {
        title: "Does MindCheck require an internet connection or user account?",
        content: "No. MindCheck is a 100% offline, local-first app. No account signup, no login. Even in airplane mode or offline school environments, all features (camera crop, OCR, handwriting eraser, A4 preview) work completely."
      },
      {
        title: "Why does the app ask for Camera or Photo Library permissions?",
        content: "The app needs camera access to photograph your physical test papers, or photo library access to import existing exam photos. If you previously declined, go to iPadOS Settings > MindCheck and enable Camera / Photos access."
      },
      {
        title: "What are the best tips for using Apple Pencil to erase markings?",
        content: "In Step 4 (Eraser Canvas):<br>1. Choose brush thickness (Fine 10pt, Medium 20pt, Broad 36pt) for quick coverage;<br>2. Use two fingers to pinch-to-zoom and pan for delicate red checks or symbols;<br>3. Use the Undo and Redo buttons in the top toolbar if you make an accidental stroke."
      },
      {
        title: "How do A4 exam layout and AirPrint wireless printing work?",
        content: "Select questions in the Exam Basket, tap 'Exam Preview', and tap the top-right 'Print' button to trigger the native AirPrint dialog. As long as your iPad and an AirPrint-compatible printer share the same Wi-Fi, you can print instantly. You can also tap 'Export PDF' to save to the Files app or send to your computer."
      },
      {
        title: "How do I backup data or migrate to a new iPad?",
        content: "Because MindCheck has no cloud server, all mistake data resides in your iPad's local sandbox. When upgrading to a new iPad, use Apple's native Quick Start device migration (place both iPads next to each other) or create an encrypted backup via Finder / iTunes."
      },
      {
        title: "How do I report a bug or suggest a new feature?",
        content: "We deeply appreciate feedback from students and parents! Please email <b>diowang@gmail.com</b> with your feedback. If you encounter a display issue, attaching a screenshot or screen recording will help us resolve it quickly in upcoming releases."
      }
    ],
    
    footerRights: "© 2026 MindCheck. All rights reserved.",
    footerDisclaimer: "Apple, iPad, iPadOS, Apple Pencil, and AirPrint are trademarks of Apple Inc., registered in the U.S. and other countries."
  }
};

const languageOrder = ["zhHans", "zhHant", "en"];
let currentLanguage = "zhHans";
const currentView = document.body.dataset.initialView || "home";

function escapeHtml(value) {
  if (!value) return "";
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const icons = {
  shield: `<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>`,
  pencil: `<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`,
  shapes: `<svg viewBox="0 0 24 24"><path d="M12 2l-5.5 9h11z M3 13.5h8v8H3z M17.5 13c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"/></svg>`,
  scanner: `<svg viewBox="0 0 24 24"><path d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-.99-.02-1.25.42L2.41 8.61c-.25.44-.14.99.26 1.3l1.86 1.41a7.343 7.343 0 0 0-.03.68c0 .23.01.45.03.68l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.27.47.8.64 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.47.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68zm-7.5 4c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>`,
  printer: `<svg viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>`,
  folder: `<svg viewBox="0 0 24 24"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>`
};

function getInitialLanguage() {
  const param = new URL(window.location.href).searchParams.get("lang");
  if (translations[param]) return param;
  
  const stored = localStorage.getItem("mindcheck-lang");
  if (translations[stored]) return stored;
  
  const browserLang = (navigator.language || "").toLowerCase();
  if (browserLang.startsWith("zh-tw") || browserLang.startsWith("zh-hk") || browserLang.startsWith("zh-mo")) return "zhHant";
  if (browserLang.startsWith("zh")) return "zhHans";
  return "en";
}

function htmlLanguage(lang) {
  if (lang === "zhHans") return "zh-Hans";
  if (lang === "zhHant") return "zh-Hant";
  return "en";
}

function renderFeatures(features) {
  return features.map((feat) => `
    <div class="feature-card">
      <div class="feature-icon-wrapper">${icons[feat.icon] || icons.shield}</div>
      <h3 class="feature-title">${escapeHtml(feat.title)}</h3>
      <p class="feature-desc">${escapeHtml(feat.desc)}</p>
    </div>
  `).join("");
}

function renderSteps(steps) {
  return steps.map((s) => `
    <div class="step-card">
      <span class="step-number">${escapeHtml(s.num)}</span>
      <div class="step-name">${escapeHtml(s.name)}</div>
    </div>
  `).join("");
}

function renderPrivacySections(sections) {
  return sections.map((sec, idx) => `
    <article class="section-card">
      <div class="section-card-header">
        <span class="section-idx">${String(idx + 1).padStart(2, "0")}</span>
        <h2>${escapeHtml(sec.title)}</h2>
      </div>
      <div class="section-card-content">
        ${sec.content}
      </div>
    </article>
  `).join("");
}

function renderFaqs(faqs) {
  return faqs.map((faq, idx) => `
    <article class="section-card">
      <div class="section-card-header">
        <span class="section-idx">Q${idx + 1}</span>
        <h2>${escapeHtml(faq.title)}</h2>
      </div>
      <div class="section-card-content">
        ${faq.content}
      </div>
    </article>
  `).join("");
}

function render() {
  const copy = translations[currentLanguage] || translations.zhHans;
  document.documentElement.lang = htmlLanguage(currentLanguage);

  // Sync text nodes with data-copy
  document.querySelectorAll("[data-copy]").forEach((node) => {
    const key = node.dataset.copy;
    if (copy[key] !== undefined) {
      if (node.dataset.html === "true") {
        node.innerHTML = copy[key];
      } else {
        node.textContent = copy[key];
      }
    }
  });

  // Sync internal view links with ?lang=...
  document.querySelectorAll("[data-view-link]").forEach((link) => {
    const view = link.dataset.viewLink;
    link.classList.toggle("is-active", view === currentView);
    const file = view === "home" ? "index.html" : `${view}.html`;
    link.href = `${file}?lang=${currentLanguage}`;
  });

  // View specific dynamic injections
  if (currentView === "home") {
    document.title = `${copy.appName} MindCheck — ${copy.heroLead}`;
    const featGrid = document.querySelector("#featuresGrid");
    if (featGrid) featGrid.innerHTML = renderFeatures(copy.features);
    
    const stepsList = document.querySelector("#stepsList");
    if (stepsList) stepsList.innerHTML = renderSteps(copy.steps);
  } else if (currentView === "privacy") {
    document.title = `${copy.privacyTitle} — ${copy.appName}`;
    const pContainer = document.querySelector("#privacySections");
    if (pContainer) pContainer.innerHTML = renderPrivacySections(copy.privacySections);
  } else if (currentView === "support") {
    document.title = `${copy.supportTitle} — ${copy.appName}`;
    const sContainer = document.querySelector("#supportFaqs");
    if (sContainer) sContainer.innerHTML = renderFaqs(copy.supportFaqs);
  }
}

// Init Language Selector
const langSelect = document.querySelector("#languageSelect");
if (langSelect) {
  langSelect.innerHTML = "";
  languageOrder.forEach((lang) => {
    const opt = document.createElement("option");
    opt.value = lang;
    opt.textContent = translations[lang].langName;
    langSelect.append(opt);
  });

  currentLanguage = getInitialLanguage();
  langSelect.value = currentLanguage;

  langSelect.addEventListener("change", () => {
    currentLanguage = langSelect.value;
    localStorage.setItem("mindcheck-lang", currentLanguage);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", currentLanguage);
    window.history.replaceState({}, "", url);
    render();
  });
} else {
  currentLanguage = getInitialLanguage();
}

document.addEventListener("DOMContentLoaded", () => {
  render();
});
