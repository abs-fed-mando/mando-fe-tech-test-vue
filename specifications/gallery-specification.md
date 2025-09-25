# Gallery
## Properties
| Item           | Type                                                | Example | 
|----------------|-----------------------------------------------------|---------|
| Title          | Plain Text                                          |         |
| Description    | Plain Text                                          |         |
| Gallery Slides | List of GallerySlideImageItem/GallerySlideVideoItem |         |

### Gallery Slide Image Properties (GallerySlideImageItem)
| Item     | Type       | Example | 
|----------|------------|---------|
| Alt Text | Plain Text |         |
| Image    | PNG or SVG |         |

### Gallery Slide Video Properties (GallerySlideVideoItem)
| Item       | Type       | Example | 
|------------|------------|---------|
| Alt Text   | Plain Text |         |
| Thumbnail  | PNG or SVG |         |
| Youtube ID | Plain Text |         |

## Requirements
| Requirement | Acceptance Criteria                                                                                                             |
|-------------|---------------------------------------------------------------------------------------------------------------------------------|
| Title       | A website editor should be able to see a title for the gallery                                                                  |
| Description | A website editor should be able to see a description for the gallery                                                            |
| Navigation  | A website editor should be able to navigate through each slide of the gallery, via the Pagination or the left and right buttons |
| Video       | A website editor should be able to Play a video in the gallery. When the video is not the active slide, it should reset         |
