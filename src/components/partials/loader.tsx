import styled from 'styled-components';

const Div = styled.div`
    height: 80vh;
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Loader = () => {
    return (
        <Div>
            <div className="intersecting-circles-spinner">
                <div className="spinnerBlock">
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                </div>
            </div>
        </Div>
    )
}

export default Loader;