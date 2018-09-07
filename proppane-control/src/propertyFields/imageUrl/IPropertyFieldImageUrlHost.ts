/**
 * PropertyFieldHost component props
 */
export interface IPropertyFieldImageUrlHostProps {
    label: string;
    value?: string;
    onValueChanged: (value: string) => void;
    /**
     * we're using uniqueKey instead of key because key is a "reserved" attribute
     */
    uniqueKey: string;
}