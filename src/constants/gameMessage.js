const gameMessage = Object.freeze({
  INPUT: {
    NAME: "코치의 이름을 입력해 주세요. (, 로 구분)\n",
    CANNOT_EAT: (name) => `${name} (이)가 못 먹는 메뉴를 입력해 주세요.\n`,
  },

  OUTPUT: {
    START: "점심 메뉴 추천을 시작합니다.\n",
    RESULT_TITLE: "메뉴 추천 결과입니다.\n[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]",
    RESULT: (name, values) => `[ ${name} | ${values.join(" | ")} ]`,
    EXIT: "\n추천을 완료했습니다.",
  },
});
export default gameMessage;
