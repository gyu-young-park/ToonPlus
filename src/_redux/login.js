const LOG_IN = "LOG_IN"
const LOG_OUT = "LOG_OUT"

/* 액션 생성함수 만들기 */
// 액션 생성함수를 만들고 export 키워드를 사용해서 내보내주세요.
export const setLogin = () => ({ type: LOG_IN });
export const setLogout = () => ({ type: LOG_OUT });

/* 초기 상태 선언 */
const initialState = {
  authStatus: false
};

/* 리듀서 선언 */
// 리듀서는 export default 로 내보내주세요.
export default function login(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        authStatus: true
      };
    case LOG_OUT:
      return {
        ...state,
        authStatus: false
      };
    default:
      return state;
  }
}