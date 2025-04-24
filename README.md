# ESG-Frontend

## 專案版號
esg 0.1.0

## 軟體版本需求
- **Node.js:** v20.12.2
- **npm:** v10.3.0
- **next** v14.2.3


## 如何開始

### Getting Started
1. 複製此存儲庫到您的本地環境：

    ```bash
    git clone https://github.com/tvbstw/esg-frontend.git
    ```

2. 進入專案目錄：

    ```bash
    cd esg-frontend
    ```

3. 安裝所需依賴：

    ```bash
    npm install
    ```

### 開發環境建立&啟動
- Create .env file from .env.example file and fill in the values.

1. 啟動開發伺服器：

    ```bash
    npm run dev
    ```

2. 打開瀏覽器並訪問 `http://localhost:3000`，即可查看 ESG-Frontend 網站。

3. Test environment https://esg-frontend-staging.tvbs.com.tw/

4. Production:  https://esg.tvbs.com.tw/

5. 使用API位置為 https://esg-api-staging.tvbs.com.tw (測試) https://esg-api.tvbs.com.tw (正式)，詳情可參閱env檔


## 注意事項
- 請確保已安裝對應版本的 Node.js 和 npm。
- 在提交代碼之前，請執行所有測試並確保其通過。

## 問題紀錄
- 若遇到依賴安裝問題，請嘗試刪除 `node_modules` 目錄並重新安裝依賴。
- 若遇到版本兼容性問題，請參考各套件的官方文檔進行調整。

> [!NOTE]  
> As per the conclusion keep this project in Page route do not migrate to App route.
