// --- シナリオデータ ---
const scenarios = [
  {
    year: "1年目 春", title: "新歓コンパ", opponent: "🍺",
    text: "サークルの先輩がジョッキを持ってきた。「俺の酒が飲めないのか！一杯だけなら大丈夫だろ？」",
    choices: [
      { text: "空気を読んで飲む", effects: { physical: -20, social: +5 }, fbTitle: "⚠️ 危険信号", fbText: "「一杯だけ」が一気飲みの引き金になります。短時間の大量飲酒（ビンジ飲酒）は急性アルコール中毒のリスクがあります。" },
      { text: "「体質的に飲めません」", effects: { physical: +10, literacy: +10, social: +5 }, fbTitle: "✅ ナイス判断！", fbText: "アルコールパッチテスト等で自分の体質を知っておくことは大切です。強要はアルハラ（ハラスメント）です。" }
    ]
  },
  {
    year: "1年目 夏", title: "予期せぬ展開", opponent: "😍",
    text: "恋人といい雰囲気に。でもコンドームがない。「外に出せば大丈夫だよ」と相手は言っている。",
    choices: [
      { text: "信じて受け入れる", effects: { physical: -30, literacy: -20 }, fbTitle: "❌ ストップ！", fbText: "外出し（膣外射精）は避妊効果が低く、性感染症は全く防げません。ピルも性感染症は予防できません。" },
      { text: "「今日はやめておこう」", effects: { physical: +10, literacy: +20, social: +10 }, fbTitle: "✅ 素晴らしい", fbText: "同意はいつでも撤回可能です。避妊具がない場合、性行為をしない選択は尊重されるべきです。" }
    ]
  },
  {
    year: "2年目 春", title: "怪しい誘い", opponent: "😈",
    text: "友人の知人から「合法ハーブ」を勧められた。「リラックスできるし、合法だから捕まらないよ」",
    choices: [
      { text: "1回だけなら…", effects: { physical: -40, mental: -20, literacy: -30 }, fbTitle: "⛔ 非常に危険", fbText: "「合法」と称していても成分不明で、呼吸停止や重篤な健康被害が多発しています。1回でも依存のリスクがあります。" },
      { text: "きっぱり断る", effects: { physical: +10, literacy: +20, social: +5 }, fbTitle: "✅ 正解です", fbText: "成分や濃度が不明な薬物は非常に危険です。断る勇気が自分と未来を守ります。" }
    ]
  },
  {
    year: "2年目 秋", title: "検査の提案", opponent: "🏥",
    text: "新しいパートナーができた。「付き合う前に、お互いのために性感染症の検査に行かない？」",
    choices: [
      { text: "「信頼してないの？」と怒る", effects: { social: -20, literacy: -10 }, fbTitle: "🤔 誤解です", fbText: "検査の提案は信頼していないからではありません。無症状の感染も多いため、お互いの健康を守るための愛情ある行動です。" },
      { text: "一緒に検査に行く", effects: { social: +20, literacy: +20, physical: +10 }, fbTitle: "✅ 理想的な関係", fbText: "カップルで検査を受けることは、感染リスクを下げ、安心して関係を築くための最良のステップです。" }
    ]
  },
  {
    year: "3年目 春", title: "試験前のサプリ", opponent: "💊",
    text: "試験勉強で眠い。SNSで『集中力が爆上がりする海外製サプリ』が話題だ。",
    choices: [
      { text: "ネットで購入", effects: { physical: -20, mental: -10 }, fbTitle: "⚠️ リスクあり", fbText: "スマートドラッグ等の成分不明品は副作用や依存の危険があります。安易な個人輸入は避けましょう。" },
      { text: "睡眠をとる", effects: { physical: +10, mental: +10 }, fbTitle: "✅ 正解です", fbText: "睡眠不足は記憶の定着を妨げます。十分な睡眠こそが最高のパフォーマンスを引き出します。" }
    ]
  },
  {
    year: "3年目 冬", title: "メンタルの不調", opponent: "☁️",
    text: "就活がつらい。眠れず、食欲もない。「誰かに相談したいけど迷惑かな…」",
    choices: [
      { text: "一人で耐える", effects: { mental: -30, physical: -10 }, fbTitle: "🤕 無理しないで", fbText: "「つらい」と言うのは弱さではありません。我慢しすぎると回復に時間がかかります。早期相談が重要です。" },
      { text: "相談室に行く", effects: { mental: +30, social: +10 }, fbTitle: "✅ その通り", fbText: "大学や保健所には守秘義務のある専門家がいます。プロを頼ることは立派なスキルです。" }
    ]
  },
  {
    year: "4年目 春", title: "ワクチンの噂", opponent: "📱",
    text: "SNSで「HPVワクチンは危険、不妊になる」という投稿が拡散されている。",
    choices: [
      { text: "友達に拡散する", effects: { literacy: -30 }, fbTitle: "❌ 誤情報です", fbText: "「不妊になる」等の主張に科学的根拠はありません。誤情報を拡散しないよう、公的機関（厚労省等）を確認しましょう。" },
      { text: "公的情報を確認", effects: { literacy: +30 }, fbTitle: "✅ 素晴らしい", fbText: "不安な時こそエビデンスを確認しましょう。HPVワクチンは子宮頸がん予防に有効で、安全性も確認されています。" }
    ]
  },
  {
    year: "卒業", title: "卒業おめでとう！", opponent: "🎓", text: "4年間の大学生活が終わりました。あなたの選択の結果は…？", choices: [], isEnding: true }
];

