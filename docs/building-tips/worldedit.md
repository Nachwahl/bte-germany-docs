# WordEdit

To work with World Edit get yourself a wooden axe and right/left click on a block to set your selection corners.

### Table of content
import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

### Most common commands

`//line [ID]` -- draws a line between your first position and your second position

`//replace [ID_A] [ID_B]` -- replaces block A with block B

`//fill [ID] [radius]` -- fills an area with a custom block in a custom radius on the height your standing (Be careful with the radius. 50 is enough)

`//stack [amount] [direction]` -- stacks your selection a custom times in any direction

`//move [amount] [direction]` -- moves your selection x blocks in any direction

:::info

To set your direction use ‘_up_’, ‘_down_’, ‘_south_’, ‘_east_’, ‘_west_’ or ‘_north_’

To see the block-ID, press F3+H

:::

### Copy & Paste

`//copy` -- copies your selection from the point where you're standing

`-m [ID]` -- just copy the written ID

`//cut` -- cuts your selection from the point where you're standing

`//paste` -- pastes your selection

`-a` -- pastes without air

`-s` -- moves your selection to the point where you paste it

### Edit Clipboard

`//rotate [0-360]` -- rotates your clipboard (use 90,180,270 to rotate 90 degrees)

`//flip` -- mirrors your clipboard

### Selection commands
To make your selection visible download WorldEdit CUI Forge Edition 3. You'll find a link in 📌builder-infos

`//sel cuboid` -- select shapes, default

`//sel poly` -- select shapes

`//sel convex` -- select shapes

`//expand [amount] [direction]` -- expands your selection in any direction

`//contract [amount] [direction]` -- contracts your selection in any direction

`//shift [amount] [direction]` -- moves only your selection in any direction

### Special Block IDs

`43:8` -- smooth stone slab

`43:9` -- smooth sandstone slab

`100:13` -- brown mushroom block

`100:14` -- red mushroom block

`100:15` -- white mushroom block

`[Wood]:12` -- six side wood log

### Change biome

With the command `//setbiome [biome]` the colors of grass, water and other natural materials can be adjusted. After a rejoin, the colors are changed. Here is an example image of the biomes:

![](https://media.discordapp.net/attachments/781642142174019594/814954318192574554/image.png?width=1178&height=663)
