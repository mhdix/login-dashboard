import React from "react";

export type TButton = {
    children: React.ReactNode;
    className?: string;
    onClick: () => void
}