export interface TextAreaProps {
    name: string;
    value: string;
    onChange: (name: string, value: string) => void;
}