# Related Content
## Properties
| Item                | Type                       | Example | 
|---------------------|----------------------------|---------|
| Title               | Plain Text                 |         |
| Call to Action Text | Plain Text                 |         |
| Call to Action Link | Plain Text                 |         |
| Cards               | List of RelatedContentItem |         |

### Related Content Card Properties (RelatedContentItem)
| Item        | Type            | Example            | 
|-------------|-----------------|--------------------|
| Date        | do/mmm/yyyy     | 7th September 2025 |
| Title       | Plain Text      |                    |
| Description | Plain Text      |                    |
| Image       | PNG or SVG      |                    |
| Image Alt   | Plain Text      |                    |
| Tags        | List of Strings |                    |

## Requirements
| Requirement    | Acceptance Criteria                                                                                                                                                                                                                                                                       |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Title          | A website editor should be able to see a title for the related content                                                                                                                                                                                                                    |
| Call to action | A website editor should be able to see a call to action to redirect the user elsewhere                                                                                                                                                                                                    |
| Cards          | A website editor should be able to see a grid of fixed height cards. If the description goes over 2 lines, it should be collapsed into an ellipsis. Hovering over the cards should reveal the remaining text and the tags. When not hovering, the card should reset to its default state. |
