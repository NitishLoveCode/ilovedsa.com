/**
 * Converts a key-value object into an array of { label, value } objects.
 * 
 * Useful for feeding standardized options into Select dropdowns or other UI components.
 * 
 * @param data - An object where the key is the label (e.g., language name) and value is the associated version.
 * @returns An array of objects with { label, value } format.
 */
export const lableValue = (data: Record<string, string>) => {
    return Object.entries(data) // Step 1: Convert object into array of [key, value] pairs
      .map(([key, value]) => ({
        label: key,    // Step 2: Rename 'key' to 'label' to match UI component expectations
        value: value,  // Step 3: Keep 'value' the same for flexibility in future use
      }));
  };
  
  /*
  -----------------------------------------
  Example usage:
  
  Input:
  {
    javascript: "18.15.0",
    python: "3.10.0"
  }
  
  Output:
  [
    { label: "javascript", value: "18.15.0" },
    { label: "python", value: "3.10.0" }
  ]
  
  -----------------------------------------
  Why this approach?
  - Improves reusability: Can feed any object into dropdowns or forms.
  - Keeps UI and data structure separate: UI expects 'label' and 'value' pairs.
  - Easily maintainable: Just add or remove from the original object, no need to rewrite mapper logic.
  */
  