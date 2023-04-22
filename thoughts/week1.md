## 🌻Week 1 생각과제 : 웹 최적화🌻

---

### **1. 웹 최적화는 무엇일까?**

<br>

- 여러 방법들을 사용해서 웹사이트 성능을 개선시키는 과정

  - 더 효율적이고 빠른 웹사이트

  <br>

- **방법**

  - 프런트엔드 최적화 : 주로 UI/UX와 관련된 방법으로, 주로 HTML, JS, CSS, 이미지 등을 최적화.
  - 백엔드 최적화: 웹 서버, 앱 서버, 데이터베이스, DNS 등을 최적화.
  - 프로토콜 최적화 : 프로토콜을 업그레이드한다.
  - SEO(Search Engine Optimization, 검색 엔진 최적화)
  - 카피라이팅

  <br>

- **관련 툴**
  - [Google PageSpeed Insights](https://pagespeed.web.dev/)
  - [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)
  - [WebPageTest](https://www.webpagetest.org/)
  - Browser developer tools
    <br>
    <br>

### **2. 최적화가 필요한 이유는 무엇일까?**

  <br>

- 실행 속도가 빨라지고 사용이 편리해지므로 웹사이트 방문자가 사이트를 더 오래 이용할 수 있게 한다.
- 더 많은 사람들에게 노출되면서 홍보 효과를 기대할 수 있다.
- 최적화를 통해 웹사이트 방문자의 신뢰를 얻고 나아가 수익 창출까지 이어질 수 있다.

  <br>

### **3. 웹 최적화를 위해 어떤 개발을 해야 할까?**

- 사용자의 입장에서 어떤 부분이 불편하고 어떻게 개선되어야 좋을지 계속 고민하며 개발해야 한다고 생각

  <br>

- 불필요한 태그, 주석, 공백 최소화
- 최대한 semantic tag 사용
- 데스크탑 뿐 아니라 모바일에도 친화적인 코드 작성(접근성)
- SSL(https) 사용을 통해 보안 강화
- 핵심적인 웹 지표(Core web vitals)인 LCP, FID, CLS 고려

  - LCP(Largest Contentful Paint, 최대 콘텐츠 렌더링 시간) : 사용자의 URL 요청 이후 페이지에서 큰 콘텐츠들 로드하는 데 걸리는 시간
  - FID(First Input Delay, 최초 입력 반응 시간) : 사용자 동작에 웹페이지가 반응하는 데 걸리는 시간
  - CLS(Cumulative Layout Shift, 레이아웃 변경 횟수)

  <br>

### **4. 최적화를 위한 개발을 꼭 해야 할까?**

- 비즈니스 관점에서 최적화는 방문자를 고객으로 끌어들일 수 있는 큰 역할을 한다고 생각한다. 홍보나 수익 창출의 이유가 아니더라도 최적화는 사이트 방문자들의 사용성에 큰 영향을 미치는 부분이기 때문에 필수적이라고 생각한다.

  <br>

---

📚 **References**

- 웹 최적화 방법 및 필요성 블로그 ([https://velog.io/@dmchoi224/웹-표준-및-성능-최적화의-방법과-필요성](https://velog.io/@dmchoi224/%EC%9B%B9-%ED%91%9C%EC%A4%80-%EB%B0%8F-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94%EC%9D%98-%EB%B0%A9%EB%B2%95%EA%B3%BC-%ED%95%84%EC%9A%94%EC%84%B1), [https://sw-ryu.tistory.com/78](https://sw-ryu.tistory.com/78))
- 웹 최적화 회사 사이트([https://vwo.com/website-optimization/](https://vwo.com/website-optimization/))
- MDN ‘Optimization and performance’([https://developer.mozilla.org/en-US/docs/Web/Guide/Performance](https://developer.mozilla.org/en-US/docs/Web/Guide/Performance))
