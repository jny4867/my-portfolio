import styled from 'styled-components';

const Container = styled.header`
  padding: 1rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
`;

export default function Header() {
  return (
    <Container>
      <h1>Jeon Nayoung</h1>
    </Container>
  );
}