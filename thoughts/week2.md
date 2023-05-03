## 🌻Week 2 생각과제 : React 프로젝트 폴더구조 설계🌻

---

## **1. Presentation Component - Container Component ↔ Custom hook ↔ Atomic를 비교해보자!**

<br>

### **1-1. Presentation Component - Container Component**

- 리액트의 가장 기본적이고 유명한 디자인 패턴

- Container Component에서 데이터 처리, Presentation Component에서 데이터를 출력

> **Container Component** : 데이터 처리, 앱의 상태나 로직 제어 담당. 렌더링이 필요한 데이터를 props로 Presentation Component에게 전달한다.

> **Presentation Component** : DOM 마크업과 스타일 담당. 데이터 처리 능력은 없다. 데이터 관련된 부분들은 상위 컴포넌트의 props를 통해 받는다.

  <br>

### **1-2. Component - Custom hooks**

- 기존 presentation, container 패턴에서의 로직을 hooks로 관리
- 기존의 문제(공통 로직을 다른 container 컴포넌트로 넘겨주지 못함) 해결
- UI 재사용 + 로직 재사용 가능해짐!

  <br>

### **1-3. Atomic 패턴**

- 재사용성이 강하게 설계
- 리액트 컴포넌트를 원자(Atom) 단위로 설계, 가장 작은 단위에서 결합하여 만드는 형태
- 초기 개발 시간이 많이 소요, 중장기적으로는 개발 기간 단축

## **2. 어떤 방식을 언제 택해야 좋을까?**

- 프로젝트마다 특성이 다르기 때문에 각 패턴의 장단점을 고려해 상황에 맞게 적용하는 것이 필요할 것 같다.
- Custom Hooks는 로직을 재활용하는 것이 중요한 프로젝트에서 사용하면 좋을 것 같다. 하지만 컴포넌트와 로직을 잘 분리해서 활용해야 하기 때문에 이 부분에 대한 이해가 잘 된 상태에서 사용해야 제대로 활용할 수 있을 것 같다.
- Atomic의 경우에는 UI 요소들을 잘게 쪼개 재사용 하는 것이 유리한 프로젝트에서 사용하면 유용할 것 같다.

  <br>

## **3. 프론트엔드에게 디자인 패턴이란 어떤 존재일까?**

- 프로젝트와 팀원의 특성을 고려해 적절한 디자인 패턴을 선택한다면 개발 기간을 단축하고 일의 효율을 높여주는 도구가 될 수 있다고 생각한다.
  <br>

---

📚 **References**

- 리액트 컴포넌트 설계 블로그글
  - https://velog.io/@ahndong2/React-Component-%EC%84%A4%EA%B3%84
  - https://velog.io/@e_juhee/React%EC%9D%98-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0-%EC%84%B8%EA%B0%80%EC%A7%80
  - https://doiler.tistory.com/38
  - https://www.nextree.io/react-design-pattern/
  - https://woong-jae.com/react/220609-react-design-pattern
