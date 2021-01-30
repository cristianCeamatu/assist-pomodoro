import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto 56px;
  max-width: 335px;
  border: 0.5px solid #828282;
  box-sizing: border-box;
  border-radius: 10px;
  background: ${({ theme }) => theme.themes[theme.mode].contactDetailsBg};

  article {
    padding: 24px 10px;
    display: flex;
    align-items: start;
    justify-content: center;
    font-size: 20px;
    line-height: 30px;

    &:not(:last-child) {
      border-bottom: 0.5px solid #828282;
    }

    .icon {
      flex-basis: 25%;
      text-align: right;
      padding-right: 11px;
      font-size: 22px;
      line-height: 36px;
    }

    .details {
      flex-basis: 75%;
      text-align: left;
      padding-right: 36px;

      h3 {
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 8px;
        color: ${({ theme }) => theme.themes[theme.mode].aboutTitle};
      }

      p,
      li {
        font-size: 16px;
        line-height: 18px;
        color: ${({ theme }) => theme.themes[theme.mode].aboutSubtitle};
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

  @media screen and (min-width: 992px) {
    border: 0;
    gap: 30px;
    margin: 8px auto;
    max-width: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(min-content, max-content);
    background: inherit;

    article {
      width: 326px;
      border: 1px solid #bdbdbd;
      box-sizing: border-box;
      border-radius: 8px;

      .icon {
        line-height: 42px;
      }

      .details {
        h3 {
          font-size: 26px;
          line-height: 36px;
        }

        p,
        li {
          font-size: 20px;
          line-height: 22px;
        }
      }
    }
  }
`;
