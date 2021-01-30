import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 20px 56px;
  border: 0.5px solid #828282;
  box-sizing: border-box;
  border-radius: 10px;
  background: ${(props) =>
    props.theme.mode === 'light' ? '#fcfcfc' : '#252836'};

  article {
    padding: 24px 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    line-height: 30px;

    &:not(:last-child) {
      border-bottom: 0.5px solid #828282;
    }

    .icon {
      flex-basis: 25%;
      text-align: right;
      align-self: start;
      padding-right: 11px;
      font-size: 22px;
      line-height: 36px;
    }

    .details {
      flex-basis: 75%;
      text-align: left;

      h3 {
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 8px;
      }

      p,
      li {
        font-size: 16px;
        line-height: 18px;
        color: ${(props) =>
          props.theme.mode === 'light' ? '#4f4f4f' : '#bdbdbd'};
      }

      li {
        margin-bottom: 8px;
        &:before {
          content: '';
          width: 8px;
          height: 8px;
          background: #c4c4c4;
          display: inline-block;
          border-radius: 100%;
          margin-right: 8px;
          margin-bottom: 2px;
        }
      }
    }
  }
`;
