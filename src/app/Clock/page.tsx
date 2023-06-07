'use client';
import React, { useState, useEffect } from "react";

//タイマが呼び出される周期を1秒にする
const UPDATE_CYCLE = 1000

//localstorageで使用するキー
const KEY_LOCAL = 'KEY_LOCAL'

enum Locale {
  US = 'en-US',
  JP = 'ja-JP',
}

const getLocalFormString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US
    case Locale.JP:
      return Locale.JP
    default:
      return Locale.US
  }
}

export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date())
  const [locale, setLocale] = useState(Locale.US)
  
  //タイマーのセットをするための副作用
  useEffect(() => {
    //タイマーのセット
    const timer = setInterval(() => {
      setTimestamp(new Date())
    }, UPDATE_CYCLE)

    //クリーンアップ関数を私、アンマウント時にタイマの解除をする
    return () => {
      clearInterval(timer)
    }
    //初期描画時のみ実行する
  }, [])

  //localstorageから値を読み込むための副作用
  useEffect(() => {
    const saveLocale = localStorage.getItem(KEY_LOCAL)
    if (saveLocale !== null) {
      setLocale(getLocalFormString(saveLocale))
    }
    //初期描画時のみ実行する
  }, [])

  //localeが変化した時に、localstorageに値を保持するための副作用
  useEffect(() => {
    localStorage.setItem(KEY_LOCAL, locale)
    //依存配列にlocaleを私、localeが変化する度に実行するようにする
  })

  return (
    <div>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select 
          value={locale}
          onChange={(e) => setLocale(getLocalFormString(e.target.value))}>
            <option value="en-US">en-US</option>
            <option value="ja-JP">ja-JP</option>
        </select>
      </p>
    </div>
  )
}