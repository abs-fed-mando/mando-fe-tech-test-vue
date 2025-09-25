# Breadcrumb

## Properties
| Item                         | Type                     | Example | 
|------------------------------|--------------------------|---------|
| Parent Pages                 | List of ParentPageItem   |         |
| Home Page link               | Plain Text               |         |
| Home Page Screen Reader Text | Plain Text               |         |
| Current Page Label           | Plain Text               |         |

### Parent Page Properties (ParentPageItem)
| Item                   | Type       | Example   | 
|------------------------|------------|-----------|
| Parent Page Link       | Plain Text | /about-us |
| Parent Page Label Text | Plain Text | About us  |

## Requirements
| Requirement       | Acceptance Criteria                                                                                                                                                               |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Navigation        | A website editor should be able to see a breadcrumb navigation component. On mobile breakpoints, where there are parent pages, should collapse into non-clickable ellipsis (...). |
| Parent Page Count | A website visitor should only see up to 2 parent pages, showing the last 2 pages closest to the current page, regardless of how many levels deep they are                         |

