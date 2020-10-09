# angStories - JSON and Angular based photo & poetry galleries

This project aims to feel a void when it comes to photo galleries templates. I never find myself happy with
what I find when looking for photo galleries because they somehow always forget to provide tools for the text that could
come with the images.

Each gallery is described by a json file.

Then each gallery is displayed according to the json file.


## Getting Started

* Clone this github repository.

* npm install will install the required libraries.

* npm start will start the app. You can also directly run the web server with : 

```shell script
$ http-server ./app -a localhost -p 8000 -d false
```

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
    "tags": "photographie,fiction,poesie",
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
      "item2": {
        "type": "simplePicture",
        "value": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/172a6e16376566.5603a43d3c3b9.jpg",
        "zoomable": "false",
        "style": "squarePhotos"
      },
    },
    "styles": {
      "title": "font-family: georgia,times,serif;font-size: 28px;color: #4C4C4C;font-weight: normal;font-style: normal;line-height: 1.4em;",
      "subtitle": "font-family: georgia,times,serif;color: #4C4C4C;",
      "mainText":"margin:-18px 0 14px 50px;padding:16px; font-weight:normal; white-space: pre;color: #4C4C4C;font-size:12px;font-family:georgia,times,serif;text-align:left",
      "photos": "border-width:6px 3px; border-style:solid; border-color: black;width:600px;",
      "divContainer": "border:2px black solid;text-align:center;margin-top:55px;margin:auto;background:#EAEAEA;padding:12px;min-width:630px;max-width:700px;",
      "separator": "width:60%;font-size:1px;line-height:1px;height:1px;border-color:#A7A7A7;margin:22px auto;border-width:1px 0px 0px 0px;border-style:dotted;",
      "caption": "color: #4C4C4C;font-size:12px;font-family: georgia,times,serif;",
      "emptySeparator": "height:48px;"
    }
  }
}
```
