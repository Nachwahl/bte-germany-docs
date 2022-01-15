# Add a satellite view to Terramap

While building, it can be very useful to have a satellite view on the Terramap. the following tutorial shows you how you can do that.

![](https://media.nachwahl.dev/GNJ6lK.jpg)

## Step 1
Head over to [mapbox.com](https://www.mapbox.com/) and click the "Sign up" button on the top right corner of the page.

![](https://media.nachwahl.dev/a9o8tv.png)

Now, fill in the required information and click on "Get started"

![](https://media.nachwahl.dev/yICdpR.png)

Finally, check your email account to verify your account.

![](https://media.nachwahl.dev/scGVb1.png)

🎉 You should now see the Mapbox dashboard!

## Step 2

In your Mapbox dashboard, click on "Create a map in Studio". Then click on "New style".

![](https://media.nachwahl.dev/60xZE3.png)

In the now opening window, select "Satellite Streets" and click on "Customize Satellite Streets".

![](https://media.nachwahl.dev/JO63W1.png)

🗺️ There should now open a window showing a satellite map.

## Step 3

:::caution
This next part is quite tricky. If you have any questions, don't hesitate to DM our support bot (BTE 🇩🇪 Support#2778)!
:::

1. Press <kbd>S</kbd> on your keyboard.
2. Scroll down to "Developer resources"
3. Click on "Third party" 

![](https://media.nachwahl.dev/VNAupE.png)

4. In the dropdown, select "CARTO"

![](https://media.nachwahl.dev/oRt9FU.png)

5. Now you can copy the URL, by clicking the copy icon 

![](https://media.nachwahl.dev/5TbP0G.png)

## Step 4

Finally, we can hop over in the game. Press <kdb>M</kdb> on your keyboard to open Terramap.
On the top left corner, click on the settings button.

![](https://media.nachwahl.dev/x6BGyI.png)

Click on the next icon, to go to the right page.

![](https://media.nachwahl.dev/ib0Yhw.png)

On this page, click on the "Open map style config file". This should open a file in your preferred text editor.

Now, select everything and paste in the following text:

```json
{
  "maps": {
    "mapbox": {
      "url": "YOUR_URL",
      "urls": [
        "YOUR_URL"
      ],
      "name": {
        "en_us": "Satellite"
       },
      "copyright": {
        "en_us": "[\"\",{\"text\":\"© \",\"color\":\"white\"},{\"text\":\"OpenStreetMap\",\"underlined\":true,\"color\":\"aqua\",\"clickEvent\":{\"action\":\"open_url\",\"value\":\"https://www.openstreetmap.org\"}},{\"text\":\" contributors and \",\"color\":\"white\"},{\"text\":\"Mapbox\",\"underlined\":true,\"color\":\"aqua\",\"clickEvent\":{\"action\":\"open_url\",\"value\":\"https://mapbox.com\"}}]"
    },
      "min_zoom": 0,
      "max_zoom": 19,
      "display_priority": 1000,
      "allow_on_minimap": true,
      "max_concurrent_requests": 2,
      "debug": false
    }    
  },
  "metadata": {
    "version": 0,
    "comment": ""
  }
}
```

** Now replace _YOUR_URL_ with the URL you copied from the previous step.**
You might have to copy the URL again, see Step 3.

You can now save the file by pressing <kbd>Ctrl</kbd> + <kbd>S</kbd> on your keyboard.

Switch to the game again and click on "Reload map styles". There should be now one user map style.

:::info
You have to reopen the Terramap menu to see the new style.
:::

![](https://media.nachwahl.dev/9QdOgc.png)

Click on "Save" and you are finished 😀

:::tip
  If you want to switch to the satellite map, click on the "Change map style" button on the middle right of the Terramap.
![](https://media.nachwahl.dev/flkI5W.png)
Then you can select "Satellite".
:::



