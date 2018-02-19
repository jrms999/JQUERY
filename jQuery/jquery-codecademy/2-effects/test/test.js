console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('js/main.js', 'utf8');

describe('', function () {
  it('', function() {
    // Match for correct target
    let structureImage = function() {
      $(document).ready(() => {
        $($buttonName).on($click, () => {
          $($imageName)
        });
      });
    };
    let varCallbacks = {
      '$buttonName, $click, $imageName ': function(buttonName, click, imageName) {
        if (buttonName.value !== '.hide-button') {
          return {failure: 'Target \'.hide-button\'.'};
        }
        else if (click.value !== 'click') {
          return {failure: 'Make the first argument of the on method \'click\''};
        }
        else if (imageName.value !== '.first-image') {
          return {failure: 'Target the image with \'.first-image\''};
        }
        return true;
      }
    };
    
    let isMatch = Structured.match(code, structureImage, {varCallbacks: varCallbacks});    
    failureMessage = varCallbacks.failure || 'Target the image in the callback function';
    assert.isOk(isMatch, failureMessage);
    
  });
});