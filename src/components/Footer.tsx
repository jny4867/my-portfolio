import styled from 'styled-components';

const Container = styled.footer`
  padding: 2rem;
  background-color: #f8f8f8;
  text-align: center;
  font-size: 0.9rem;
`;

export default function Footer() {
  return (
    <Container>
      © 2026 Nayoung All rights reserved.
    </Container>
  );
}