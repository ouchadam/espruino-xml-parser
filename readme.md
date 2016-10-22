xml-parser for use with embedded javascript systems, such as [Espruino](http://www.espruino.com/).


## Usage

```xml
<root>
  <item>
    <name>captain jack</name>
    <age>40</age>
  </item>
  <item>
    <name>admiral ackbar</name>
    <age>93</age>
  </item>
</root>
```

Multiple tags

```javascript
let result = parseXml(body, 'item', ['name', 'age']);
```

```json
[
  {
    "name": "captain jack",
    "age": "40"
  },
  {
    "name": "admiral ackbar",
    "age": "93"
  }
]
```

Single tag


```javascript
let result = parseXml(body, 'age');
```

```json
[
  {
    "age": "40"
  },
  {
    "age": "93"
  }
]
```
