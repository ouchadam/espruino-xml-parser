exports.parse = function(xml, tagName, childTagNames) {
  tags = tags || [];
  return findIndex(xml, tagName, 0)
    .map(separateTag(xml))
    .map(toModel(tagName, childTagNames));
}

function separateTag(input) {
  return function(tag) {
    return input.substring(tag.start) + input.substring(tag.end);
  };
}

function toModel(parent, tags) {
  return function(input) {
    var result = {};
    if (tags.length === 0) {
      result[parent] = getTagContents(input, parent);
      return result;
    }

    tags.forEach(tag => {
      result[tag] = getTagContents(input, tag);
    });
    return result;
  }
}

function getTagContents(input, tag) {
  var start = input.indexOf(`<${tag}>`);
  var end = input.indexOf(`</${tag}>`);
  return input.substring(start + `<${tag}>`.length, end);
}

function findIndex(input, tag, parsePosition, found) {
  found = found || [];
  var start = input.indexOf(`<${tag}>`, parsePosition);
  if (start === -1) {
    return found;
  }
  var end = input.indexOf(`</${tag}>`, parsePosition);
  found.push({start: start, end: end});
  return findIndex(input, tag, end + 1, found);
}
