# [http://coderkit.github.io/NocaJs](NocaJS)

A small library to easily manipulate javascript localStorage

#Dependencies

Noca.js doesn't have any dependencies

#Usage

First, create a new instance of Noca:

```js
	var foobar = new noca();
```

then use one of these methods:

```js
	// all values are stored as string
	
	foobar.update(name, content);	
		// Update your variable. If the variable doesn't exist, it will create a new one
		// name = name your localStorage variable
		// content = the value of your variable
	foobar.remove(name);
		// Remove your variable from localStorage
		// name = name of the variable you want to remove
	foobar.clear(name);
		// Set variable value to ""
		// name = name of the variable you want to clear
	foobar.setStandard(name, content);
		// Set a default value for your variable
		// name = name of the variable you want to et a standard for
		// content = the default content you want to set
	foobar.reset(name);
		// Reset the variable to the standard set. If no standard is set, it won't do anything
		// name = the name of the variable you want to reset
```

#Credit

©2015 Coderkit All right reserved
