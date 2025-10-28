import React from 'react';
import styles from './Marquee.module.css';
import Marquee from 'react-fast-marquee';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

function splitEmojiToSpan(str) {
    if (!str) return str;

    // 判斷環境是否支援 Intl.Segmenter
    const seg = typeof Intl !== "undefined" && Intl.Segmenter
        ? new Intl.Segmenter(undefined, { granularity: "grapheme" })
        : null;

    const parts = seg
        ? Array.from(seg.segment(str), s => s.segment)
        : Array.from(str);

    const isEmoji = ch => /\p{Extended_Pictographic}/u.test(ch);

    // 建立 React 元素陣列
    const elements = [];
    let textBuffer = "";

    for (const ch of parts) {
        if (isEmoji(ch)) {
            // 如果前面有文字，先輸出
            if (textBuffer) {
                elements.push(<span key={elements.length} className={cx("txt")}>{textBuffer}</span>);
                textBuffer = "";
            }
            // emoji 獨立成一個 <span>
            elements.push(<span key={elements.length}>{ch}</span>);
        } else {
            textBuffer += ch;
        }
    }
    if (textBuffer) {
        elements.push(<span key={elements.length} className={cx("txt")}>{textBuffer}</span>);
    }
    return elements;
}

function MarqueeView(props) {
    const marquee = props.data;
    return (
        <div className={cx("marquee")}>
            {marquee ? (
                <Marquee speed={50} loop={0}>
                    <a href={marquee.link} target="_blank" rel="noopener noreferrer">
                        {splitEmojiToSpan(marquee.text)} {splitEmojiToSpan(marquee.text)}
                    </a>
                </Marquee>
            ) : ""}
        </div>
    );
}

export default MarqueeView;