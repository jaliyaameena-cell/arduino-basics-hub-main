


import React from "react";

interface BBButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
}

const BBButton: React.FC<BBButtonProps> = ({ children, onClick, href }) => {
    // If href is given → act like a link
    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
                {children}
            </a>
        );
    }

    // Otherwise → normal button
    return (
        <button
            onClick={onClick}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
        >
            {children}
        </button>
    );
};

export default BBButton;

