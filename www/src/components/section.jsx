import styled from 'styled-components';

const Section = styled.div`
  & > * {
    display: flex;
    @media (max-width: 620px){
      flex-direction: column;
    }
  }
  &:not(:first-child) {
    border-top: 3px solid lightgrey;
  }
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  .title {
    font-size: 1.5rem;
    flex: 0 0 15rem;
    padding: 1rem;
    @media (max-width: 620px){
      flex: 0 0;
    }
  }
  .description {
    padding: 1rem;
    flex: 1 0;
  }
  .links {
    display: flex;
    justify-content: center;
    align-items:center;
  }
  .links a:not(:first-child):before {
    content: "|";
    color: grey;
    margin: 0.5rem;
  }
`;

export default Section