import React from "react";
import styled from "styled-components";

function AppHeader() {
    const GradientHeader = styled.h1`
        background: radial-gradient(#430089, #82ffa1);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        text-align: center;
        margin: 1rem 0;
    `;
    return <GradientHeader>Chillify Music Player</GradientHeader>;
}

export default AppHeader;
