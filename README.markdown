# Contexe - Contextual Executor

Contexe is a tiny, tiny snippet that provides an easy way to run code when a particular class attribute is present on either the `body` or `html` tag. It's essentially a simplified version of the [Garber-Irish method][gim].

## What for?

In CSS, you can easily give custom styles to a particular page while delivering the same CSS file to all pages:
  
    /* To communicate our brand values, make the intro text "pop" on the home page */
    body.home .intro {
      color: red;
      font: bold italic xx-large "Comic Sans";
      text-decoration: blink;
    }

In fact, some Content-management systems make this extra-easy by auto-generating classes based on context (in WordPress, `body_class()` will do the trick). I wanted a way to do the same sort of thing in Javascript: deliver one Javascript file and fire parts of it based on a classname.

## How to use it

Include the Contexe snippet in your own file, or link to it with a script tag.

    <script src="/path/to/contexe.js"></script>
    
Create a new Contexe instance, give it the tag you want to test against:

    var exe = new Contexe('html');
    
    exe.given('my-context-class', function() {
      // Do something
    });
    
Too much typing? Do it the lazy way:

    Contexe('body').given('my-context-class', function() {});

Chain given's together:

    Contexe('html')
      .given('ted', function(){ console.log('Alright!') })
      .given('bill', function(){ console.log('Shut up, Ted!')  });

Apply arguments to your callback:
    
    var totally = function (adj) {
      console.log('Totally ' + adj + '!');
    };
    Contexe('body')
      .given('awesome', totally, ['awesome']); // "Totally awesome!"
      .given('lame', totally, ['lame']); // "Totally lame!"

## Technical Things

### `Contexe()`

Contexe can take three values:

- 'html': which will cause it to check the `html` element for that instance
- 'body': which will cause it to check the `body` element
- A DOM Element: I don't know why you would want to do this, but you can

If you don't use the "new" keyword, Contexe will create a new instance automatically and memoize it. If Contexe is called again later using the same argument, it'll return the instance that was memoized.

If you're going to use 'body' or a DOM element, make sure you create your Contexe instance on or after DOMReady!

### `given()`

Takes three arguments: classname, callback and arguments as an array.

## I NEED MORE POWER!!!

Want something more... MVC? Try the [Garber-Irish method][gim]!

[gim]: http://www.viget.com/inspire/extending-paul-irishs-comprehensive-dom-ready-execution/