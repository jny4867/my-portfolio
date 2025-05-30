import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <div>{children}</div>
    </Wrapper>
  );
}