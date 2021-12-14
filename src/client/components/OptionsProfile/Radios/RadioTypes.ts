import React from "react";

export interface RadiosProps {
  setSport: React.MouseEventHandler<HTMLInputElement>;
  setDistance: React.MouseEventHandler<HTMLInputElement>;
  setFormat: React.MouseEventHandler<HTMLInputElement>;
  sport: string;
  customDistance: boolean;
  distance: number;
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
  setCallback: React.MouseEventHandler<HTMLInputElement>;
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
  setCallback: React.MouseEventHandler<HTMLInputElement>
}

export type RadioValueProps = {
  type: string;
  id: string;
  name: string;
  value?: string | undefined;
  labelText?: string | undefined;
};