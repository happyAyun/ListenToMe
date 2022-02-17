# Listen to ME

> 웹 기술을 활용한 치유상담 플랫폼

<br>

## 📌 Intro

### 팀 소개

👂 **공통프로젝트 6반 5팀**

|  이름  | 직책 |   역할   |               세부 역할                |
| :----: | :--: | :------: | :------------------------------------: |
| 김유민 | 팀장 | Backend  |       스케줄링 및 REST API 개발        |
| 노문택 | 팀원 | Frontend |       WEB-RTC, 서버&인프라 담당        |
| 박상현 | 팀원 | Frontend | 영상인식 및 감성분석, 스티커 기능 개발 |
| 심아윤 | 팀원 | Backend  |       WEB-RTC, 서버&인프라 담당        |
| 이수민 | 팀원 | Frontend | 로그인 및 회원관리, 스케줄링 기능 개발 |

<br>

### 서비스 배경

- 코로나 블루로 인한 우울증, 무기력증 사례 증가
- 청년층 정신건강 상담이 급격하게 늘어남에 따라 마음 편하게, 가끔은 자신을 드러내지 않고 치유받을 수 있는 공간의 필요성 증대

- 언택트의 보편화

<br>

### 서비스 목표

#### 💙 당신의 마음을 치유하고 더불어 따뜻하고 희망찬 내일을 만드는 데 함께 하는 편안한 공간

<br>

### 주요 타겟

유저는 크게 상담사(상담을 하는 자) / 내담자(상담을 받는 자)로 구분

- 상담사 
  - 코로나로 인해 대면상담이 어려워진 상담사들
  - 자율적으로 근무하고 싶은 상담사들
  - 언택트 시대에 맞게 재택근무를 원하는 상담사들
- 내담자
  - 주변 사람들에게 마음을 터놓기 어려워하는 사람들
  - 크고 작은 일들로 속앓이를 하는 사람들
  - 자신을 드러내지 않고 상담받기 원하는 사람들

<br>

### 기술 스택

 <img src="https://img.shields.io/badge/spring%20boot-6DB33F?style=for-the-badge&logo=springBOOT&logoColor=white"> <img src="https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"><img src="https://img.shields.io/badge/tensorflow-F05032?style=for-the-badge&logo=TENSORFLOW&logoColor=white"><img src="https://img.shields.io/badge/WebRTC-FCC624?style=for-the-badge&logo=WEBRTC&logoColor=black"> <img src="https://img.shields.io/badge/HIBERNATE-000000?style=for-the-badge&logo=HIBERNATE&logoColor=white"><img src="https://img.shields.io/badge/JENKINS-DD0031?style=for-the-badge&logo=JENKINS&logoColor=white"><img src="https://img.shields.io/badge/CHART.js-#FF6384?style=for-the-badge&logo=CHART.js&logoColor=white">

<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> <img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=white"> <img src="https://img.shields.io/badge/jira-0052cc?style=for-the-badge&logo=jira&logoColor=white">

- Backend:  Spring boot(maven), MySQL
- Frontend: Vue.js
- DevOps: GitLab, Jenkins, Docker, JIRA, AWS

<br>

### ERD

![LIstentome_ERD](README.assets/LIstentome_ERD.png)

<br>



## 💡 서비스 소개

> 개발 기간 : 2022.01.10 - 2022.02.18 (총 6주)

### 폴더 구조 - Frontend
```
📦src
 ┣ 📂api
 ┃ ┗ 📜index.js
 ┣ 📂assets
 ┃ ┣ 📂images
 ┃ ┃ ┣ 📜counselor.png
 ┃ ┃ ┣ 📜follower1.png
 ┃ ┃ ┣ 📜logo_blue.png
 ┃ ┃ ┣ 📜logo_pink.png
 ┃ ┃ ┣ 📜logo_white.png
 ┃ ┃ ┣ 📜main-pbackground.jpg
 ┃ ┃ ┣ 📜start.png
 ┃ ┃ ┗ 📜start_blank.png
 ┃ ┗ 📜color-reference.png
 ┣ 📂components
 ┃ ┣ 📂accounts
 ┃ ┃ ┗ 📂snsLogin
 ┃ ┃ ┃ ┣ 📜Google.vue
 ┃ ┃ ┃ ┗ 📜Kakao.vue
 ┃ ┣ 📂css
 ┃ ┃ ┗ 📂feed
 ┃ ┃ ┃ ┗ 📜feed-item.scss
 ┃ ┣ 📂feed
 ┃ ┃ ┣ 📜FeedItem.vue
 ┃ ┃ ┗ 📜FeedModal.vue
 ┃ ┣ 📜errorPage.vue
 ┃ ┣ 📜NavigationBar.vue
 ┃ ┗ 📜PageNotFound.vue
 ┣ 📂router
 ┃ ┗ 📜index.js
 ┣ 📂util
 ┃ ┗ 📜http-common.js
 ┣ 📂views
 ┃ ┣ 📂accounts
 ┃ ┃ ┣ 📜changePassword.vue
 ┃ ┃ ┣ 📜findPassword.vue
 ┃ ┃ ┣ 📜Login.vue
 ┃ ┃ ┗ 📜Signup.vue
 ┃ ┗ 📂feed
 ┃ ┃ ┗ 📜IndexFeed.vue
 ┣ 📂vuex
 ┃ ┣ 📜actions.js
 ┃ ┣ 📜getters.js
 ┃ ┣ 📜mutations.js
 ┃ ┗ 📜store.js
 ┣ 📜App.vue
 ┗ 📜main.js
```

