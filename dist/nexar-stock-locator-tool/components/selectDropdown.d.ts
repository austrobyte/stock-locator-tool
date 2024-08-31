import React from "react";
import { IncomingColors } from "../types";
type Option = {
    text: string;
    value: string;
};
type DropdownProps = {
    name: string;
    onClick: (value: string) => void;
    options: Option[];
    value: string;
    theme: IncomingColors;
};
export declare const SelectDropdown: ({ name, onClick, options, value, theme, }: DropdownProps) => React.JSX.Element;
export default SelectDropdown;
