import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: right;
  padding: 16px 20px;
  font-size: 12px;
  line-height: 22px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;

  p {
    &:first-child {
      color: ${(props) =>
        props.theme.mode === 'light' ? '#4F4F4F' : '#828282'};
    }

    &:last-child {
      color: ${(props) =>
        props.theme.mode === 'light' ? '#BDBDBD' : '#F2F2F2'};
    }
  }

  .switch {
    position: relative;
    display: block;
    width: 28px;
    height: 16px;
    background: #d7f4ec;
    border-radius: 20px;
  }

  .switch:after {
    position: absolute;
    content: '';
    left: 0;
    top: -1px;
    width: 18px;
    height: 18px;
    background: #6dd7b9;
    border: 4px solid #f2f2f2;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    border-radius: 50px;
  }

  #autoplay.checkbox:checked + .switch::after {
    left: 14px;
  }

  #autoplay.checkbox {
    display: none;
  }
`;