### 폴더 구조 - Backend
```
📦src
 ┣ 📂main
 ┃ ┣ 📂java
 ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┗ 📂web
 ┃ ┃ ┃ ┃ ┗ 📂curation
 ┃ ┃ ┃ ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜SwaggerConfig.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂account
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜AccountController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂feed
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FeedController.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂dao
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂user
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedDao.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserDao.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂model
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂user
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AuthenticationRequest.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChangepwdRequest.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Feed.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedMapping.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Hospital.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SignupRequest.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜User.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜BasicResponse.java
 ┃ ┃ ┃ ┃ ┃ ┗ 📜WebCurationApplication.java
 ┃ ┗ 📂resources
 ┃ ┃ ┗ 📜application.properties
 ┗ 📂test
 ┃ ┗ 📂java
 ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┗ 📂web
 ┃ ┃ ┃ ┃ ┗ 📂curation
 ┃ ┃ ┃ ┃ ┃ ┣ 📜SkeletonTest2ApplicationTests.java
 ┃ ┃ ┃ ┃ ┃ ┗ 📜WebCurationApplicationTests.java
```



### 로고 소개

<img src="README.assets/ListentoME_logo.png" alt="ListentoME_logo" style="zoom: 25%;" align="left"/>

Listen + 귀👂 + ' (쉼표)

- Listen + 👂 : 경청하다
- 쉼표 : 이야기를 하기위해, 듣기위해 쉬어가다

=> **소중한 당신의 이야기에 늘 귀 기울이다.**

<br>

### 주요 기능

#### 1. 스케줄링

![image-20220217135157496](README.assets/image-20220217135157496.png)

![image-20220217135345680](README.assets/image-20220217135345680.png)

![image-20220217135457476](README.assets/image-20220217135457476.png)

![image-20220217135534001](README.assets/image-20220217135534001.png)

![image-20220217135628681](README.assets/image-20220217135628681.png)

<br>

#### 2. 감정분석

![image-20220217135802706](README.assets/image-20220217135802706.png)

![image-20220217135859991](README.assets/image-20220217135859991.png)

<br>

#### 3. 메모

![image-20220217135951808](README.assets/image-20220217135951808.png)

![image-20220217140026801](README.assets/image-20220217140026801.png)

<br>

#### 4. 통계

![image-20220217140116095](README.assets/image-20220217140116095.png)

![image-20220217140149501](README.assets/image-20220217140149501.png)

<br>

### 기대효과

상담사

- 감정분석을 통해 내담자의 감정을 파악하여 양질의 상담을 제공할 수 있다.

- 원하는 시간에 상담을 개설하여 보다 유연한 근무가 가능하다.
- 리뷰, 통계 등을 통해 스스로 피드백할 수 있다.
- 상담 시 이전에 남긴 메모를 통해 내담자에 대해 더 깊이 파악할 수 있다.

내담자

- 편안한 장소에서 편안한 마음으로 상담에 임할 수 있다.
- 자신이 원하는 상담사에게 상담을 신청하여 받을 수 있다.
- 남들의 시선에서 자유로워 심리적 부담없이 누구나 상담을 받을 수 있다.
- 필요 시 자신을 드러내지 않고 상담을 받을 수 있다.
- 이전 상담때 남긴 메모를 언제든 확인할 수 있어 상담의 효과를 극대화할 수 있다. 

<br>

### 서비스 상세보기

|       구분       |                             링크                             |
| :--------------: | :----------------------------------------------------------: |
| ✏ 프로젝트 기록  | [Listen to ME](https://2dend.notion.site/2dend/Listen-to-ME-ca53f20b0d19472faa2e8688e6ccc870) |
| 📑 상세 기능 설명 | [WIKI](https://lab.ssafy.com/s06-webmobile1-sub2/S06P12A605/-/wikis/home) |

