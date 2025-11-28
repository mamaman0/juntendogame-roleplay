import { Scenario, GameStats } from './types';

export const INITIAL_STATS: GameStats = {
  Physical: 50,
  Mental: 50,
  Literacy: 50,
  Social: 50,
};

export const SCENARIOS: Scenario[] = [
  {
    id: 1,
    year: "1年目 春",
    title: "新歓コンパの洗礼",
    text: "サークルの新歓で先輩が盛り上がっている。「俺の酒が飲めないのか！一杯だけなら大丈夫だろ？」と強く勧められた。",
    choices: [
      {
        text: "場の空気を読んで飲む",
        statEffects: { Physical: -20, Social: 10 },
        feedback: "⚠️ **要注意**\n「一杯だけ」が一気飲みの引き金になることがあります。短時間の大量飲酒（ビンジ飲酒）は急性アルコール中毒や事故のリスクを高めます。",
        isCorrect: false
      },
      {
        text: "「体質的に飲めません」と断る",
        statEffects: { Physical: 10, Literacy: 10, Social: 5 },
        feedback: "✅ **ナイス判断！**\nアルコールパッチテスト等で自分の体質を知っておくことは大切です。強要はハラスメントにあたります。",
        isCorrect: true
      }
    ]
  },
  {
    id: 2,
    year: "1年目 夏",
    title: "初めての夜",
    text: "パートナーといい雰囲気に。しかし、コンドームを持っていないことに気づいた。相手は「外に出せば大丈夫だよ」と言っている。",
    choices: [
      {
        text: "相手を信じて受け入れる",
        statEffects: { Physical: -30, Literacy: -20, Social: 5 },
        feedback: "❌ **ストップ！**\n外出し（膣外射精）は避妊効果が低く、性感染症は全く防げません。クラミジアや梅毒などは粘膜接触で感染します。自分を守るためにNoと言う勇気が必要です。",
        isCorrect: false
      },
      {
        text: "「今日はやめておこう」と断る",
        statEffects: { Physical: 10, Literacy: 20, Social: 10 },
        feedback: "✅ **素晴らしい選択**\n同意（コンセント）はいつでも撤回可能です。避妊具がない場合、性行為をしないという選択は、お互いの体を尊重する行為です。",
        isCorrect: true
      }
    ]
  },
  {
    id: 3,
    year: "2年目 秋",
    title: "試験前の誘惑",
    text: "明日は大事なテストだが眠い。SNSで『集中力が爆上がりする海外サプリ』が話題になっているのを見つけた。",
    choices: [
      {
        text: "ネットで購入して飲む",
        statEffects: { Physical: -20, Mental: -10, Literacy: -30 },
        feedback: "⚠️ **危険です**\n成分不明のサプリや『スマートドラッグ』には、健康被害や依存のリスクがあります。ネットの情報を鵜呑みにせず、公的機関の情報を確認しましょう。",
        isCorrect: false
      },
      {
        text: "今日は早く寝て朝やる",
        statEffects: { Physical: 10, Mental: 10, Literacy: 10 },
        feedback: "✅ **正解です**\n睡眠不足は記憶の定着を妨げます。一夜漬けよりも、十分な睡眠をとる方がパフォーマンスは向上します。",
        isCorrect: true
      }
    ]
  },
  {
    id: 4,
    year: "3年目 冬",
    title: "メンタルの不調",
    text: "就活と実習が重なり、眠れない日が続いている。「誰かに相談したいけど、迷惑かな…」と考えてしまう。",
    choices: [
      {
        text: "一人で耐える",
        statEffects: { Physical: -10, Mental: -30 },
        feedback: "🤔 **無理は禁物**\n「つらい」と声を上げることは弱さではありません。我慢しすぎると回復に時間がかかります。",
        isCorrect: false
      },
      {
        "text": "大学の相談室や友人に話す",
        "statEffects": { Mental: 30, Social: 10, Literacy: 10 },
        "feedback": "✅ **その通り**\n早期の相談は悪化予防につながります。大学には守秘義務のあるカウンセラーがいます。専門家を頼るスキルも重要です。",
        isCorrect: true
      }
    ]
  },
  {
    id: 5,
    year: "4年目 春",
    title: "ワクチンの噂",
    text: "「HPVワクチンは不妊の原因になる」という投稿がSNSで拡散されている。友人が不安そうにしている。",
    choices: [
      {
        text: "「怖いから打たない方がいいよ」と言う",
        statEffects: { Literacy: -30, Physical: -10 },
        feedback: "❌ **誤情報です**\n「ワクチンが不妊の原因になる」という科学的根拠はありません。誤情報の拡散に加担しないよう、一次情報（厚労省など）を確認しましょう。",
        isCorrect: false
      },
      {
        text: "公的機関のサイトを一緒に見る",
        statEffects: { Literacy: 30, Social: 10 },
        feedback: "✅ **素晴らしいリテラシー**\n不安な時こそ、エビデンス（科学的根拠）を確認することが重要です。HPVワクチンは子宮頸がん等の予防に有効です。",
        isCorrect: true
      }
    ]
  }
];