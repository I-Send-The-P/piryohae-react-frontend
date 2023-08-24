import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";

const postCodeStyle = {
  width: "400px",
  height: "400px",
};

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DaumMapModal = ({ setModalVisible, setAddress }) => {
  const onCompletePost = (data) => {
    setAddress(data.address);
    setModalVisible(false);
  };
  return (
    <Modal>
      <DaumPostcode
        style={postCodeStyle}
        onComplete={onCompletePost}
      ></DaumPostcode>
    </Modal>
  );
};
