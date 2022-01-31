구현한 방법

1.npx create-react-app을 이용하여 프로젝트 생성
2.주어진 컴포넌트 폴더 내 파일 생성
3.각 컴포넌트 파일마다 export default로 App.js와 연결
4.Styled-component를 이용하여 CSS 디자인

구현한 이유
1.wanted_pre_onboarding 지원 기술 과제
2.conponent 나누기, Styled-component 사용하기 등 학습 내용 복습

구현하면서 어려웠던 점 및 해결 방법

1.정해진 UI 디자인의 위치를 벗어나 위치 재설정
2.경로 설정을 잘못하여 is not defined 에러 발생

자세한 실행 방법

1.Toggle: useState 상태 저장 함수를 이용하여 기본값 false를 넣고 handler 함수를 만들어 상태 값을 true, false(boolean)로 바꾸며 Styled-component를 이용해 상태 값이 변경될 때마다 CSS 디자인을 변경하면서 화면에 보여준다.

2.Tag: 기본 Tag를 설정해놓고 useState의 setTags로 기존 배열 요소 뒤에 새로 입력한 값을 하나씩 추가해 준다. 새로운 값을 추가해 주는 방법은 handleAdd라는 add 함수를 만들고 filter 메서드를 이용해 새로 입력한 값과 같은 값을 변수에 할당하고 할당된 값이 조건에 만족하면 tags의 배열에 setTags를 이용해 event.target.value(새로 입력한 data)를 추가해 준다. 값을 제거하는 방법은 remove 함수를 만들어 filter로 해당 index와 같지 않은 값을 보여준다.

3.Tab: 객체로 된 배열을 만들어주고 useState의 기본 값을 Number로 지정해 준 뒤 return에서 map을 이용해 menuArr를 한 번씩 돌면서 두 번째 parameter 값인 index를 handler의 parameter 값에 넣어줘 useState의 값을 변경해준다. select 된 Tab의 배경색을 바꿔주는 방법은 useState 값이 map의 두 번째 parameter인 index 값과 같으면 focused의 css 설정값을 보여준다.

4.Modal: useState의 초깃값을 boolean 값인 false로 설정해 주고 handler 함수를 이용해 boolean 값을 변경해 준다. boolean 값이 true가 되면 modal 창을 띄어주고 다시 false가 되면 modal 창을 닫아준다. useState에 저장된 boolean 값은 on/off 스위치 역할을 한다.

5.ClickToEdit: cache 메서드로 name, age의 기본 설정값을 useState에 초깃값으로 저장 후 보여주며 handleValueChange와 value 값(name, age)을 MyInput 함수에 props로 보내 input 창에 useState의 isEditMode가 true로 값이 바뀌면 useRef와 useEffect를 이용해 커서를 focus 해주도록 구현하며 handleClick으로 isEditMode를 on 해주고 input 태그의 onBlur 메서드로 handleBlur 함수를 작동해 isEditMode를 off 해준 뒤 newValue 값으로 변경해 준다. 

6.AutoComplete: