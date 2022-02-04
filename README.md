웹연동 진행

> * 담당자: 노문택
> * 작업 브랜치: `feature-webRTC-FE`
220203 작업 내용 공유



<br>

#### 001. navbar css 수정

<br>

```css
/* public/css/navbar.css */

nav {
  height: 9vh;
  background: #7DABCF;
}
```



<br>

---



<br>

설 연휴 작업 내용 공유

> * 담당자: 박상현
> * 작업 브랜치: `feature-others`
> * 최근 수정일: 2022-02-03



<br>

### 001. 상담 시작하기 누르는 화면 

<br>

![image-20220202184742959](README.assets/image-first.png)

<br>

> 추후 로그인후에 vuex를 통해 id 저장후 fix할예정 





<br>

### 002. 세션 시작 (상담자)

> 상담자가 세션시작

<br>

![image-20220202184923127](README.assets/image-second.PNG)

<br>


> 상담자가 세션시작 메모 및 다른기능누를때 깨지는 현상있는데 css 파일로 수정작업필요 

<br>





<br>

### 003. 도중난입 (내담자)

<br>

![image-20220202185530769](README.assets/image-third.PNG)
![image-20220202185530769](README.assets/image-20220202185530769.png)

<br>

`views/profile/Profile.vue`

> 레이아웃을 대폭 바꿔서 상담사쪽 마이 페이지를 구현하였음...



<br>

> 내담자 난입 케이스 frame 이 늘어낫다 줄엇다해서 고정 fix가 필요하고 고정 fix후에 한줄로 배치해야됨 




<br>

---



<br>

설 연휴 작업 내용 공유

> * 담당자: 이수민
> * 작업 브랜치: `frontend`



<br>

### 001. 로그인

> * 개인 / 상담가 분리
> * 개인 / 상담가 중 선택하여 로그인 하도록 구현
