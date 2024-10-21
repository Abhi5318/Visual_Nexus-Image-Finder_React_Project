import { Grid, styled } from '@mui/material';
import Image from './Image';

const StyledGridContainer = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  margin: 0;
`;

const StyledGridItem = styled(Grid)`
  padding: 10px;

  @media (min-width: 600px) {
    width: 48%;
  }

  @media (min-width: 900px) {
    width: 23%;
  }
`;

const ImageWrapper = styled('div')`
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1) rotate(3deg);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    filter: brightness(1.1) saturate(1.2);
  }

  img {
    transition: transform 0.4s ease-in-out, filter 0.4s ease-in-out;
  }

  &:hover img {
    transform: scale(1.05);
    filter: grayscale(0.3);
  }
`;

const Images = ({ data }) => {
  return (
    <StyledGridContainer container>
      {data.map((image) => (
        <StyledGridItem key={image.id} item>
          <ImageWrapper>
            <Image image={image} />
          </ImageWrapper>
        </StyledGridItem>
      ))}
    </StyledGridContainer>
  );
};

export default Images;
