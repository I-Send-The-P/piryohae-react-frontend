import styled from "styled-components";
import { useEffect, useState } from "react";

export const Menu = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 240px;
  gap: 13px;
`;

export const MenuItem = styled.div`
  box-sizing: border-box;
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
  font-size: ${(props) => (props.size === "small" ? "20px" : "30px")};
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
      <MenuTitle size={size}>{title}</MenuTitle>
      {icon ? <MenuIcon src={icon} /> : <DefaultIcon>&gt;</DefaultIcon>}
    </MenuItem>
  );
};

const BannerStyle = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  background-color: #d9d9d9;
  border-radius: 16px;
  overflow: hidden;
`;
const BannerImage = styled.img`
  width: 100%;
  height: 100%;
`;
const IndexCircleContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const IndexCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.active ? "#000" : "#fff")};
  margin: 0px 5px;
`;

export const Banner = () => {
  const [banner, setBanner] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setBanner((banner) => (banner + 1 > 4 ? 1 : banner + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <BannerStyle>
      <BannerImage src={`png/banner${banner}.png`} />
      <IndexCircleContainer>
        {Array(4)
          .fill()
          .map((_, index) => (
            <IndexCircle
              onClick={() => setBanner(index + 1)}
              active={index + 1 === banner}
            />
          ))}
      </IndexCircleContainer>
    </BannerStyle>
  );
};
