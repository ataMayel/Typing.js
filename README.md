<style>
    h1{
        font-size:3rem
    }
    td{
        border:1px solid;
    }
</style>
# Typing.js
A simple and lightweight JavaScript library for creating typing animation on web pages.

<ul>
    <li>Object Oriented</li>
    <li>Essential options</li>
    <li>Size < 1KB</li>
    <li>Zero dependency</li>
</ul>

View [Website](https://atamayel.github.io/Typing.js).

### Installation :

Use CDN :
```html
<script src="https://cdn.jsdelivr.net/gh/ataMayel/Typing.js/typing.min.js"></script>
```
Or local file :
```html
<script src="typing.min.js"></script>
```
### Usage :

Set an id for the element :
```html
<h1 id="element"></h1>
```

Create an instance and customize your options:
```javascript
const title = new Typing('#element', {
        data: 'Hello world!',
        speed: 60,
        delay: 1000,
        repeat: true,
        back: {
            speed: 20,
            delay: 3000
        },
})

title.start()
```

### Options :
<table>
    <tr>
        <th>option</th>
        <th>description</th>
        <th>type</th>
    </tr>
    <tr>
        <td>data</td>
        <td>The text to be typed</td>
        <td>string</td>
    </tr>
    <tr>
        <td>speed</td>
        <td>Type speed in milliseconds.<br>default: 60</td>
        <td>number</td>
    </tr>
    <tr>
        <td>delay</td>
        <td>Starting delay time.<br>default: 0</td>
        <td>number</td>
    </tr>
    <tr>
        <td>repeat</td>
        <td>Typing will be repeated.<br>default: false</td>
        <td>boolean</td>
    </tr>
    <tr>
        <td>back</td>
        <td>Rewind the text by adjusting the speed and delay.</td>
        <td>object</td>
    </tr>
</table>

### Thank you for your support ❤