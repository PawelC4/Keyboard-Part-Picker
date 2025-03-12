import Toggle from "react-toggle";
import { useColorScheme } from "./ColorSchemeToggleOther.jsx"; // Import the hook
import "react-toggle/style.css";
import styled from "styled-components"; // Ensure toggle styles are included
const StyledToggle = styled(Toggle)`
    .react-toggle:focus {
        outline: blue !important;
        box-shadow: none !important;
    }
    .react-toggle-track {
        background-color: #ddd !important; /* Light mode background */
    }

    .react-toggle-thumb {
        border-radius: 50%;
        background-color: ${({ checked }) => (checked ? "var(--color-hover-text-color)" : "var(--color-active)")};
        transition: all 0.3s ease;
    }

    &:hover .react-toggle-thumb {
        background-color: ${({ checked }) => (checked ? "var(--color-active)" : "var(--color-active)")};
    }
`;
export const DarkModeToggle = () => {
    const { isDark, setIsDark } = useColorScheme();

    return (
        <StyledToggle
            checked={isDark}
            onChange={() => setIsDark(!isDark)}
            //icons={{ checked: "🌙", unchecked: "🔆" }}
            aria-label="Dark mode toggle"
            >
        </StyledToggle>
    );
};