/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
     * Is this the text in the label
     */
    label: string;
    /**
     * Is this the size of the text label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalize the label text
     */
    allCaps?: boolean;
    /**
     * Color of the label text
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Personalize color of text
     */
    fontColor?: string;
    /**
     * Personalize background color of text
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
