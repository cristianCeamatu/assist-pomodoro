import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 20px;
  background: #fcfcfc;
  border: 0.5px solid #828282;
  box-sizing: border-box;
  border-radius: 10px;

  article {
    padding: 24px 10px;
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
      font-size: 18px;
      line-height: 32px;
    }

    .details {
      flex-basis: 75%;
      text-align: left;

      h3 {
        font-size: 20px;
        line-height: 30px;
      }

      p,
      li {
        font-size: 16px;
        line-height: 18px;
        color: #4f4f4f;
      }

      li:before {
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
`;
