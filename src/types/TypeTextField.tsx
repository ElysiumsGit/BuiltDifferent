// export type InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

import type { ReactNode } from "react";

// // types/TypeTextField.ts
export type TextFieldProps = {
    label?: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    name?: string;
};

export type TextFieldSearchProps = {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export type MyTextProps = {
    variant?: "title" | "subtitle" | "default";
    children?: React.ReactNode;
    className?: string;
};

export type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    icon?: string; 
    iconAlt?: string;
};

export type SidebarItemProps = {
  label: string;
  icon: ReactNode;
  children?: ReactNode;
  to?: string;
};