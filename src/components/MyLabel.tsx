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

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor,
  backgroundColor='transparent',
}: MyLabelProps) => {
  return (
    <span
      style={{
        textTransform: allCaps ? 'uppercase' : 'none',
        color: fontColor,
        backgroundColor,
      }}
      className={`label ${size} text-${color}`}
    >
      {label}
    </span>
  );
};
