import { Box, InputBase, Button, styled } from '@mui/material';

const Component = styled(Box)`
    display: flex;
    align-items: center;
    background: #F6F6F6;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    }

    & > div {
        margin-right: 10px;
    }
`;

const StyledInput = styled(InputBase)`
    flex: 1;
    background: white;
    border-radius: 30px;
    padding: 8px;
    border: 1px solid #D1D1D1;
    transition: border 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        border-color: #445A6F;
        box-shadow: 0 0 5px rgba(68, 90, 111, 0.5);
        outline: none;
    }
`;

const StyledButton = styled(Button)`
    background: #445A6F;
    color: white;
    padding: 8px 16px;
    border-radius: 30px;
    transition: background 0.3s ease;

    &:hover {
        background: red;
    }
`;

const BreadCrumb = ({ onTextChange, onCountChange, onSearch }) => {
    return (
        <Component m={1}>
            <StyledInput
                onChange={(e) => onTextChange(e.target.value)}
                placeholder="Search images"
            />
            <StyledInput
                onChange={(e) => onCountChange(e.target.value)}
                placeholder="Number of images"
                type="number"
            />
            <StyledButton onClick={onSearch}>Search</StyledButton>
        </Component>
    );
};

export default BreadCrumb;
