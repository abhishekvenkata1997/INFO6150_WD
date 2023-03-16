index.html:

In this project, I have used Sass to write modular and maintainable CSS code. 
I have organized the code into separate partial files based on their functionality, 
such as variables, custom properties, nesting, interpolation, mixins, and functions. 
Then, I have imported these partial files into a main Sass file, which is compiled 
into a single CSS file and linked to the HTML document.

The _variables.scss file defines the global variables that are used throughout the project, 
such as the primary, secondary, and accent colors, and imports the Google Fonts used in the 
project. 

The _custom-properties.scss file defines the custom properties at the root level, 
which can be used to define colors and other values throughout the project.

The _nesting.scss file demonstrates how to use nesting in Sass to write more concise 
and readable code. It defines the styles for the navigation menu, including the display, 
alignment, and font size of the menu items.

The _interpolation.scss file demonstrates how to use interpolation in Sass to dynamically
generate CSS properties based on variables or expressions. It defines the styles for the
hero section and the menu items, including the background image, font sizes, and spacing.

The _mixins.scss file demonstrates how to use mixins in Sass to reuse styles across multiple
selectors. It defines two mixins: container for defining a max-width container with margin
and padding, and flex-center for centering elements horizontally and vertically using flexbox.

The _functions.scss file demonstrates how to use functions in Sass to perform calculations
or transformations on values. It defines a calculateRem function that converts pixel values
to rem units, which is useful for making the site more responsive.

Finally, in the style.scss file, I have imported all the partial files and written the main
styles for the HTML document. I have defined the font family, background color, and padding 
for the body element, and the background color, text color, and padding for the header element. 
I have also used the container and flex-center mixins to define the styles for the hero section 
and the grid box layout for the menu items. The grid box layout is achieved by setting the 
display property to grid, the grid-template-columns property to 
repeat(auto-fit, minmax(calculateRem(300px), 1fr)), and the grid-gap property to calculateRem(32px). 
This creates a grid of items with a minimum width of 300px and a flexible number of columns 
that wrap depending on the screen size.

signup.html:
Variables: This section defines the primary, secondary, and background colors used throughout
the stylesheet. These colors are used to define the appearance of various elements on the 
webpage.

Custom Properties: This section defines some custom properties that are used in other parts 
of the stylesheet. Specifically, it sets the padding and font size for the footer element.

Nesting: This section uses nesting to define the styles for the header, main, and footer 
elements. Each of these elements has its own set of styles defined within the larger block.

Mixins: This section defines a mixin that is used to create a responsive grid system. 
The mixin takes a parameter that determines the number of columns in the grid and 
calculates the width of each column based on that parameter.

Functions: This section defines two functions that are used to lighten and darken colors. 
These functions are used to adjust the primary and secondary colors defined in the Variables 
section to create variations of those colors.

Placeholder Selectors: This section defines a placeholder selector for a button element, 
which is then extended by the button and a elements elsewhere in the stylesheet. 
This allows the same styles to be applied to multiple elements without duplicating code.