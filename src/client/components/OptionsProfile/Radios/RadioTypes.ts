export interface RadiosProps {
  setSport: () => void;
  setDistance: () => void;
  setFormat: () => void;
  sport: string;
  customDistance: boolean;
  distance: number;
  placeholder: string;
  format: string;
}

export interface RadioColumnProps {
  title: string;
  radioValues: RadioValueProps[];
  isLoaded: boolean;
  format?: string;
  distance?: number;
  customDistance?: boolean;
  placeholder?: string;
  setCallback: () => void;
}

export interface SingleRadioProps {
  id: string;
  type: string;
  index: number;
  isLoaded: boolean;
  name: string;
  distance?: number;
  customDistance?: boolean;
  placeholder?: string;
  labelText?: string | undefined;
  value?: string | undefined;
  setCallback: () => void;
}

export type RadioValueProps = {
  type: string;
  id: string;
  name: string;
  value?: string | undefined;
  labelText?: string | undefined;
};
