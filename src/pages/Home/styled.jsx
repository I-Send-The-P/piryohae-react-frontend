import styled from "styled-components";

export const Menu = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 240px;
  gap: 13px;
`;

export const MenuItem = styled.div`
  position: relative;
  flex: 1;
  flex-shrink: 0;
  border-radius: 16px;
  background: #fff;
  padding: 10px 0 0 10px;
  height: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const MenuTitle = styled.h1`
  color: #000;
  font-family: Cafe24 Ssurround;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0px;
`;
export const MenuSubTitle = styled.span`
  color: #000;
  font-family: Cafe24 Ssurround air;
  font-size: ${(props) => (props.size === "small" ? "20px" : "30px")};
  font-style: normal;
  font-weight: ${(props) => (props.size === "small" ? 300 : 700)};
  line-height: normal;
  margin: 0px;
`;

export const MenuIcon = styled.img`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export const DefaultIcon = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  color: #000;
  text-align: right;
  font-family: NanumGothic;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const MenuButton = ({
  title,
  subTitle,
  icon,
  size = "big",
  onClick,
}) => {
  return (
    <MenuItem onClick={onClick}>
      <MenuSubTitle size={size}>{subTitle}</MenuSubTitle>
      <MenuTitle>{title}</MenuTitle>
      {icon ? <MenuIcon src={icon} /> : <DefaultIcon>&gt;</DefaultIcon>}
    </MenuItem>
  );
};

const BannerStyle = styled.div`
  width: 100%;
  height: 120px;
  background-color: #d9d9d9;
  border-radius: 16px;
`;
export const Banner = () => {
  return <BannerStyle></BannerStyle>;
};
