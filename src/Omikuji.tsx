import React, { useState } from 'react'
import './Omikuji.css'

const Omikuji = () => {
  const [fortune, setFortune] = useState<string | null>(null)

  // クリックイベント
  const handleClick = () => {
    // おみくじの結果
    const fortunes = ['大吉', '中吉', '小吉', '吉', '凶', '大凶']
    // 配列からランダムにおみくじの結果を選ぶ
    const number = Math.floor(Math.random() * fortunes.length)
    // 結果を表示する
    setFortune(fortunes[number])
  }

  return (
    <>
      <button onClick={handleClick}>おみくじを引く</button>
      {/* fortuneがtrueの場合に？以降をレンダリングする */}
      <p>{fortune ? `あなたの運勢は...${fortune}です!` : ''}</p>
    </>
  )
}

export default Omikuji
