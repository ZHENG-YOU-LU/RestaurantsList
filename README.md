# 餐廳列表

使用Node.js + Express套件打造出的美食餐廳網站，使用者可以註冊帳號登入，或以 Facebook 認證登入使用。
點擊餐廳和詳細資料可獲得餐廳詳細資訊、輸入餐廳名稱或是分類搜尋餐廳、
以及新增一筆新的餐廳資料、編輯修改餐廳的每一筆詳細資料和刪除餐廳功能。

## 使用者驗證

- 使用者可以註冊帳號登入。
- 或以 Facebook 第三方認證登入使用。

## 功能列表

- 使用者可以在首頁看到所有餐廳與它們的簡單資料：
  - 餐廳照片
  - 餐廳名稱
  - 餐廳分類
  - 餐廳評分

- 使用者可以點擊進去看餐廳的詳細資訊：
  - 類別
  - 地址
  - 電話
  - 描述
  - 圖片

- 使用者可以透過搜尋餐廳名稱及分類來找到特定的餐廳

- 使用者點選地址旁的小圖標<i class="fas fa-location-arrow pr-2 fa-xs"></i>可連結到 Google Map

- 使用者可以新增餐廳資料增加一家餐廳

- 使用者可以透過編輯餐廳修改餐廳資料

- 使用者可以透過刪除功能刪除點選餐廳

## 畫面預覽

![index](/images/8.jpg)

![index2](/images/9.jpg)

![show](/images/10.jpg)

## 安裝
1. 複製專案，在終端機輸入：
```
git clone https://github.com/ZHENG-YOU-LU/RestaurantsList
```
2. 進入專案資料夾，在終端機輸入：
```
cd RestaurantsList
```
3. 安裝`npm`套件。在終端機輸入：
```
npm init -y
```
4. 設定env變數 請參考.env.example檔案設定FB、Mongoose環境變數，並將檔名改為.env
```
FACEBOOK_ID=SKIP
FACEBOOK_SECRET=SKIP
FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
SESSION_SECRET=ThisIsMySecret
MONGODB_URI=mongodb+srv://您的帳號:您的密碼@cluster0.euvhff2.mongodb.net/restaurant-list?retryWrites=true&w=majority
PORT=3000
```
5. 建立種子資料，在終端機輸入:
```
npm run seed
```
6. 執行專案。在終端機輸入：
```
npm run dev
```
7. 於瀏覽器網址列輸入：
```
localhost:3000
```
8. 可使用種子數據中的兩個測試帳戶登錄
```
email: user1@example.com
password: 12345678
--------------------------
email: user2@example.com
password: 12345678
```

## 使用工具

- [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) - 開發環境
- [Node.js](https://www.casper.tw/development/2022/01/10/install-nvm/) - 執行環境
- [Sourcetree](https://www.sourcetreeapp.com/) - git 的 GUI 管理軟體

- [Mongodb](https://account.mongodb.com/) - 文件資料庫
- [Mongoose](https://mongoosejs.com/) - 操作 MongoDB 的 ODM
- [Robo 3T](https://blog.robomongo.org/studio3t-free/) - 查看資料庫圖形介面

- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) - 網頁模板套件
- [Express](https://www.npmjs.com/package/express) - 應用程式架構
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - 模板引擎
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) --處理密碼雜湊
- [Express-Session](https://www.npmjs.com/package/express-session/v/1.17.1) - 儲存認證結果
- [Connect-flash](https://www.npmjs.com/package/connect-flash) - 建立快閃訊息
- [Dotenv](https://www.npmjs.com/package/dotenv) - 讀取 .env 檔
- [Method-override](https://www.npmjs.com/package/method-override) - Express 的 middleware(中介軟體)
- [Passport](https://www.npmjs.com/package/passport) - 認證使用者
- [passport-facebook](http://www.passportjs.org/packages/passport-facebook/) - 認證facebook使用者
- [passport-local](http://www.passportjs.org/packages/passport-local/) - 認證local使用者


## 開發者

- [ZHENG-YOU-LU](https://github.com/ZHENG-YOU-LU)