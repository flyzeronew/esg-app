This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


關於輪播套件的設定

accessibility：啟用鍵盤導航。
adaptiveHeight：根據每個幻燈片的高度自動調整幻燈片容器的高度。
arrows：顯示左右箭頭。
autoplay：自動播放幻燈片。
autoplaySpeed：自動播放速度（毫秒）。
centerMode：將當前幻燈片置於幻燈片中心。
dots：顯示點。
fade：使用淡入淡出效果切換幻燈片。
focusOnSelect：當點擊幻燈片時，將焦點設置為該幻燈片。
infinite：啟用無限循環。
initialSlide：初始化時要顯示的幻燈片索引。
lazyLoad：啟用延遲加載圖片。
pauseOnHover：當滑鼠懸停在幻燈片上時，暫停自動播放。
responsive：自定義響應式設置。
rows：在幻燈片中顯示多行幻燈片。
slidesPerRow：每行顯示的幻燈片數量。
slidesToShow：一次顯示的幻燈片數量。
slidesToScroll：每次滑動幾個幻燈片。
speed：幻燈片切換速度（毫秒）。
swipe：啟用滑動手勢。
swipeToSlide：啟用滑動到指定幻燈片。
touchMove：啟用觸摸移動。
variableWidth：幻燈片寬度可變。
vertical：垂直滑動。


以下是 react-slick 中一些常見的設定選項及其可能的值：

accessibility: 布爾值 (true 或 false)，表示是否啟用鍵盤導航。
adaptiveHeight: 布爾值 (true 或 false)，表示是否根據每個幻燈片的高度自動調整幻燈片容器的高度。
arrows: 布爾值 (true 或 false)，表示是否顯示左右箭頭。
autoplay: 布爾值 (true 或 false)，表示是否自動播放幻燈片。
autoplaySpeed: 數值，表示自動播放速度（毫秒）。
centerMode: 布爾值 (true 或 false)，表示是否將當前幻燈片置於幻燈片中心。
dots: 布爾值 (true 或 false)，表示是否顯示點。
fade: 布爾值 (true 或 false)，表示是否使用淡入淡出效果切換幻燈片。
focusOnSelect: 布爾值 (true 或 false)，表示是否當點擊幻燈片時將焦點設置為該幻燈片。
infinite: 布爾值 (true 或 false)，表示是否啟用無限循環。
initialSlide: 數值，表示初始化時要顯示的幻燈片索引。
lazyLoad: 布爾值 (true 或 false)，表示是否啟用延遲加載圖片。
pauseOnHover: 布爾值 (true 或 false)，表示是否當滑鼠懸停在幻燈片上時暫停自動播放。
responsive: 物件，表示自定義響應式設置。
rows: 數值，表示在幻燈片中顯示多行幻燈片。
slidesPerRow: 數值，表示每行顯示的幻燈片數量。
slidesToShow: 數值，表示一次顯示的幻燈片數量。
slidesToScroll: 數值，表示每次滑動幾個幻燈片。
speed: 數值，表示幻燈片切換速度（毫秒）。
swipe: 布爾值 (true 或 false)，表示是否啟用滑動手勢。
swipeToSlide: 布爾值 (true 或 false)，表示是否啟用滑動到指定幻燈片。
touchMove: 布爾值 (true 或 false)，表示是否啟用觸摸移動。
variableWidth: 布爾值 (true 或 false)，表示是否幻燈片寬度可變。
vertical: 布爾值 (true 或 false)，表示是否垂直滑動。
