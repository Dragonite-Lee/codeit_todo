import styled from "styled-components";

import styles from "@/styles/components/button.module.css";

interface ButtonProps {
  img: React.FC<React.SVGProps<SVGSVGElement>>;
  backgroundColor: string;
}

const StyledButton = styled.button<{ $bgColor: string }>`
  background-color: ${(props) => `var(${props.$bgColor})`};
`;

export default function SmallButton({
  img: Icon,
  backgroundColor,
}: ButtonProps) {
  return (
    <div className={styles.small_button_container}>
      <StyledButton
        $bgColor={backgroundColor}
        className={styles.small_button_box}
      >
        <Icon />
      </StyledButton>
    </div>
  );
}
