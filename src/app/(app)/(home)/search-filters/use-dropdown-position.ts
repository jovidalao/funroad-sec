import { RefObject } from 'react';

export const useDropdownPosition = (
  ref: RefObject<HTMLDivElement | null> | RefObject<HTMLButtonElement>
) => {
  const getDropdownPosition = () => {
    if (!ref.current) return { top: 0, left: 0 };

    const rect = ref.current.getBoundingClientRect();
    const dropdownWidth = 240; // Width of dropdown ( w-60 = 15rem = 240px )

    // Calculate the initial position of the dropdown
    let left = rect.left + window.scrollX;
    const top = rect.bottom + window.scrollY;

    // Check if the dropdown would overflow the viewport on the right
    if (left + dropdownWidth > window.innerWidth) {
      // If it does, align it to the right edge of the button
      left = rect.right - dropdownWidth + window.scrollX;

      // If it still overflows, align to the right edge of viewport with some padding
      if (left < 0) {
        left = window.innerWidth - dropdownWidth - 16; // 16px padding
      }
    }
    // Ensure the dropdown does not go off the left edge of the viewport
    if (left < 0) {
      left = 16; // 16px padding from the left edge
    }

    return { top, left };
  };
  return { getDropdownPosition };
};
