![Latest Version](https://img.shields.io/github/v/release/jbhaywood/scaleGrid)
![Foundry Version](https://img.shields.io/endpoint?url=https%3A%2F%2Ffoundryshields.com%2Fversion%3Fstyle%3Dflat%26url%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fjbhaywood%2FscaleGrid%2Fmaster%2Fmodule.json)
![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2FscaleGrid&colorB=blueviolet)
![GitHub](https://img.shields.io/github/license/jbhaywood/scaleGrid)

# Grid Scaler

# THIS VERSION IS NO LONGER MAINTAINED! USE THE ONE [HERE](https://github.com/atomdmac/scaleGrid) INSTEAD!!

## How to Use

Once the plugin is loaded a new wrench icon will appear below the main tool selection. Click on the Grid Scaler icon to get to the tools.  
![tool-icon](https://user-images.githubusercontent.com/5131886/174724012-343697bb-e8da-48a8-acea-df36ba3ca0d2.jpg)  

### Draw Square/Hex  
![draw-icon](https://user-images.githubusercontent.com/5131886/174724067-c5e65450-6041-45aa-99e0-37f6d3142cc9.jpg)  
This will let you draw a square or hex on the map then have the grid size set to match it.  No offset is applied with this and should be applied manually.  

![draw-square](https://user-images.githubusercontent.com/5131886/174725222-e5841a0a-bb0a-4f24-8030-8f0635850e11.gif)  
![draw-hex2](https://user-images.githubusercontent.com/5131886/174726158-7a8a76cf-78a6-4e83-af7c-51fafb78f20a.gif)  

### Draw 3x3  
![3x3-icon](https://user-images.githubusercontent.com/5131886/172427631-08dba46f-3a9c-423d-9910-6c2aa2802364.jpg)  
Draw a 3x3 grid square on the map then have the grid size set to match it. No offset is applied with this and should be applied manually.  

![draw-3x3](https://user-images.githubusercontent.com/5131886/174724283-d8eb4720-20f0-4fb3-bad7-09357033419c.gif)

### Set X Offset  
![x-offset-icon](https://user-images.githubusercontent.com/5131886/172427490-f187c2f7-1a67-45d4-99b4-2ecc0ee2d413.jpg)  
When this is selected it will let you move the grid along the X plane. Clicking the button then clicking on a vertical line in one of your grid squares will adjust the grid to line up with that point.  

### Set Y Offset  
![y-offset-icon](https://user-images.githubusercontent.com/5131886/172427540-fd06275a-1116-42ad-adf6-3fb371b6a72b.jpg)  
When this is selected it will let you move the grid along the Y plane. Clicking the button then clicking on a horizontal line in one of your grid squares will adjust the grid to line up with that point. 

### Move/Scale Grid  
![move-scale-grid](https://user-images.githubusercontent.com/5131886/174724521-689d1023-3adf-48cf-9827-af9f328c28cf.jpg)  
This allows you to manually set the grid size by entering the number of horizontal grid spaces across the map. Works best with maps where the grid covers the image entirely.  

![move-scale-grid](https://user-images.githubusercontent.com/5131886/174724616-fecb4ea6-6329-4373-b8ab-1dbd9e27cbe0.gif)  

### Enter Grid Size  
![grid-siz-dialog-icon](https://user-images.githubusercontent.com/5131886/172427758-85b09710-614f-4d59-9d2f-b31f50bf937b.jpg)  
This allows you to manually set the grid size by entering the number of horizontal grid spaces across the map. Works best with maps where the grid covers the image entirely.  

### Toggle Grid Preview  
![toggle-grid-icon](https://user-images.githubusercontent.com/5131886/172427851-3b7dc901-24b2-45fe-b2ee-7fbc27465712.jpg)  
Changes the grid settings temporarily to make it fully opaque and pink. This is helpful when you've set your grid to be transparent and just want to quickly make it visible without having to go into the configuration menu.  

### Reset Grid  
![reset-grid-icon](https://user-images.githubusercontent.com/5131886/172427894-3301e846-4c1e-40af-a84d-8ed5466beb80.jpg)  
This will set the grid to 100 pixels square with 0 X/Y offset. It also changes the grid color to pink to make it easier to see.  

## To Do
- Auto-calculate the offset after using the hex draw tool. Could possibly get rid of the horizontal and vertical adjustment buttons then.
- Add button to set to the current size and position of the map. Not exactly grid related, but I do this all the time and it sucks to have to go into the map config to do it.

## Notes and Mentions
This module was first created by UberV. I'm taking it over to get some bugs fixed and add new features.
