# 期中個人履歷 B06208030 地理二 何承諭

## 參考網站

本次作業參考一履歷進行改寫，但除參考網站外觀效果以外，**所有程式碼皆為手動撰寫，並無使用模板來搭配**。 <br>
除參考他人的個人履歷外，我也使用了網路上可取得的一些套件，包含了Bootstrap, Chart.js, Openlayers, jQuery,與使用icon的Font Awesome。 <br>


參考履歷：http://trimatrixlab.com/store/flatrica/index-video.html <br>
BootStrap：https://getbootstrap.com/ <br>
Chart.js：https://www.chartjs.org/ <br>
OpenLayers：https://openlayers.org/ <br>
jQuery：https://jquery.com/ <br>
FontAwesome：https://fontawesome.com/ <br>
W3Schools：https://www.w3schools.com/ <br>


## 實作過程 - html

在本次履歷的架構中我主要做了四個div，包含了 背景、個人簡介欄、內容說明欄、以及Navbar，於其中我使用了許多Bootstrap的Component進行外觀的設計，並利用偵測螢幕寬度的方式寫了 **能夠適應各螢幕寬度的CSS** 。 <br>

### 背景
背景使用上課所教的div內加背景圖片，經過模糊而得。 <br>

### 個人簡介欄
在個人簡介欄方面，利用position進行浮空div的設計，以達到重疊div的效果，再利用各細項屬性進行設計。 <br>

### 內容說明欄
內容說明欄使用Bootstrap所提供的grid layout進行版面配置，再依各個class區分每一個內容欄欲更改的細項外觀設計。 <br>

### Navbar
Navbar的部分由於Bootstrap並無提供位於側面的版型，因此我使用W3School提供的範本進行修改而成。<br>

## 實作過程 - JavaScript

JavaScript的程式碼大致可以分為三個部分，分別是網頁主要的控制、Chart.js圖表的生成、與OpenLayers地圖的生成。<br>

### index.js
在網頁控制的程式碼當中，主要包含了Side Navbar的控制(onclick scroll)，以及在不同的螢幕寬度下所該做出的版面控制反應等等。<br>

### chart.js
控制圖表的生成，包含螢幕在過小時圖表改為使用直條長條圖與Hover等等。

### openlayers.js
控制地圖的生成，以及 Map Popup 的元素。
