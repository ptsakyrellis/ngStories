# angStories - JSON and Angular based photo & poetry galleries

This project aims to feel a void when it comes to photo galleries templates. I never find myself happy with
what I find when looking for photo galleries because they somehow always forget to provide tools for the text that could
come with the images.

Each gallery is described by a json file.

Then each gallery is displayed according to the json file.


## Getting Started

You can clone this github repository.

Then npm install will install the required libraries.

npm start will start the app.

## Demo

http://pioggia.info

## Gallery json file example

```json
{
  "story": {
    "title": {
      "value": "Abandoned Pool",
      "displayTitle": "Abandoned Pool",
      "style": "title"
    },
    "subtitle": {
      "value": "Nevers, France, 2011",
      "style": "subtitle"
    },
    "date": "mai 2015",
    "author": "pioggia",
    "authorWebsite": "http://pioggia.info",
    "rootPhotoPath": "http://pioggia.info",
    "orientation": "portrait",
    "template": "default",
    "tags": "photographie,religion,crucifixion,fiction",
    "items" : {
      "text0": {
        "type": "text",
        "value": "As you know,<br />things eventually tend to rot, to dislocate.<br /><br />Will I rot, too, as soon as I am abandoned in this world...",
        "zoomable": "false",
        "style": "mainText"
      },
      "sep0": { "type": "separator", "style": "separator", "value": "" },
      "item1": {
        "type": "simplePicture",
        "value": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/e7248516330616.5603a2d379399.jpg",
        "zoomable": "false",
        "style": "photos"
      },
      "sep1": { "type": "separator", "style": "separator", "value": "" },
      "item3": {
        "type": "simplePicture",
        "value": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/172a6e16376566.5603a43d3c3b9.jpg",
        "zoomable": "false",
        "style": "squarePhotos"
      },
      "sep11": {
        "type": "separator",
        "style": "separator",
        "value": ""
      },
      "item2": {
        "type": "simplePicture",
        "value": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/104f1e16333422.5603a082c24c3.jpg",
        "zoomable": "false",
        "style": "squarePhotos"
      },
      "sep21": {
        "type": "separator",
        "style": "separator",
        "value": ""
      },
      "item4": {
        "type": "simplePicture",
        "value": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/5e3f8816333430.5603a097b72ef.jpg",
        "zoomable": "false",
        "style": "vertPhotos"
      },
      "sep4": {
        "type": "separator",
        "style": "separator",
        "value": ""
      },
      "item5": {
        "type": "simplePicture",
        "value": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1aab1616375344.5603a371468e8.jpg",
        "zoomable": "false",
        "style": "squarePhotos"
      },
      "sep51": {
        "type": "separator",
        "style": "separator",
        "value": ""
      },
      "item6": {
        "type": "simplePicture",
        "value": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/94cad516329662.5603a252724f2.jpg",
        "zoomable": "false",
        "style": "squarePhotos"
      },
      "sep61": {
        "type": "separator",
        "style": "separator",
        "value": ""
      },
      "item7": {
        "type": "simplePicture",
        "value": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/82b88316333424.5603a098b3db5.jpg",
        "zoomable": "false",
        "style": "vertPhotos"
      },
      "sep71": {
        "type": "separator",
        "style": "separator",
        "value": ""
      },
      "item8": {
        "type": "simplePicture",
        "value": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/eec6c016330620.5603a067dd703.jpg",
        "zoomable": "false",
        "style": "photos"
      },
      "sep81": {
        "type": "separator",
        "style": "separator",
        "value": ""
      },
      "item9": {
        "type": "simplePicture",
        "value": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/0587ea16375348.5603a1e3c5d8e.jpg",
        "zoomable": "false",
        "style": "squarePhotos"
      },
      "sep91": {
        "type": "separator",
        "style": "separator",
        "value": ""
      },
      "item10": {
        "type": "simplePicture",
        "value": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/a7205116375354.5603a1c76c5e9.jpg",
        "zoomable": "false",
        "style": "squarePhotos"
      },
      "sep101": {
        "type": "separator",
        "style": "separator",
        "value": ""
      },
      "item11": {
        "type": "simplePicture",
        "value": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/c77bfa16329670.5603a25301481.jpg",
        "zoomable": "false",
        "style": "photos"
      },
      "sep113": {
        "type": "separator",
        "style": "separator",
        "value": ""
      },
      "item12": {
        "type": "simplePicture",
        "value": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/f8f56a16375356.5603a434ddfaa.jpg",
        "zoomable": "false",
        "style": "vertPhotos"
      },
      "sep123": {
        "type": "separator",
        "style": "separator",
        "value": ""
      },
      "item13": {
        "type": "simplePicture",
        "value": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/6ff4f816376570.5603a1cf0e532.jpg",
        "zoomable": "false",
        "style": "vertPhotos"
      },
      "sep134": {
        "type": "separator",
        "style": "separator",
        "value": ""
      },
      "item14": {
        "type": "simplePicture",
        "value": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/eee5dd16329674.5603a08183ef8.jpg",
        "zoomable": "false",
        "style": "photos"
      },
      "sep145": {
        "type": "separator",
        "style": "separator",
        "value": ""
      },
      "sep145": {
        "type": "separator",
        "style": "emptySeparator",
        "value": ""
      },
      "item15": {
        "type": "simplePicture",
        "value": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/c8796516330614.5603a1c41edad.jpg",
        "zoomable": "false",
        "style": "squarePhotos"
      }
    },
    "styles": {
      "title": "font-family: georgia,times,serif;font-size: 28px;color: #4C4C4C;font-weight: normal;font-style: normal;line-height: 1.4em;",
      "subtitle": "font-family: georgia,times,serif;color: #4C4C4C;",
      "mainText":"margin:-18px 0 14px 50px;padding:16px; font-weight:normal; white-space: pre;color: #4C4C4C;font-size:12px;font-family:georgia,times,serif;text-align:left",
      "conclusion":"padding:16px 44px 16px 0px;text-align:right; font-style:italic; font-weight:normal; white-space: pre;color: #4C4C4C;font-size:14px;font-family: georgia,times,serif;",
      "photos": "border-width:6px 3px; border-style:solid; border-color: black;width:600px;",
      "vertPhotos": "border-width:3px 6px; border-style:solid; border-color: black; width:400px;",
      "squarePhotos": "border-width:6px 6px; border-style:solid; border-color: black; width:550px;",
      "divContainer": "border:2px black solid;text-align:center;margin-top:55px;margin:auto;background:#EAEAEA;padding:12px;min-width:630px;max-width:700px;",
      "separator": "width:60%;font-size:1px;line-height:1px;height:1px;border-color:#A7A7A7;margin:22px auto;border-width:1px 0px 0px 0px;border-style:dotted;",
      "caption": "color: #4C4C4C;font-size:12px;font-family: georgia,times,serif;",
      "emptySeparator": "height:48px;"
    }
  }
}
```
