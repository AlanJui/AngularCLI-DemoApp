# AngularCLI-DemoApp 專案指引

Angular 4 + CLI + RESTful API 的「示範用程式碼」，用以往後專案在「軟體架構」參考之用。

## 程式開發作業流程

### 開發伺服器啟動作業

以下之指令，將啟動「開發作業用」之 Web 伺服器，因此，可用 Web 瀏覽器觀察輸出結果。

但......不僅如此，專案中的原始程式碼，自此之後便在監視之中，只要 ng 察覺有 .ts, .html, .css 檔案的內容有所變更；或是有相關檔案的增加／刪除，亦將重新進行「原始程式碼」的「組建（Build）作業」。

終端機指令：
```$xslt
ng serve
```

伺服器網址： http://localhot:4200

### 程式碼產生作業

Angular CLI 提供 `Code scaffolding` 功能，程式開發者可將之當作「程式碼產生器」使用。

終端機指令：
```$xslt
ng generate component <component-name>
```

簡化法：
```$xslt
ng g c <component-name>
```

其它尚有......
  - directive
  - pipe
  - service
  - class 
  - guard
  - interface
  - enum
  - module

### 組建（Build）作業

編譯原始程式碼，產生執行程式碼；同時並進行相關檔案的打包工作（如：.css 、 .js 、......）。

打包後的產出將置入「目錄」： `dist` 之中。

終端機指令：
```$xslt
ng build
```

### 測試作業

#### 單元測試（Unit Tests）作業

單元測試所採用之技術為： [Karma](https://karma-runner.github.io)。

終端機指令：

```$xslt
ng test
```

#### 功能測試 (End-to-end Tests) 作業

Angular 所謂的 End-to-end Test，依其「目的」，大致可視作軟體工程之「整合測試」或「功能測試」。此處視作「程式開發人員」所執行的「功能測試」。

功能測試所採用之技術為：[Protractor](http://www.protractortest.org/)。

既稱：功能測試，當然，專案欲開發之系統得先啟動。所以，於「單元測試」不同之處，請記得先執行 `ng serve` ，將專案的系統啟動後；再依據以下之指令，執行功能測試。

終端機指令：
```$xslt
ng e2e
```


---

## 測試作業流程

### 測試機組建作業

終端機指令：
```$xslt
ng build --dev --env=staging
```


---

## 上線作業流程

### 正式機組建作業

終端機指令：
```$xslt
ng build --prod
```

### 模擬正式機運作

若有必要，可在開發機，透過以下指令，模擬「正式機」執行作業。

終端機指令：
```$xslt
ng serve --prod
```

## 參考指南

對於 Angular CLI 若有指令操作不熟悉之問題，可隨時在「終端機」，直接以 `ng help` 指令進行查詢。

若是仍感說明不足，亦可藉由網路文件：[Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md)，查閱更詳盡之細節說明。
