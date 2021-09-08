# Terraforming

### Tutorial

Sometimes the ingame height isn't generated correctly. So you have to terraform the area up or down tp achieve the real height. You can check the original height on [Google Earth](https://www.google.de/intl/de/earth/index.html). To do this, place your cursor at the point you want to measure and read the height at the bottom right corner.
It might help to watch our [Terraform-Tutorial](https://www.youtube.com/watch?v=no8a_79kd1k) to see how we terraform in Germany.

### Commands

_Terraform downwards_<br/>
Select area including following ground layer
```bash
//expand 15 u
//replace 1,2,3,4,8,9,10,11,12,13,15,16,17,18,31,37,38,82,86,175 0
//replace <45 45 -- (until "0 block(s)" in chat)
//replace <251:7 251:7 -- (until "0 block(s)" in chat)
//replace 208 22
//replace <22 22 -- (until "0 block(s)" in chat)
//shift 1 u
//set 0
//shift 1 d
//contract [Height] d
//replace 0 133
```

_Terraform upwards_<br/>
Select area including following ground layer
```bash
//replace 31,37,38,82,83,86,175 0
//replace >45 45 -- (until "0 block(s)" in chat)
//replace >251:7 251:7 -- (until "0 block(s)" in chat)
//replace 208 22
//replace >22 22 -- (until "0 block(s)" in chat)
//replace 0 133
```
