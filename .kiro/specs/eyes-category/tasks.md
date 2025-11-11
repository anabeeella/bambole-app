# Implementation Plan - Eyes Category

- [x] 1. Create eyes pattern data file

  - Create new file `src/data/patterns/eyes.js` with at least two eye options
  - Define eye data structure with id, name, icon, previewImage, pattern, and dimensions
  - Include detailed crochet patterns in HTML format for each eye option
  - Follow the same data structure pattern used in nose.js and ear.js
  - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [x] 2. Update patterns.js to include eyes category

  - Import the eyes data from `src/data/patterns/eyes.js`
  - Add new "Ojos" category entry to the characterParts array
  - Position the "Ojos" category after "Body" and before "Hocicos" in the array
  - Apply the same data mapping logic used for other categories
  - _Requirements: 1.1, 1.3, 5.1, 5.2_

- [x] 3. Create eye asset images

  - Create icon images for each eye option (eyes-1_icon.png, eyes-2_icon.png)
  - Create preview images for each eye option (eyes-1_prev.png, eyes-2_prev.png)
  - Save all images in `src/assets/categories/eyes/` directory
  - Ensure images have transparent backgrounds and correct dimensions
  - Ensure preview images are positioned correctly to overlay on character bodies
  - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [ ] 4. Verify integration with existing components

  - Test that CategorySelector automatically displays the "Ojos" button
  - Test that ItemGrid shows eye options when "Ojos" category is selected
  - Test that CharacterPreview displays selected eyes on the character
  - Verify selection/deselection behavior works correctly
  - Verify eyes persist when switching between categories
  - _Requirements: 1.1, 1.2, 2.1, 2.2, 2.3, 2.4, 3.1, 3.2, 3.3, 3.4_

- [ ] 5. Test state management and navigation

  - Test that selected eyes are included in character state
  - Test that eyes appear correctly in preview page after clicking "Preview"
  - Test that "Start again" button clears eye selection
  - Test that eyes work correctly with different body types
  - _Requirements: 5.3, 5.4_

- [ ]\* 6. Perform cross-browser and responsive testing
  - Test functionality in Chrome, Firefox, and Safari
  - Test responsive behavior on mobile devices
  - Verify image loading and fallback behavior
  - Test with slow network conditions to verify loading states
  - _Requirements: 2.1, 6.4_
