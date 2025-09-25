# Footer
## Properties
| Item                         | Type                        | Example | 
|------------------------------|-----------------------------|---------|
| Link list                    | List of FooterLinkColumn    |         |
| Social Links                 | List of SocialLinkItem      |         |
| Call to Action Label         | Plain Text                  |         |
| Call to Action Link          | Plain Text                  |         |
| Site Logo                    | SVG or PNG                  |         |
| Site Logo alt                | Plain text                  |         |
| Site Logo URL                | Plain text                  |         |
| Site Logo Screen Reader Text | Plain text                  |         |
| Hygiene Links                | List of HygieneLinkItem     |         |

### Footer Link Column Properties (FooterLinkColumn)
| Item  | Type                    | Example            | 
|-------|-------------------------|--------------------|
| Title | Plain Text              |                    |
| Links | List of FooterLinkItem  |                    |

### Footer Link Properties (FooterLinkItem)
| Item       | Type            | Example            | 
|------------|-----------------|--------------------|
| Link Label | Plain Text      |                    |
| Link Url   | Plain Text      |                    |

### Social Link Properties (SocialLinkItem)
| Item               | Type               | Example            | 
|--------------------|--------------------|--------------------|
| Social Icon        | Font Awesome Asset |                    |
| Screen Reader Text | Plain Text         |                    |
| Social Url         | Plain Text         |                    |

### Hygiene Link Properties (HygieneLinkItem)
| Item         | Type              | Example            | 
|--------------|-------------------|--------------------|
| Link Label   | Plain Text        |                    |
| Link Url     | Plain Text        |                    |

## Requirements
| Requirement    | Acceptance Criteria                                                            |
|----------------|--------------------------------------------------------------------------------|
| Links          | A website editor should be able to see a list of 4 columns of links            |
| Socials        | A website editor should be able to see a grid of associated social media links |
| Call to Action | A website editor should be able to see a Call to action                        |
| Logo           | A website editor should be able to see the Site logo                           |
| Hygiene Links  | A website editor should be able to see a list of hygiene links                 |