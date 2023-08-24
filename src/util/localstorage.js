export const getMemberId = () => {
  return localStorage.getItem("memberId");
};

export const setMemberId = (memberId) => {
  localStorage.setItem("memberId", memberId);
};
