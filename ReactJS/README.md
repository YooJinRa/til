# React
- javascript
- 데이터 중심으로 움직임

## Conponent
- 데이터와 화면을 하나로 묶어 둔 덩어리
```
// :::: Conponent 컴포넌트
class LikeButton extends React.Component {
    constructor(props) {
        super(props);

        // :::: 데이터 부분(데이터 중심으로) : 화면 바뀌는 부분을 state로 만든다.
        this.state = {liked: false}; 
    }
    render() {
        if (this.state.liked) {
            return 'You like this';
        }

        // :::: 화면 부분
        return React.createElement('button', {onClick: () => this.setState({liked: true})}, 'Like'); 
    }
}
```
- 우리가 만든 컴포넌트 이름은 반드시 대문자로 시작해야함

## 주의사항
- 객체를 함부로 바꾸지 마라, 복사해라(불변성)

## React 설정하기
### jsx 설정
- babel 라이브러리 추가
- script type="text/babel" 추가
```
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="text/babel">
    //내용
</script>
```

- 버전에 따라 ReactDOM 호출 코드 차이
```
// :::: 원시적인 방법
ReactDOM.render(React.createElement(LikeButton), document.querySelector('#root'));

// :::: React 17버전 코드
//ReactDOM.render(<LikeButton />, document.querySelector('#root')); 

// :::: React 18버전 코드
ReactDOM.createRoot(document.querySelector('#root')).render(<LikeButton />);
```