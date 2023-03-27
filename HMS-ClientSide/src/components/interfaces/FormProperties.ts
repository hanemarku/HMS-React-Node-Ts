export interface FormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  buttonText: string;
}