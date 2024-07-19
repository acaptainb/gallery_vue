export class Gallery {
    constructor(data) {
        this.image = data.imgUrls.full
        this.title = data.slug
        this.id = data.id
        this.description = data.description
        this.color = data.color
        this.smallImage = data.small
    }
}



// {
//     "id": "icsGNDfrIgg",
//     "slug": "a-painting-of-a-village-in-the-mountains-icsGNDfrIgg",
//     "height": 3768,
//     "width": 2355,
//     "originalLink": "https://unsplash.com/photos/a-painting-of-a-village-in-the-mountains-icsGNDfrIgg",
//     "imgUrls": {
//       "raw": "https://images.unsplash.com/photo-1695841396609-2ac266b72443?ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258NjF8a1dEMmRNQ3d2eTB8fHx8fDJ8fDE3MjExNTAxNjN8&ixlib=rb-4.0.3",
//       "full": "https://images.unsplash.com/photo-1695841396609-2ac266b72443?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258NjF8a1dEMmRNQ3d2eTB8fHx8fDJ8fDE3MjExNTAxNjN8&ixlib=rb-4.0.3&q=85",
//       "regular": "https://images.unsplash.com/photo-1695841396609-2ac266b72443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258NjF8a1dEMmRNQ3d2eTB8fHx8fDJ8fDE3MjExNTAxNjN8&ixlib=rb-4.0.3&q=80&w=1080",
//       "small": "https://images.unsplash.com/photo-1695841396609-2ac266b72443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258NjF8a1dEMmRNQ3d2eTB8fHx8fDJ8fDE3MjExNTAxNjN8&ixlib=rb-4.0.3&q=80&w=400",
//       "thumb": "https://images.unsplash.com/photo-1695841396609-2ac266b72443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258NjF8a1dEMmRNQ3d2eTB8fHx8fDJ8fDE3MjExNTAxNjN8&ixlib=rb-4.0.3&q=80&w=200",
//       "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1695841396609-2ac266b72443"
//     },
//     "description": "Title: 1944P202 Burg, Finstergrun Description: 1944P202 Burg, Finstergrun, 1940 Audrey M Weber (d.1950) Finstergrün Castle (German: Burg Finstergrün) is a castle in the state of Salzburg, Austria. Keywords: Landscape, Mountain, Birmingham Museums Trust/Birmingham Museum & Art Gallery, Oil Painting, Castle, PCF, Austria https://dams.birminghammuseums.org.uk/asset-bank/action/viewAsset?id=8376",
//     "altDescription": null,
//     "attribution": "Birmingham Museums Trust",
//     "color": "#c0c0a6",
//     "admirers": [],
//     "cached": true
//   }