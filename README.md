# 餐廳列表

使用Node.js + Express套件打造出的美食餐廳網站，
點擊餐廳和詳細資料可獲得餐廳詳細資訊、輸入餐廳名稱或是分類搜尋餐廳、
以及新增一筆新的餐廳資料、編輯修改餐廳的每一筆詳細資料和刪除餐廳功能。
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

- 使用者可以透過搜尋餐廳名稱來找到特定的餐廳

- 使用者點選地址旁的小圖標<i class="fas fa-location-arrow pr-2 fa-xs"></i>可連結到 Google Map

- 使用者可以新增餐廳資料增加一家餐廳

- 使用者可以透過編輯餐廳修改餐廳資料

- 使用者可以透過刪除功能刪除點選餐廳

## 畫面預覽

![index](/images/7.jpg)

![index2](/images/5.jpg)

![show](/images/6.jpg)

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
4. 設定暫時環境變數以連接 MongoDB 資料庫，請在終端機輸入：
```
export RESTAURANT_URI = "mongodb+srv://您的帳號:您的密碼@cluster0.euvhff2.mongodb.net/restaurant-list?retryWrites=true&w=majority"
```
5. 執行專案。在終端機輸入：
```
npm run dev
```
6. 於瀏覽器網址列輸入：
```
localhost:3000
```

## 使用工具

- [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) - 開發環境
- [Express](https://www.npmjs.com/package/express) - 應用程式架構
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - 模板引擎
- [Mongodb](https://account.mongodb.com/) - 文件資料庫
- [Mongoose](https://mongoosejs.com/) - 操作 MongoDB 的 ODM
- [Robo 3T](https://blog.robomongo.org/studio3t-free/) - 查看資料庫圖形介面
## 開發者

- [ZHENG-YOU-LU](https://github.com/ZHENG-YOU-LU)