// --- ゲームシステム ---
let currentScenarioIndex = 0;
let selectedCharData = null;
let stats = { physical: 50, mental: 50, literacy: 50, social: 50 };

function selectChar(id, element) {
  document.querySelectorAll('.char-card').forEach(c => c.classList.remove('selected'));
  element.classList.add('selected');
  document.getElementById('start-btn').disabled = false;
  
  const charMap = {
    'char1': { name: 'まじめタイプ', icon: '🧑‍🎓', bonus: { literacy: 10 } },
    'char2': { name: 'アクティブ', icon: '🏃', bonus: { physical: 10 } },
    'char3': { name: 'おっとり', icon: '😌', bonus: { mental: 10 } },
    'char4': { name: '社交家', icon: '😎', bonus: { social: 10 } }
  };
  selectedCharData = charMap[id];
}

function startGame() {
  if(!selectedCharData) return;
  for(let key in selectedCharData.bonus) stats[key] += selectedCharData.bonus[key];
  
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('player-avatar-display').innerText = selectedCharData.icon;
  document.getElementById('player-type-display').innerText = selectedCharData.name;
  
  updateStatDisplay();
  loadScenario(0);
}

function loadScenario(index) {
  if (index >= scenarios.length) return;
  const scene = scenarios[index];
  const container = document.getElementById('choices-container');
  
  document.getElementById('year-display').innerText = scene.year;
  document.getElementById('scene-title').innerText = scene.title;
  document.getElementById('scene-text').innerText = scene.text;
  
  const opponentIcon = scene.opponent || "❓";
  document.getElementById('opponent-icon').innerText = opponentIcon;
  container.innerHTML = '';

  if (scene.isEnding) {
    let finalMsg = "あなたの健康リテラシーは素晴らしいものでした！";
    if (stats.physical < 30) finalMsg = "健康面で少し無理をしすぎたかもしれません。";
    if (stats.literacy > 80) finalMsg = "ファクトチェックの達人になれました！";
    container.innerHTML = `<div style="padding:20px;background:#e3f2fd;border-radius:10px;"><strong>成績表:</strong><br>${finalMsg}<br><br><button class="btn" onclick="location.reload()">もう一度遊ぶ</button></div>`;
    return;
  }

  scene.choices.forEach((choice, i) => {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerText = choice.text;
    btn.onclick = () => makeChoice(index, i);
    container.appendChild(btn);
  });
}

function makeChoice(sceneIndex, choiceIndex) {
  const choice = scenarios[sceneIndex].choices[choiceIndex];
  if (choice.effects) {
    for (let key in choice.effects) {
      stats[key] = Math.max(0, Math.min(100, stats[key] + choice.effects[key]));
    }
  }
  updateStatDisplay();
  document.getElementById('fb-title').innerText = choice.fbTitle;
  document.getElementById('fb-text').innerText = choice.fbText;
  document.getElementById('feedback-modal').style.display = 'flex';
}

function nextScenario() {
  document.getElementById('feedback-modal').style.display = 'none';
  currentScenarioIndex++;
  loadScenario(currentScenarioIndex);
}

function updateStatDisplay() {
  document.getElementById('bar-physical').style.width = stats.physical + '%';
  document.getElementById('bar-mental').style.width = stats.mental + '%';
  document.getElementById('bar-literacy').style.width = stats.literacy + '%';
  document.getElementById('bar-social').style.width = stats.social + '%';
}