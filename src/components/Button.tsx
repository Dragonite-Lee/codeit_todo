import Link from "next/link";
import styled from "styled-components";

import styles from "@/styles/components/button.module.css";

interface ButtonProps {
  img: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  backgroundColor: string;
  textColor: string;
}

const StyledButton = styled.button<{ $bgColor: string; $textColor: string }>`
  background-color: ${props => `var(${props.$bgColor})`};
  color: ${props => `var(${props.$textColor})`};
`;

export default function Button({img: Icon, text, backgroundColor, textColor}: ButtonProps) {
  return (
    <div className={styles.button_container}>
      <StyledButton $bgColor={backgroundColor} $textColor={textColor} className={styles.button_box}>
        <Icon />
        <div>{text}</div>
      </StyledButton>
    </div>
  );
};

