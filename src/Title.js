import styled from "styled-components";

const Title = () => {
  return (
    <TitleStyled>
      <div className="header">
        <span className="header__title">
          <b>
            <i>
              Air<span className="accent-color">Smart</span>
            </i>
          </b>
        </span>
        <br />
        <span className="header__subtitle">
          Clean Air. <span className="accent-color">Smart Living.</span>
        </span>
      </div>
    </TitleStyled>
  );
};

const TitleStyled = styled.div`
  .header {
    margin-bottom: 10px;
  }

  .header__title {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 3em;
    margin-bottom: 0px;
    padding: 0;
    font-weight: 700;
  }

  .header__subtitle {
    letter-spacing: 2px;
  }

  .accent-color {
    color: var(--accent-color);
  }
`;

export default Title;
