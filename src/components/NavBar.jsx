import { AppBar, Toolbar, Typography, styled } from '@mui/material';
import { Collections as CollectionsIcon } from '@mui/icons-material';

const Component = styled(AppBar)`
  background: linear-gradient(135deg, #28313B 30%, #485461 90%);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  padding: 10px 0;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleContainer = styled('div')`
  display: flex;
  align-items: center;
`;

const StyledTypography = styled(Typography)`
  font-weight: bold;
  letter-spacing: 1.5px;
  color: #ffffff;
`;

const StyledIcon = styled(CollectionsIcon)`
  color: #ffcc00;
  font-size: 36px;
`;

const StyledH3 = styled('h3')`
  color: #ffcc00;
  font-weight: 300;
  font-size: 25px;
  margin: 0;
  position: absolute;
  top: 10px;
  right: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
    cursor: pointer;
  }
`;

const NavBar = () => {
  return (
    <Component position="static">
      <StyledToolbar>
        <TitleContainer>
          <StyledIcon />
          <StyledTypography variant="h5" style={{ marginLeft: 10 }}>
            Visual-Nexus
          </StyledTypography>
        </TitleContainer>
        <StyledH3>By-Abhishek Singh</StyledH3>
      </StyledToolbar>
    </Component>
  );
};

export default NavBar;
